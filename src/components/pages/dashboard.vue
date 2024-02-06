<template>
  <div class="dashboard">
    <div v-show="address == null">
      <div class="boxe">
        <div class="wallet-description">
          Please make sure the URL is: <span style="color: #8d80ff">wallet.neatio.net</span>
        </div>
      </div>
      <div class="boxd">
        <div class="boxwb" id="card1">
          <div class="lockked">
            <img src="../../assets/metamask.png" alt="Metamask" class="lockimg" />
          </div>
          <div class="lockedm">Metamask</div>
          <div class="lockedm2"></div> 
          <button class="rippleSelectM" @click="connectAccount">UNLOCK</button>
 
        </div>
        <div class="boxwb" id="card2">
          <div class="lockked">
            <img src="../../assets/unencrypted.png" alt="Private Key" class="lockimg" />
          </div>
          <div class="lockedm">Private Key</div>
          <div class="lockedm2"></div> 
          <button class="rippleSelectM" @click="importKey" >IMPORT</button>
 
        </div>
        <div class="boxwb" id="card3">
          <div class="lockked">
            <img src="../../assets/encrypted.png" alt="Keystore File" class="lockimg" />
          </div>
          <div class="lockedm">KeyStore File</div>
          <div class="lockedm2"></div> 
          <button class="rippleSelectM" @click="importKeyStore">IMPORT</button>
        </div>
            <div>
              <div style="display:none;" class="boxwbk" id="pk">
                  <input type="password" class="key-input" v-model="keyInput" placeholder=" Enter your Private Key in here"/>     
                  <button class="openWallet" @click="openWalletPK">OPEN</button>         
                </div> 
            </div> 
            <div>
              <div style="display:none;" class="boxwbk" id="ks">
                <button class="rippleSelectKS" @click="selectKeyStore" v-show="txtName == ''">SELECT KS</button>
               <input @change="onFileChange" style="display:none" id="f" ref="f" type="file" class="choose-file"/>
               <div class="loaded-ks" v-show="txtName !== '' && address == null">
                    KeyStore File Loaded
                  </div>
                <input type="password" class="key-input" @keyup.enter="decryptWallet" v-model="passwd" placeholder="Wallet Password"/>     
                  <button class="openWallet" @click="decryptWallet">OPEN</button>         
                </div> 
            </div>                       
      </div>         
      </div>    
      
    <!-- DASHBOARD OPEN-->
    <div class="balance-box" v-show="address != null">
      <div class="neatStaking">
        <div class="balance-details">
          <div class="wallet-balance">
            <div class="walBalT">{{ (+balance).toFixed(2) }}
              <div class="test-nio">NIO</div>
            </div>
            <div class="separator"></div>
            <div class="wallet-address"> {{ address }}</div>
          </div>
        </div>
      </div>
    </div>

    <app-tabs class="wallet-tabs" :tabList="tabList" v-show="address != null">
      <template v-slot:tabPanel-1>
        <div class="action-box1">
          <div class="neatSending">
            <div class="hero__title">
              <input type="text" class="send-input1" v-model="addressToSend" placeholder="Destination Address" />
            </div>
            <div class="hero__title">
              <input type="text" class="send-input2" v-model="amountToSend" placeholder="Amount" />
            </div>
            <button class="rippleSelectM" @click="neatSendMM" v-show="privateKey == null">SEND</button>
            <button class="rippleSelectM" @click="neatSendPK" v-show="privateKey != null">SEND</button>
          </div>
        </div>
      </template>
      <template v-slot:tabPanel-2>
        <div class="action-box2">
          <div class="neatStaking">
            <div class="balance-details">
              <div class="boxess-left">
                <div class="balance-staked1">
                  <div class="wl-stake"><img src="../../assets/stake.png" alt="Stake" class="stake-image" /></div>
                  <div class="earn-text">Reward rate {{ APY }}% per year</div>
                  <div><button class="rippleStakeNew" @click="neatStakeMM" v-show="privateKey == null">STAKE</button></div>
                  <div><button class="rippleStakeNew" @click="neatStakePK" v-show="privateKey != null">STAKE</button></div>
                </div>
                <div class="boxess-right">
                  <div class="balance-staked">
                    <div class="wl">
                      <div class="spinr"><pixel-spinner :animation-duration="2000" :size="70" color="#000000" /></div>
                    </div>
                    <div>Coins In Stake</div>
                    <div>{{ (+staking).toFixed(2) }}</div>
                    <div><button class="rippleUnStakeNew" @click="unStakeMM" v-show="privateKey == null">UNSTAKE</button></div>
                    <div><button class="rippleUnStakeNew" @click="unStakePK" v-show="privateKey != null">UNSTAKE</button></div>
                  </div>
                  <div class="unclaimed-rewards">
                    <div class="wl">
                      <div class="spinr"><self-building-square-spinner :animation-duration="6000" :size="40"
                          color="#000000" /></div>
                    </div>
                    <div>Unclaimed Rewards</div>
                    <div>{{ (+rewards).toFixed(2) }}</div>
                    <div><button class="rippleClaimNew" @click="claimRwdMM" v-show="privateKey == null">CLAIM</button></div>
                    <div><button class="rippleClaimNew" @click="claimRwdPK" v-show="privateKey != null">CLAIM</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:tabPanel-3>
        <div class="action-box2">
          <div class="neatStaking">
            <div class="balance-details">
              <div class="boxess-left">
                <div class="balance-staked1">
                  <div class="wl-stake"><img src="../../assets/nodeowner.png" alt="Stake" class="node-owner-image" /></div>
                  <div class="earn-text2">Reward rate {{ APY * 1.5 }}% per year</div>
                </div>
                <div class="boxess-right">
                              
                  <div class="neatSending">
                    <div class="hero__title">
                      <input type="text" class="register-input1" v-model="addressToSend" placeholder="Node Public Key" />
                    </div>
                    <div class="hero__title">
                      <input type="text" class="register-input2" v-model="amountToSend" placeholder="Node Private Key" />
                    </div>
                    <button class="rippleRegister" @click="neatRegMM" v-show="privateKey == null">Index Node 1</button>
                    <button class="rippleRegister" @click="neatRegPK" v-show="privateKey != null">Index Node 2</button>
                  </div>

                  <!-- <div class="unclaimed-rewards">
                    <div class="wl">
                      <div class="spinr"><self-building-square-spinner :animation-duration="6000" :size="40"
                          color="#000000" /></div>
                    </div>
                    <div>Unclaimed Rewards</div>
                    <div>{{ (+rewards).toFixed(2) }}</div>
                    <div><button class="rippleClaimNew" @click="claimRwdMM" v-show="privateKey == null">CLAIM</button></div>
                    <div><button class="rippleClaimNew" @click="claimRwdPK" v-show="privateKey != null">CLAIM</button></div>
                  </div> -->

                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:tabPanel-4>
        <div class="action-box2">
          <div class="neatStaking">
            <div class="balance-details">
              <div class="boxess-left">
                <div class="balance-staked1">
                  <div class="wl-stake"><img src="../../assets/stake2.png" alt="Stake" class="node-owner-image" /></div>
                  <div class="earn-text2">Reward rate {{ APY * 2 }}% per year</div>
                </div>
                <div class="boxess-right">
                              
                  <div class="neatSending">
                    <div class="hero__title">
                      <input type="text" class="register-input1" v-model="addressToSend" placeholder="Node Public Key" />
                    </div>
                    <div class="hero__title">
                      <input type="text" class="register-input2" v-model="amountToSend" placeholder="Node Private Key" />
                    </div>
                    <button class="rippleRegister" @click="neatRegMM" v-show="privateKey == null">Index Node 1</button>
                    <button class="rippleRegister" @click="neatRegPK" v-show="privateKey != null">Index Node 2</button>
                  </div>

                  <!-- <div class="unclaimed-rewards">
                    <div class="wl">
                      <div class="spinr"><self-building-square-spinner :animation-duration="6000" :size="40"
                          color="#000000" /></div>
                    </div>
                    <div>Unclaimed Rewards</div>
                    <div>{{ (+rewards).toFixed(2) }}</div>
                    <div><button class="rippleClaimNew" @click="claimRwdMM" v-show="privateKey == null">CLAIM</button></div>
                    <div><button class="rippleClaimNew" @click="claimRwdPK" v-show="privateKey != null">CLAIM</button></div>
                  </div> -->

                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      >
    </app-tabs>
    <div v-if="step == 1">
      <Access @unlock="unlock"></Access>
    </div>
    <div v-if="step == 2" style="padding-bottom: 90px"></div>
  </div>
</template>

<script>
import MetaMaskOnboarding from '@metamask/onboarding';
import { PixelSpinner } from 'epic-spinners'
import { OrbitSpinner } from "epic-spinners";
import { SelfBuildingSquareSpinner } from 'epic-spinners'
import { LoopingRhombusesSpinner } from "epic-spinners";
import { Socket } from "vue-loading-spinner";
import Access from "./modules/access";
import EyeInput from "./modules/eyeInput";
import BigNumber from "bignumber.js";
import axios from "axios";
import AppTabs from "./modules/appTabs";

const Account = require("neatioapi").account;
const KeyStore = require("neatioapi").keystore;
const Transaction = require("neatioapi").transaction;
const RPC = require("neatioapi").rpc;
const Utils = require("neatioapi").utils;
const Nat = require("neatioapi").nat;
const Abi = require("neatioapi").abi;
const Web3 = require("web3");
const Utilss = require("web3").utils;
const URL = "https://rpc.neatio.net";
const web3 = new Web3("https://rpc.neatio.net");

export default {
  data() {
    return {      
      step: 2,
      keyInput: null,
      balance: "",
      fullbalance: "",
      address: null,
      wallet: null,
      privateKey: null,
      staking: null,
      rewards: null,
      rewardBalance: null,
      addressToSend: '',
      amountToSend: null,
      amount: "",
      limit: "21000",
      addry: null,
      keyStore: null,
      passwd: null,
      price: "",
      height: null,
      vPower1: null,
      v1Pwr: "",
      v11power: "",
      vPower2: null,
      v2Pwr: "",
      v22power: "",
      totalStake: "",
      circulating: "",
      circcc: "",
      txtName: '',
      totalCoins: "",
      stakingAPY: "",
      stakedTo: null,
      selectedPool: null,
      priceUSD: "",
      price24h: "",
      tabList: ["Transfer", "Staking", "NodeOwner" , "Validator"],

    };
  },
  components: {
    Access,
    EyeInput,
    OrbitSpinner,
    PixelSpinner,
    LoopingRhombusesSpinner,
    SelfBuildingSquareSpinner,
    Socket,
    AppTabs,
  },

  async mounted() {
    // this.connectAccount();
    this.getValidators();
    this.initialize();
    // this.getHeight();
    this.getGasPrice();
    this.getGasLimit();
    // this.getCirc();
    // this.get24h();
  },

  computed: {
    totalSupp: function () {
      return parseInt(this.circcc) + parseInt(this.totalStake);
    },

    percentLock: function () {
      return (parseInt(this.totalStake) * 100) / this.totalSupp;
    },

    percentMax: function () {
      return (parseInt(this.totalSupp) * 100) / 50000000;
    },

    marketCap: function () {
      const mCap = parseInt(this.totalSupp) * this.priceUSD;
      return mCap.toFixed(2);
    },
  },

  methods: {
    importKey() {
      document.getElementById("pk").style.display = "block";
      document.getElementById("card3").style.display = "none";
      document.getElementById("card1").style.display = "none";
  
    },
    openWalletPK() {
      if (this.keyInput.length != 64) {
        const keyError = "Invalid private key!";
        this.keyError = keyError;
        console.log(keyError);
        return;
      } else {
        const privateKey = "0x" + this.keyInput;
        const wallet = Account.fromPrivate(privateKey);
        this.address = wallet.address;
        this.addry = `${this.address.substr(0, 6)}...${this.address.slice(-4)}`;
        this.privateKey = wallet.privateKey;
        const valData = {
        jsonrpc: "2.0",
        method: "neat_getBalanceDetail",
        params: [`${this.address}`, "latest", true],
        id: 1,
      };
      axios
        .post(URL, valData)
        .then((response) => {
          (this.balance = Utils.toNEAT(
            Nat.toString(response.data.result.balance)
          )),
            (this.staking = Utils.toNEAT(
              Nat.toString(response.data.result.delegateBalance)
            )),
            (this.rewards = Utils.toNEAT(
              Nat.toString(response.data.result.rewardBalance)
            ));

          this.delegatedTo = response.data.result.rewardDetail;


        })
        .catch((error) => {
          console.log("error", error);
        });
      }
    },
      
    
    importKeyStore() {
      document.getElementById("ks").style.display = "block";     
      document.getElementById("card1").style.display = "none";
      document.getElementById("card2").style.display = "none";
 
    },

    selectKeyStore() {
      document.getElementById("f").click();
    },

    onFileChange(f) {
      const vm = this;
      const file = document.getElementById("f").files[0];
      const txtName = file.name;
      this.txtName = txtName;
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function () {
        vm.keyStore = this.result;
      };
    },

    decryptWallet() {
      const account = KeyStore.fromV3Keystore(
        JSON.parse(this.keyStore),
        this.passwd
      );
      const privKey = account.privateKey;
      const wallet = Account.fromPrivate(privKey);
      this.address = wallet.address;
      this.privateKey = wallet.privateKey;
      const address = this.address;
      this.address = address;
      console.log(address);

      const DATA = {
        jsonrpc: "2.0",
        method: "neat_getBalance",
        params: [`${address}`, "latest"],
        id: 1,
      };

     
          axios
            .post(URL, DATA, { "Content-type": "application/json" })
            .then(
              (response) =>
                (this.balance = Utils.toNEAT(Nat.toString(response.data.result)))
            );
            setTimeout(() => {
            this.getBalance();
          }, 100)
    },




    initialize() {
      ethereum.on("chainChanged", (_chainId) => {
        this.getGasPrice();
        this.getBalance();
        this.getBalanceDetail();
      });

      ethereum.on("accountsChanged", (_accounts) => {
        this.address = _accounts[0];
        this.getBalance();
        this.getBalanceDetail();
      });
    },

    async connectAccount() {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        this.address = accounts[0];
        this.addry = `${accounts[0].substr(0, 6)} . . . ${accounts[0].slice(
          -6
        )}`;
        this.getBalance();
        this.getBalanceDetail();
        this.getGasPrice();
        this.getValidators();
        this.getHeight();
      } catch (e) {
        console.log("request accounts error:", e);
      }
    },

    async switchToNeatio() {
      let chainIds = '0x3e9';
      let rpc = 'https://rpc.neatio.net';
      let browser = 'https://scan.neatio.net';
      let chainName = 'Neatio Mainnet';

      try {
        this.currentChainId = await ethereum.request({ method: 'eth_chainId' });
        if (this.currentChainId === chainIds) {
          window.alert("Neatio Network has been added to Metamask.")
        }

        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: chainIds }]
        })

      } catch (e) {
        if (e.code === 4902) {
          try {
            await ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: chainIds,
                chainName: chainName,
                nativeCurrency: {
                  name: "NIO",
                  symbol: "NIO",
                  decimals: 18
                },
                rpcUrls: [rpc],
                blockExplorerUrls: [browser]
              }]
            })

            this.currentChainId = await ethereum.request({ method: 'eth_chainId' });
          } catch (e) {
            console.log('add network error', e)
          }
        }
      }
    },

    getBalance() {
      ethereum
        .request({
          method: "eth_getBalance",
          params: [this.address],
        })
        .then((result) => {
          this.balance = Utils.toNEAT(result);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    },

    getBalanceDetail() {
      const valData = {
        jsonrpc: "2.0",
        method: "neat_getBalanceDetail",
        params: [`${this.address}`, "latest", true],
        id: 1,
      };
      axios
        .post(URL, valData)
        .then((response) => {
          (this.fullbalance = Utils.toNEAT(
            Nat.toString(response.data.result.balance)
          )),
            (this.staking = Utils.toNEAT(
              Nat.toString(response.data.result.delegateBalance)
            )),
            (this.rewards = Utils.toNEAT(
              Nat.toString(response.data.result.rewardBalance)
            ));

          this.delegatedTo = response.data.result.rewardDetail;


        })
        .catch((error) => {
          console.log("error", error);
        });
    },

    async getGasLimit() {
      const latest = await web3.eth.getBlockNumber()
      console.log("gasLimit: " + latest.gasLimit);
    },

    getGasPrice() {
      ethereum
        .request({
          method: "eth_gasPrice",
          params: [],
        })
        .then((result) => {
          this.price = Utils.toNEAT(result);
          console.log(this.price);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },

    getHeight() {
      const DATA = {
        jsonrpc: "2.0",
        method: "neat_blockNumber",
        params: [],
        id: 1,
      };
      axios
        .post(URL, DATA)
        .then((response) => (this.height = Nat.toString(response.data.result)));
    },

    async getPrice() {
      const cpURL = "https://api.coinpaprika.com/v1/tickers/neat-neatio";
      await axios
        .get(cpURL)
        .then((response) => (this.priceUSD = response.data.quotes.USD.price));
    },

    async get24h() {
      const cpURL = "https://api.coinpaprika.com/v1/tickers/neat-neatio";
      await axios
        .get(cpURL)
        .then(
          (response) =>
            (this.price24h = response.data.quotes.USD.percent_change_24h)
        );
    },

    async getCirc() {
      const cpURL =
        "https://scan.neatio.net/api?module=stats&action=coinsupply";
      await axios
        .get(cpURL)
        .then((response) => (this.circulating = response.data));
      const circulating = this.circulating;
      const circc = parseInt(circulating).toFixed(0);
      this.circcc = circc;
      console.log(circc);
    },

    async getValidators() {
      const DATA = {
        jsonrpc: "2.0",
        method: "neat_getNextEpochValidators",
        params: [],
        id: 1,
      };

      await axios
        .post(URL, DATA)
        .then((response) => (this.array = response.data.result));

      const validators = this.array;
      // console.log(validators);
      const v1 = Object(validators)[0]; 
      const v1Addy = v1.address;
      const vPower1 = Utils.toNEAT(Nat.toString(v1.votingPower));
      this.vPower1 = Number(vPower1);
      const v1Pwr = this.vPower1;
      this.v1Pwr = v1Pwr.toFixed(0);
      this.v11power = parseInt(this.v1Pwr);

      const v2 = Object(validators)[1]; 
      const v2Addy = v2.address;
      const vPower2 = Utils.toNEAT(Nat.toString(v2.votingPower));
      this.vPower2 = Number(vPower2);
      const v2Pwr = this.vPower2;
      this.v2Pwr = v2Pwr.toFixed(0);
      this.v22power = parseInt(this.v2Pwr);

      // console.log(this.v11power, this.v22power);
      const totalStakeHex = parseInt(v1.votingPower) + parseInt(v2.votingPower);
      const totalStakeNEAT = totalStakeHex / 1e18;
      console.log(totalStakeNEAT);
      this.totalStake = totalStakeNEAT.toFixed(0);
      this.stakingAPY = (3200000 / parseInt(this.totalStake)) * 100 / 2;
      this.APY =  this.stakingAPY.toFixed(2);
      console.log(this.APY, '%');
      console.log("------------------");
    },

    stringToHex(str) {
      var val = "0x";
      for (var i = 0; i < str.length; i++) {
        if (val == "") {
          val = str.charCodeAt(i).toString(16);
        } else {
          val += str.charCodeAt(i).toString(16);
        }
      }
      return val;
    },

    neatStakeMM() {
      this.$prompt(this.$t("Amount To Stake"), "", {
        confirmButtonText: this.$t("OK"),
        cancelButtonText: this.$t("CANCEL"),

      }).then(({ value }) => {
        let data = Abi.encodeParams(["address"], ["0xb0745e35006a0fbb88435a15eb8c342a4dc3a02b"]);
        let functionSig = Utilss.sha3("Delegate(address)").substr(2, 8);
        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000001001",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: Utils.toHex(Utils.fromNEAT(value)),
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({ method: "eth_sendTransaction", params, })
          .then((result) => { this.$alert("Staking succesful!", { confirmButtonText: this.$t("CLOSE"), type: "success", }); })
          .catch((error) => { console.log("tx error", error); });
      });
    },

    unStakeMM() {
      this.$prompt(this.$t("Amount To Unstake"), "", {
        confirmButtonText: this.$t("OK"),
        cancelButtonText: this.$t("CANCEL"),

      }).then(({ value }) => {
        let data = Abi.encodeParams(["address", "uint256"], ["0xb0745e35006a0fbb88435a15eb8c342a4dc3a02b", "0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),]);
        let functionSig = Utilss.sha3("UnDelegate(address,uint256)").substr(2, 8);
        const params = [{
          from: this.address,
          to: "0x0000000000000000000000000000000000001001",
          gas: Utils.toHex(this.limit),
          gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
          value: "0x0",
          data: "0x" + functionSig + data.substring(2),
        },];

        ethereum.request({ method: "eth_sendTransaction", params, })
          .then((result) => {
           this.$alert( "Unstaking succesful!", { confirmButtonText: this.$t("CLOSE"), type: "success", });
          })
          .catch((error) => { console.log("tx error", error); });
      });
    },

    claimRwdMM() {
      this.$prompt(this.$t("Amount To Claim"), "", {
        confirmButtonText: this.$t("OK"),
        cancelButtonText: this.$t("CANCEL"),

      }).then(({ value }) => {
        let data = Abi.encodeParams(["address", "uint256"], ["0xb0745e35006a0fbb88435a15eb8c342a4dc3a02b", "0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),]);
        let functionSig = Utilss.sha3("WithdrawReward(address,uint256)").substr(2, 8);
        const params = [{
          from: this.address,
          to: "0x0000000000000000000000000000000000001001",
          gas: Utils.toHex(this.limit),
          gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
          value: "0x0",
          data: "0x" + functionSig + data.substring(2),
        },];
        ethereum.request({ method: "eth_sendTransaction", params, }).then((result) => {
  
          this.$alert("Claiming succesful!", { confirmButtonText: this.$t("confirm"), type: "success", });
        }).catch((error) => { console.log("tx error", error); });
      });
    },

    neatStakePK() {
      this.$prompt(this.$t("Amount To Stake"), "", {
        confirmButtonText: this.$t("OK"),
        cancelButtonText: this.$t("CANCEL"),
      }).then(async ({ value }) => {
        let data = Abi.encodeParams(["address"], ["0xb0745e35006a0fbb88435a15eb8c342a4dc3a02b"]);
        let functionSig = Utilss.sha3("Delegate(address)").substr(2, 8);

                const send = async () => {
                  console.log(
                    `Attempting to stake...`
                  ); 
                  const createTransaction = await web3.eth.accounts.signTransaction(
                    {
                      gas: Utils.toHex("23000"),
                      gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
                      to:"0x0000000000000000000000000000000000001001",
                      value: web3.utils.toWei(value, 'ether'),
                      data: "0x" + functionSig + data.substring(2),
                    },
                    this.privateKey
                  );                  
                  const createReceipt = await web3.eth.sendSignedTransaction(
                    createTransaction.rawTransaction
                  ).then((result) => {
                    this.$alert("Staking succesful!", { confirmButtonText: this.$t("CLOSE"), type: "success", });
                    })
                    .catch((error) => { console.log("tx error", error); });
                    };
               send();
  
      });
    },


    unStakePK() {
      this.$prompt(this.$t("Amount To Unstake"), "", {
        confirmButtonText: this.$t("OK"),
        cancelButtonText: this.$t("CANCEL"),

      }).then(({ value }) => {
        let data = Abi.encodeParams(["address", "uint256"], ["0xb0745e35006a0fbb88435a15eb8c342a4dc3a02b", "0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),]);
        let functionSig = Utilss.sha3("UnDelegate(address,uint256)").substr(2, 8);

        const send = async () => {
                  console.log(
                    `Attempting to unstake...`
                  ); 
                  const createTransaction = await web3.eth.accounts.signTransaction(
                    {
                      gas: Utils.toHex("23000"),
                      gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
                      to:"0x0000000000000000000000000000000000001001",
                      value: web3.utils.toWei("0", 'ether'),
                      data: "0x" + functionSig + data.substring(2),
                    },
                    this.privateKey
                  );                  
                  const createReceipt = await web3.eth.sendSignedTransaction(
                    createTransaction.rawTransaction
                  ).then((result) => {
                    this.$alert("Unstaking succesful!", { confirmButtonText: this.$t("CLOSE"), type: "success", });
                    })
                    .catch((error) => { console.log("tx error", error); });
             
                };
               send();
      });
    },

    claimRwdPK() {
      this.$prompt(this.$t("Amount To Claim"), "", {
        confirmButtonText: this.$t("OK"),
        cancelButtonText: this.$t("CANCEL"),

      }).then(({ value }) => {
        let data = Abi.encodeParams(["address", "uint256"], ["0xb0745e35006a0fbb88435a15eb8c342a4dc3a02b", "0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),]);
        let functionSig = Utilss.sha3("WithdrawReward(address,uint256)").substr(2, 8);

        const send = async () => {
                  console.log(
                    `Attempting to unstake...`
                  ); 
                  const createTransaction = await web3.eth.accounts.signTransaction(
                    {
                      gas: Utils.toHex("23000"),
                      gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
                      to:"0x0000000000000000000000000000000000001001",
                      value: "0x0",
                      data: "0x" + functionSig + data.substring(2),
                    },
                    this.privateKey
                  );                  
                  const createReceipt = await web3.eth.sendSignedTransaction(
                    createTransaction.rawTransaction
                  ).then((result) => {
                    this.$alert("Claim succesful!", { confirmButtonText: this.$t("CLOSE"), type: "success", });
                    })
                    .catch((error) => { console.log("tx error", error); });
             
                };
               send();
      });

    },


    async neatSendMM() {
      const params = [{
        from: this.address,
        to: this.addressToSend,
        gas: Utils.toHex(this.limit),
        gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
        value: Utils.toHex(Utils.fromNEAT(this.amountToSend)),
      },];

      ethereum.request({ method: "eth_sendTransaction", params, })
        .then((result) => {
          console.log("hash", result); this.$alert(
            "Coins were sent!", { confirmButtonText: this.$t("CLOSE"), type: "success", });
        })
        .catch((error) => { console.log("tx error", error); });
        setTimeout(() => {
            this.getBalance();
          }, 500)

    },

    async neatSendPK() {  
      const account = web3.eth.accounts.privateKeyToAccount(this.privateKey);
      const addressFrom = account.address;
 
      const amountToSend = this.amountToSend;
      const addressTo = this.addressToSend;
   
      const createTransaction = await web3.eth.accounts.signTransaction(
        {
          from: addressFrom,
          to: addressTo,
          value: web3.utils.toWei(`${amountToSend}`, "ether"),
          gas: Utils.toHex(this.limit),
          },
        this.privateKey
      );

      const txHash = await web3.eth.sendSignedTransaction(
        createTransaction.rawTransaction
      );
      const transactionHash = txHash.transactionHash;
      this.txHash = transactionHash;
      console.log(`Transaction confirmed: ${txHash.transactionHash}`);
      this.txHash = txHash.transactionHash;
      setTimeout(() => {
            this.getBalance();
          }, 500)
    },

  
  },
};
</script>

<style scoped>
button {
  border: none;
  width: 36px;
  font-family: Anita, Helvetica, sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  color: #ffffff;
  background-color: #273546;
  border-radius: 4px;
  outline: none;
  align-items: center;
  margin: 10px auto;
}

.choose-file{
  color: #8D80FF;
  margin: 1rem auto;
}

.separator {
  margin: 1.2rem auto;
  max-width: 42rem;
  border-bottom: 3px solid #000;
}

.test-nio {
  font-family: Anita, Helvetica, sans-serif;
  font-size: 2rem;
  display: inline;

  background-color: #ffffff;
  background-size: 100%;
  background-repeat: repeat;
  background-image: linear-gradient(45deg, #a044ff, #46bbf4, #2472fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.wallet-address {
  font-family: Anita, Helvetica, sans-serif;
  font-size: 1.4rem;
  display: inline;
  background-color: #ffffff;
  background-size: 100%;
  background-repeat: repeat;
  background-image: linear-gradient(to right, #a044ff, #46bbf4, #2472fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent
}

.send-input1 {

  margin: 4rem auto 0 auto;
  width: 75vw;
  max-width: 740px;
  font-family: "Anita";
  font-size: 1.4rem;
  background-color: #1f2331;
  border-style: solid;
  border-radius: 10px;
  border-color: #000;
  box-sizing: 1px;
  text-align: center;
  line-height: 1.8;
  position: relative;
  color: #fff;
}

.send-input2 {
  margin: 2rem auto;
  width: 54vw;
  max-width: 540px;
  font-family: "Anita";
  font-size: 1.4rem;
  background-color: #1f2331;
  border-style: solid;
  border-radius: 10px;
  border-color: #000;
  box-sizing: 1px;
  text-align: center;
  line-height: 1.8;
  position: relative;
  color: #fff;
}

.register-input1 {

margin: 0 auto;
width: 75vw;
max-width: 540px;
font-family: "Anita";
font-size: 1.4rem;
background-color: #1f2331;
border-style: solid;
border-radius: 10px;
border-color: #000;
box-sizing: 1px;
text-align: center;
line-height: 1.8;
position: relative;
color: #fff;
}

.register-input2 {
margin: 1.2rem auto;
width: 54vw;
max-width: 540px;
font-family: "Anita";
font-size: 1.4rem;
background-color: #1f2331;
border-style: solid;
border-radius: 10px;
border-color: #000;
box-sizing: 1px;
text-align: center;
line-height: 1.8;
position: relative;
color: #fff;
}

.wallet-description {
  padding: 2em;
  font-size: 1.6rem;
  font-weight: 300;
  color: #ffffff;
  font-family: Anita, Helvetica, sans-serif;
}



.locked {
  text-align: center;
  margin-bottom: 6rem;
  color: #ffffff;
  font-weight: 200;
  font-family: Pirulen, Helvetica, sans-serif;
}



.lockked {
  align-items: center;
  justify-content: center;
}

.lockedm {
  text-align: center;
  margin-bottom: 2rem;
  color: #ffffff;
  font-weight: 200;
  font-family: Pirulen, Helvetica, sans-serif;
}
.lockedm2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #000000;
  font-weight: 200;
  font-family: Anita, Helvetica, sans-serif;
}

.lockimg {
  width: 6rem;
  height: auto;
  display: block;
  /* margin-top: 40px; */
  margin: -4rem auto 1rem auto;

}

.stake-image {
  width: 6rem;
  height: auto;
  display: block;
  margin: 0 auto;

}

.node-owner-image {
  width: auto;
  height: 8rem;
  display: block;
  margin: 0 auto;

}
/* .loaded-ks {
  padding: 2rem;
  font-family: Anita, Helvetica, sans-serif;
  font-size: 1.4rem;
  display: inline;
  background-color: #ffffff;
  background-size: 100%;
  background-repeat: repeat;
  background-image: linear-gradient(to right, #a044ff, #46bbf4, #2472fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent
} */

.loaded-ks {
  padding: 2rem;
  font-size: 1.4rem;
  font-family: Anita, Helvetica, sans-serif;
  background-color: #ffffff;
  background-size: 100%;
  background-repeat: repeat;
  background-image: linear-gradient(to right, #a044ff, #46bbf4, #2472fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent
}



.balance-staked {

  color: #000000;
}



.unclaimed-rewards {
  color: #000000;
  margin-top: 1.4rem;
}

.walBalT {
  color: #ffffff;
  font-family: Anita, Helvetica, sans-serif;
  padding: 0.6rem;
  font-size: 3rem;
  font-weight: 400;
}

.neatStaking {
  text-align: left;
  margin: 10px;
}


.spinr {
  margin: 0 auto;
  display: inline-block;
}

.wallet-tabs {
  max-width: 80em;
  margin: 0 auto;
  font-family: Anita, Helvetica, sans-serif;
}

.balance-details {
  text-align: center;
  margin-top: 10px;
}

.dashboard {
  font-weight: bold;
  color: #ffffff;
  padding-top: 10px;
}

.openWallet {
    font-size: 1.4rem;
    width: 10rem;
    height: 3.2rem;
    border-radius: 10px;
    border: 1px solid #8D80FF;
    background-color: transparent;
    background-position: center;
    transition: background 0.4s;
    margin: 2rem auto;
  }

  .openWallet:hover {
    color: #000;
    text-transform: uppercase;
    background: #ffffff radial-gradient(circle, transparent 1%, #ffffff 1%) center/15000%;
  }

.rippleSelectM {
  font-size: 1.4rem;
  font-family: Anita, Helvetica, sans-serif;
  width: 10rem;
  height: 3.2rem;
  border-radius: 10px;
  color: #fff;
  background: linear-gradient(to right, #24243e, #302b63, #24243e);
  background-position: center;
  margin: 0 10px;
}

.rippleSelectM:hover {
  color: #fff;
  text-transform: uppercase;
  background: #6f5fff radial-gradient(circle, transparent 1%, #00bfff 1%) center/15000%;
}

.rippleRegister {
  font-size: 1.4rem;
  font-family: Anita, Helvetica, sans-serif;
  width: 14rem;
  height: 3.2rem;
  border-radius: 10px;
  color: #fff;
 
  background: linear-gradient(to right, #24243e, #302b63, #24243e);
  background-position: center;
  margin: 0 10px;
}

.rippleRegister:hover {
  color: #fff;
  text-transform: uppercase;
  background: #6f5fff radial-gradient(circle, transparent 1%, #00bfff 1%) center/15000%;
}

.rippleSelectKS {
  font-size: 1.4rem;
  font-family: Anita, Helvetica, sans-serif;
  width: 20rem;
  height: 3.2rem;
  border-radius: 10px;
  color: #fff;
  background: linear-gradient(to right,#3d00b9,#8d80ff);
  background-position: center;
  margin: 2rem 10px;
}

.rippleSelectKS:hover {
  color: #fff;
  text-transform: uppercase;
  background: #6f5fff radial-gradient(circle, transparent 1%, #00bfff 1%) center/15000%;
}

.cs {
  color: #000;
  font-size: 2.8rem;
  margin-left: 12rem;
}


.earn-text {
  margin: 1rem;
  font-size: 1.2rem;
  color: #000000;
}

.earn-text2 {
  margin: 2rem;
  font-size: 1.4rem;
  color: #000000;
}

.rippleStakeNew {
  font-size: 1.4rem;
  font-family: Anita, Helvetica, sans-serif;
  width: 20rem;
  height: 3.2rem;
  border-radius: 10px;
  color: #fff;
  background: linear-gradient(to right, #24243e, #302b63, #24243e);
  background-position: center;
  margin: 1rem;
}

.rippleStakeNew:hover {
  color: #fff;
  text-transform: uppercase;
  background: #000000 radial-gradient(circle, transparent 1%, #00bfff 1%) center/15000%;
}

.rippleUnStakeNew {
  font-size: 1rem;
  font-family: Anita, Helvetica, sans-serif;
  width: 8rem;
  height: 2rem;
  border-radius: 10px;
  color: #fff;
  background: linear-gradient(to right, #24243e, #302b63, #24243e);
  background-position: center;
  margin: 1rem;
}

.rippleUnStakeNew:hover {
  color: #fff;
  text-transform: uppercase;
  background: #000000 radial-gradient(circle, transparent 1%, #00bfff 1%) center/15000%;
}

.rippleClaimNew {
  font-size: 1rem;
  font-family: Anita, Helvetica, sans-serif;
  width: 8rem;
  height: 2rem;
  border-radius: 10px;
  color: #fff;
  background: linear-gradient(to right, #24243e, #302b63, #24243e);
  background-position: center;
  margin: 1rem;
}

.rippleClaimNew:hover {
  color: #fff;
  text-transform: uppercase;
  background: #000000 radial-gradient(circle, transparent 1%, #00bfff 1%) center/15000%;
}




.boxess-left {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 20px 0px;
}

.boxess-right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 20px 0px;
}
.boxwbk {
  width: 30rem;
  height: 30rem;
  border-radius: 10px;
  background: transparent;
  margin-right: 20rem;
  padding-top: 10rem;

}

.key-input {
    margin: 0 auto;
    width: 30rem;
    font-family: "Anita";
    font-size: 1.2rem;
    background-color: #1f2331 ;
    border-radius: 10px;
    border: 1px solid #000000;
    box-sizing: 1px;
    text-align: center;
    line-height: 2.4;
    color: #fff; 
}

.boxwb {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  vertical-align: center;
  width: 20em;
  height: 30rem;
  border-radius: 10px;
  margin: auto;
  background: linear-gradient(to bottom, #11001e, #786afb);
  /* filter: brightness(70%); */
}

@media only screen and (max-width: 560px) {
  .boxwb {
    display: flex;
    justify-content: center;
    width: 72em;
    height: 48rem;
    padding: 36px;
    border-radius: 10px;
    box-shadow: 0 10px 40px #000;
    border-radius: 10px;
    border: 1px solid #00bfff;
    margin: 20px 40px 0px 40px;
    background-color: transparent;
  }

  .valueD {
    font-family: Helvetica, sans-serif;
    color: #ffffff;
    font-size: 12px;
    font-weight: lighter;
    margin-bottom: 5px;
  }

  .ripp {
    font-size: 1.2rem;
    font-family: Anita, Helvetica, sans-serif;
    width: 12rem;
    height: 4rem;
    border-radius: 10px;
    font-weight: bold;
    color: #000;
    background: linear-gradient(to right, #6519c9, #2472fc);
    background-position: center;
    transition: background 0.4s;
    margin: 40px;
  }

  .ripp:hover {
    color: #000000;
    text-transform: uppercase;
    background: #2472fc;
  }

  .rippleStake {
    font-size: 12px;
    min-width: 68px;
    height: 22px;
    border-radius: 4px;
    font-weight: bold;
    color: #ffffff;
    border: 1px solid #ffffffa4;
    background-color: transparent;
    background-position: center;
    transition: background 0.4s;
    margin: 0 auto;
  }

  .rippleStake:hover {
    color: #000;
    text-transform: uppercase;
    background: #ffffff radial-gradient(circle, transparent 1%, red 1%) center/15000%;
  }

  .rippleUnstake {
    font-size: 12px;
    min-width: 68px;
    height: 22px;
    border-radius: 4px;
    font-weight: bold;
    color: #ffffff;
    border: 1px solid #ffffffa4;
    background-color: transparent;
    background-position: center;
    transition: background 0.4s;
    margin: 0 auto;
  }

  .rippleUnstake:hover {
    color: #000;
    text-transform: uppercase;
    background: #ffffff radial-gradient(circle, transparent 1%, red 1%) center/15000%;
  }


  .rippleClaims {
    font-size: 12px;
    min-width: 68px;
    height: 22px;
    border-radius: 4px;
    font-weight: bold;
    border: 1px solid #ffffffa4;
    background-color: transparent;
    background-position: center;
    transition: background 0.4s;
    margin: 0 auto;
  }

  .rippleClaims:hover {
    color: #000;
    text-transform: uppercase;

    background: #ffffff radial-gradient(circle, transparent 1%, #ffffff 1%) center/15000%;
  }

  #myGrid {
    flex: 1 1 0px;
    width: 100%;
  }

  .box2 {
    margin: 60px 10px;
  }
}
</style>


