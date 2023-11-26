<template>
  <div class="dashboard">


        <div v-show="address == ''">
          <div class="boxe">
              <div class="wallet-description">
                Please make sure the URL is: <span style="color: #8d80ff">wallet.neatio.net</span>
                  </div>
            </div> 
          <div class="boxd">
            <div class="boxwb">
                <div class="lockked">
                  <img src="../../assets/metamask.png" alt="Metamask" class="lockimg" />
                    </div>
                <div class="locked">Metamask</div>        
                <button class="rippleSelectM" @click="connectAccount" >OPEN</button>
              </div>
              <div class="boxwb">
                <div class="lockked">
                  <img src="../../assets/unencrypted.png" alt="Private Key" class="lockimg" />
                    </div>
                <div class="locked">Private Key</div>
                <button class="rippleSelectM" @click="connectAccount" >IMPORT</button>
              </div>
              <div class="boxwb">
                <div class="lockked">
                  <img src="../../assets/encrypted.png" alt="Keystore File" class="lockimg" />
                    </div>
                <div class="locked">Keystore File</div>
                <button class="rippleSelectM" @click="connectAccount" >SELECT</button>                
              </div>
        </div>
       </div>
        
      <!-- DASHBOARD OPEN-->


       <!-- <div class="box-btn">
      <div class="box7" v-show="address !== null">
        <button2 class="sendButton" id="rpp1" @click="swStake">Send</button2>
      </div>

      <div class="box8" v-show="address !== null">
        <button2 class="stakeButton" id="rpp2" @click="swStake">Stake</button2>
      </div>
    </div> -->
    

          <div class="balance-box" > 
   
          <div class="neatStaking">
            <div class="balance-details" >
              <div class="wallet-balance" >
                
                <div class="walBalT">{{ (+balance).toFixed(6)}}
                  NIO
                </div>
                <div class="separator"></div>
                <div> {{ address }}</div>
               
              </div>        
      
          </div>
          </div>
        </div>



        <div class="action-box" >    
              <div class="neatStaking">
                <div class="balance-details" >                               
                  <div class="boxess">
                    <div class="wallet-balance-available2">
                      <div class="wl"><img src="../../assets/claim.png" alt="stake" class="walimg"/></div>
                      <div><span style="color: #496785;font-weight: lighter;font-size: 11px;font-family: Pirulen, Helvetica;">Coins In Stake</span></div>
                      <span style="color: #496785; font-family: Helvetica">{{   (+staking).toFixed(6)}}</span>
                    </div>
                    <div class="wallet-balance-available2">
                      <div class="wl"><div class="spinr"><orbit-spinner :animation-duration="1200" :size="55" color="#ffffff" alt="stake" /></div></div>
                      <span style=" color: #496785;font-weight: lighter;font-size: 11px;font-family: Pirulen, Helvetica;">Unclaimed Rewards</span>
                      <span style="color: #496785; font-family: Helvetica">{{(+rewards).toFixed(18)}}</span>
                    </div>
                  </div>
                  <div class="deleg" v-show="rewards > 0">Rewards on:<span style="font-size: 14px;color: #ffffff;font-weight: normal;font-family: Pirulen, Helvetica;">{{ stakedTo }}</span></div>
                  <div class="btnss" v-show="(staking != null && selectedPool == 'DANNY M POOL') || (staking != null && stakedTo == 'DANNY M POOL') || stakedTo == 'DANNY M POOL'"><div class="buttns">
                  <button class="rippleStake" @click="neatStake1">stake</button><button class="rippleClaims" @click="claimRwd1">claim</button><button class="rippleClaims" @click="unStake1">unstake</button></div>
                  </div><div class="btnss" v-show="(staking != null && selectedPool == 'NEATIO - ASIA -') || (staking != null && stakedTo == 'NEATIO - ASIA -') || stakedTo == 'NEATIO - ASIA -'">
                  <div class="buttns"><button class="rippleStake" @click="neatStake2">stake</button><button class="rippleClaims" @click="claimRwd2">claim</button>

                  <button class="rippleClaims" @click="unStake2">unstake</button></div></div>
                  <div class="btnss">
                    <div class="buttns">
                      <button class="rippleStake" @click="neatStake3">stake</button>
                      <button class="rippleClaims" @click="claimRwd3">claim</button>
                      <button class="rippleClaims" @click="unStake3">unstake</button>
                    </div>
                  </div> 
              </div>
              </div>
            </div>






      <div v-if="step == 1">
        <Access @unlock="unlock"></Access>
      </div>
      <div v-if="step == 2" style="padding-bottom: 90px"></div>

  </div>
</template>

<script>
import MetaMaskOnboarding from '@metamask/onboarding';
import { OrbitSpinner } from "epic-spinners";
import { LoopingRhombusesSpinner } from "epic-spinners";
import VideoBackground from 'vue-responsive-video-background-player';
import { Socket } from "vue-loading-spinner";
import Access from "./modules/access";
import EyeInput from "./modules/eyeInput";
import BigNumber from "bignumber.js";
import axios from "axios";

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
      balance: "",
      fullbalance: "",
      address: '',
      privateKey: "",
      staking: null,
      rewards: null,
      rewardBalance: null,
      amount: "",
      limit: "21000",
      addry: null,
      price: "",
      addy7: null,
      vPower2: null,
      v2Pwr: "",
      v22power: "",
      vPower3: null,
      v3Pwr: "",
      v33power: "",
      vPower4: null,
      v4Pwr: "",
      v44power: "",
      vPower5: null,
      v5Pwr: "",
      v55power: "",
      vPower6: null,
      v6Pwr: "",
      v66power: "",
      vPower7: null,
      v7Pwr: "",
      v77power: "",
      vComm: "15%",
      pool1: null,
      pool2: null,
      pool3: null,
      pool4: null,
      pool5: null,
      pool6: null,
      height: null,
      totalStake: "",
      circulating: "",
      circcc: "",
      totalCoins: "",
      stakingAPY: "",
      stakedTo: null,
      selectedPool: null,
      priceUSD: "",
      price24h: "",
    };
  },
  components: {
    Access,
    EyeInput,
    OrbitSpinner,
    LoopingRhombusesSpinner,
    VideoBackground,
    Socket,
  },

  async mounted() {
    this.connectAccount();
    // this.getValidators();
    this.initialize();
    // this.getHeight();
    // this.getPrice();
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

    async switchToNeatio () {
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
              params: [{ chainId: chainIds}]
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

    getGasPrice() {
      ethereum
        .request({
          method: "eth_gasPrice",
          params: [],
        })
        .then((result) => {
          this.price = Utils.toNEAT(result);
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
      const circulating = this.circulating - 3346;
      const circc = parseInt(circulating).toFixed(0);
      this.circcc = circc;
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

    select1() {
      document.getElementById("pool1").click();
      this.selectedPool = "DANNY M POOL";
    },

    select2() {
      document.getElementById("pool2").click();
      this.selectedPool = "NEATIO - ASIA -";
    },

    select3() {
      document.getElementById("pool3").click();
      this.selectedPool = "ROMANIA POOL";
    },

    select4() {
      document.getElementById("pool4").click();
      this.selectedPool = "SILVIU25 POOL";
    },

    select5() {
      document.getElementById("pool5").click();
      this.selectedPool = "StianNOR - EU";
    },

    select6() {
      document.getElementById("pool6").click();
      this.selectedPool = "NEATIO EUROPE";
    },


    neatStake1() {
      document.getElementById("pool1").click();
      const pool1 = this.pool1;
      this.pool1 = pool1;
      this.$prompt(this.$t("Amount To Stake"), "", {
        confirmButtonText: this.$t("CONFIRM"),
        cancelButtonText: this.$t("CANCEL"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("mNum");
          }
          if (+val <= 0) {
            return this.$t("gt0");
          }
          if (+val + this.limit * this.price >= this.balance) {
            return this.$t("notEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(["address"], [this.pool1]);
        let functionSig = Utilss.sha3("Delegate(address)").substr(2, 8);
        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: Utils.toHex(Utils.fromNEAT(value)),
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({method: "eth_sendTransaction", params,  })
          .then((result) => {this.$alert("TX ID: " + result, "Staking Was Succesful!", { confirmButtonText: this.$t("CLOSE"), type: "success", }); })
          .catch((error) => { console.log("tx error", error); });
      });
    },

    unStake1() {
      document.getElementById("pool1").click();
      const pool1 = this.pool1;
      this.pool1 = pool1;
      this.$prompt(this.$t("Amount To Unstake"), "", {
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("cmNum");
          }
          if (+val <= 0) {
            return this.$t("cgt");
          }

          if (this.limit * this.price > this.balance) {
            return this.$t("notEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(["address", "uint256"], [ this.pool1, "0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16), ] );
        let functionSig = Utilss.sha3("UnDelegate(address,uint256)").substr(2,8);
        const params = [{
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          },];
        ethereum.request({method: "eth_sendTransaction", params, })
          .then((result) => { console.log("hash", result);  this.$alert(
              "TX ID: " + result,"You succesfully unstaked your coins!",  { confirmButtonText: this.$t("CLOSE"), type: "success",    }    );
          })
          .catch((error) => {   console.log("tx error", error); });
      });
    },

    claimRwd1() {
      document.getElementById("pool1").click();
      const pool1 = this.pool1;
      this.pool1 = pool1;
      this.$prompt(this.$t("Amount To Claim"), "", {
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("rewardNumber");
          }

          if (+val <= 0) {
            return this.$t("rewardGt");
          }

          let leftReard = this.bn.minus(this.pool1.reward, val);
          if (leftReard < 0) {
            return this.$t("rewardNotEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(["address", "uint256"], [this.pool1, "0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),]);
        let functionSig = Utilss.sha3("WithdrawReward(address,uint256)").substr(2,8);
        const params = [{
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          },];
        ethereum.request({ method: "eth_sendTransaction",params, }).then((result) => {console.log("hash", result);
            this.$alert("TX ID: " + result, "You succesfully claimed your rewards!",{confirmButtonText: this.$t("confirm"), type: "success", });
          }).catch((error) => {console.log("tx error", error);});
      });
    },


    neatStake2() {
      document.getElementById("pool2").click();
      const pool2 = this.pool2;
      console.log(pool2);
      this.pool2 = pool2;
      this.$prompt(this.$t("Amount To Stake"), "", {
        confirmButtonText: this.$t("CONFIRM"),
        cancelButtonText: this.$t("CANCEL"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("mNum");
          }
          if (+val <= 0) {
            return this.$t("gt0");
          }
          if (+val + this.limit * this.price >= this.balance) {
            return this.$t("notEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(["address"], [this.pool2]);
        let functionSig = Utilss.sha3("Delegate(address)").substr(2, 8);
        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: Utils.toHex(Utils.fromNEAT(value)),
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            this.$alert("TX ID: " + result, "Staking Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log("tx error", error);
          });
      });
    },

    unStake2() {
      document.getElementById("pool2").click();
      const pool2 = this.pool2;
      this.pool2 = pool2;
      this.$prompt(this.$t("Amount To Unstake"), "", {
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("cmNum");
          }
          if (+val <= 0) {
            return this.$t("cgt");
          }

          if (this.limit * this.price > this.balance) {
            return this.$t("notEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(
          ["address", "uint256"],
          [
            this.pool2,
            "0x" +
              new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),
          ]
        );
        let functionSig = Utilss.sha3("UnDelegate(address,uint256)").substr(
          2,
          8
        );

        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            console.log("hash", result);
            this.$alert(
              "TX ID: " + result,
              "You succesfully unstaked your coins!",
              {
                confirmButtonText: this.$t("CLOSE"),
                type: "success",
              }
            );
          })
          .catch((error) => {
            console.log("tx error", error);
          });
      });
    },

    claimRwd2() {
      document.getElementById("pool2").click();
      const pool2 = this.pool2;
      this.pool2 = pool2;
      this.$prompt(this.$t("Amount To Claim"), "", {
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("rewardNumber");
          }

          if (+val <= 0) {
            return this.$t("rewardGt");
          }

          let leftReard = this.bn.minus(this.pool2.reward, val);
          if (leftReard < 0) {
            return this.$t("rewardNotEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(
          ["address", "uint256"],
          [
            this.pool2,
            "0x" +
              new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),
          ]
        );
        let functionSig = Utilss.sha3("WithdrawReward(address,uint256)").substr(
          2,
          8
        );

        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            console.log("hash", result);
            this.$alert(
              "TX ID: " + result,
              "You succesfully claimed your rewards!",
              {
                confirmButtonText: this.$t("confirm"),
                type: "success",
              }
            );
          })
          .catch((error) => {
            console.log("tx error", error);
          });
      });
    },


    neatStake3() {
      document.getElementById("pool3").click();
      const pool3 = this.pool3;
      console.log(pool3);
      this.pool3 = pool3;
      this.$prompt(this.$t("Amount To Stake"), "", {
        confirmButtonText: this.$t("CONFIRM"),
        cancelButtonText: this.$t("CANCEL"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("mNum");
          }
          if (+val <= 0) {
            return this.$t("gt0");
          }
          if (+val + this.limit * this.price >= this.balance) {
            return this.$t("notEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(["address"], [this.pool3]);
        let functionSig = Utilss.sha3("Delegate(address)").substr(2, 8);
        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: Utils.toHex(Utils.fromNEAT(value)),
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            this.$alert("TX ID: " + result, "Staking Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log("tx error", error);
          });
      });
    },

    unStake3() {
      document.getElementById("pool3").click();
      const pool3 = this.pool3;
      this.pool3 = pool3;
      this.$prompt(this.$t("Amount To Unstake"), "", {
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("cmNum");
          }
          if (+val <= 0) {
            return this.$t("cgt");
          }

          if (this.limit * this.price > this.balance) {
            return this.$t("notEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(
          ["address", "uint256"],
          [
            this.pool3,
            "0x" +
              new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),
          ]
        );
        let functionSig = Utilss.sha3("UnDelegate(address,uint256)").substr(
          2,
          8
        );

        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            this.$alert("TX ID: " + result, "UnStake Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log("tx error", error);
          });
      });
    },

    claimRwd3() {
      document.getElementById("pool3").click();
      const pool3 = this.pool3;
      this.pool3 = pool3;
      this.$prompt(this.$t("Amount To Claim"), "", {
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("rewardNumber");
          }

          if (+val <= 0) {
            return this.$t("rewardGt");
          }

          let leftReard = this.bn.minus(this.pool3.reward, val);
          if (leftReard < 0) {
            return this.$t("rewardNotEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(
          ["address", "uint256"],
          [
            this.pool3,
            "0x" +
              new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),
          ]
        );
        let functionSig = Utilss.sha3("WithdrawReward(address,uint256)").substr(
          2,
          8
        );

        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            this.$alert("TX: " + result, "Claim Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log("tx error", error);
          });
      });
    },

    neatStake4() {
      document.getElementById("pool4").click();
      const pool4 = this.pool4;
      console.log(pool4);
      this.pool4 = pool4;
      this.$prompt(this.$t("Amount To Stake"), "", {
        confirmButtonText: this.$t("CONFIRM"),
        cancelButtonText: this.$t("CANCEL"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("mNum");
          }
          if (+val <= 0) {
            return this.$t("gt0");
          }
          if (+val + this.limit * this.price >= this.balance) {
            return this.$t("notEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(["address"], [this.pool4]);
        let functionSig = Utilss.sha3("Delegate(address)").substr(2, 8);
        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: Utils.toHex(Utils.fromNEAT(value)),
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            this.$alert("TX ID: " + result, "Staking Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log("tx error", error);
          });
      });
    },

    unStake4() {
      document.getElementById("pool4").click();
      const pool4 = this.pool4;
      this.pool4 = pool4;
      this.$prompt(this.$t("Amount To Unstake"), "", {
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("cmNum");
          }
          if (+val <= 0) {
            return this.$t("cgt");
          }

          if (this.limit * this.price > this.balance) {
            return this.$t("notEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(
          ["address", "uint256"],
          [
            this.pool4,
            "0x" +
              new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),
          ]
        );
        let functionSig = Utilss.sha3("UnDelegate(address,uint256)").substr(
          2,
          8
        );

        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            console.log("hash", result);
            this.$alert(
              "TX ID: " + result,
              "You succesfully unstaked your coins!",
              {
                confirmButtonText: this.$t("CLOSE"),
                type: "success",
              }
            );
          })
          .catch((error) => {
            console.log("tx error", error);
          });
      });
    },

    claimRwd4() {
      document.getElementById("pool4").click();
      const pool4 = this.pool4;
      this.pool4 = pool4;
      this.$prompt(this.$t("Amount To Claim"), "", {
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("rewardNumber");
          }

          if (+val <= 0) {
            return this.$t("rewardGt");
          }

          let leftReard = this.bn.minus(this.pool4.reward, val);
          if (leftReard < 0) {
            return this.$t("rewardNotEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(
          ["address", "uint256"],
          [
            this.pool3,
            "0x" +
              new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),
          ]
        );
        let functionSig = Utilss.sha3("WithdrawReward(address,uint256)").substr(
          2,
          8
        );

        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            console.log("hash", result);
            this.$alert(
              "TX ID: " + result,
              "You succesfully claimed your rewards!",
              {
                confirmButtonText: this.$t("confirm"),
                type: "success",
              }
            );
          })
          .catch((error) => {
            console.log("tx error", error);
          });
      });
    },

    neatStake5() {
      document.getElementById("pool5").click();
      const pool5 = this.pool5;
      console.log(pool5);
      this.pool5 = pool5;
      this.$prompt(this.$t("Amount To Stake"), "", {
        confirmButtonText: this.$t("CONFIRM"),
        cancelButtonText: this.$t("CANCEL"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("mNum");
          }
          if (+val <= 0) {
            return this.$t("gt0");
          }
          if (+val + this.limit * this.price >= this.balance) {
            return this.$t("notEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(["address"], [this.pool5]);
        let functionSig = Utilss.sha3("Delegate(address)").substr(2, 8);
        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: Utils.toHex(Utils.fromNEAT(value)),
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            this.$alert("TX ID: " + result, "Staking Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log("tx error", error);
          });
      });
    },

    unStake5() {
      document.getElementById("pool5").click();
      const pool5 = this.pool5;

      this.pool5 = pool5;
      this.$prompt(this.$t("Amount To Unstake"), "", {
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("cmNum");
          }
          if (+val <= 0) {
            return this.$t("cgt");
          }

          if (this.limit * this.price > this.balance) {
            return this.$t("notEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(
          ["address", "uint256"],
          [
            this.pool5,
            "0x" +
              new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),
          ]
        );
        let functionSig = Utilss.sha3("UnDelegate(address,uint256)").substr(
          2,
          8
        );

        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            console.log("hash", result);
            this.$alert(
              "TX ID: " + result,
              "You succesfully unstaked your coins!",
              {
                confirmButtonText: this.$t("CLOSE"),
                type: "success",
              }
            );
          })
          .catch((error) => {
            console.log("tx error", error);
          });
      });
    },

    claimRwd5() {
      document.getElementById("pool5").click();
      const pool5 = this.pool5;
      this.pool5 = pool5;
      this.$prompt(this.$t("Amount To Claim"), "", {
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("rewardNumber");
          }

          if (+val <= 0) {
            return this.$t("rewardGt");
          }

          let leftReard = this.bn.minus(this.pool5.reward, val);
          if (leftReard < 0) {
            return this.$t("rewardNotEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(
          ["address", "uint256"],
          [
            this.pool5,
            "0x" +
              new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),
          ]
        );
        let functionSig = Utilss.sha3("WithdrawReward(address,uint256)").substr(
          2,
          8
        );

        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            console.log("hash", result);
            this.$alert(
              "TX ID: " + result,
              "You succesfully claimed your rewards!",
              {
                confirmButtonText: this.$t("confirm"),
                type: "success",
              }
            );
          })
          .catch((error) => {
            console.log("tx error", error);
          });
      });

      
    },

    neatStake6() {
      document.getElementById("pool6").click();
      const pool6 = this.pool6;
      console.log(pool6);
      this.pool6 = pool6;
      this.$prompt(this.$t("Amount To Stake"), "", {
        confirmButtonText: this.$t("CONFIRM"),
        cancelButtonText: this.$t("CANCEL"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("mNum");
          }
          if (+val <= 0) {
            return this.$t("gt0");
          }
          if (+val + this.limit * this.price >= this.balance) {
            return this.$t("notEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(["address"], [this.pool6]);
        let functionSig = Utilss.sha3("Delegate(address)").substr(2, 8);
        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: Utils.toHex(Utils.fromNEAT(value)),
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            this.$alert("TX ID: " + result, "Staking Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log("tx error", error);
          });
      });
    },

    unStake6() {
      document.getElementById("pool6").click();
      const pool6 = this.pool6;
      this.pool6 = pool6;
      this.$prompt(this.$t("Amount To Unstake"), "", {
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("cmNum");
          }
          if (+val <= 0) {
            return this.$t("cgt");
          }

          if (this.limit * this.price > this.balance) {
            return this.$t("notEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(
          ["address", "uint256"],
          [
            this.pool6,
            "0x" +
              new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),
          ]
        );
        let functionSig = Utilss.sha3("UnDelegate(address,uint256)").substr(
          2,
          8
        );

        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            console.log("hash", result);
            this.$alert(
              "TX ID: " + result,
              "You succesfully unstaked your coins!",
              {
                confirmButtonText: this.$t("CLOSE"),
                type: "success",
              }
            );
          })
          .catch((error) => {
            console.log("tx error", error);
          });
      });
    },

    claimRwd6() {
      document.getElementById("pool6").click();
      const pool6 = this.pool6;
      this.pool6 = pool6;
      this.$prompt(this.$t("Amount To Claim"), "", {
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("rewardNumber");
          }

          if (+val <= 0) {
            return this.$t("rewardGt");
          }

          let leftReard = this.bn.minus(this.pool6.reward, val);
          if (leftReard < 0) {
            return this.$t("rewardNotEnough");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(
          ["address", "uint256"],
          [
            this.pool6,
            "0x" +
              new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),
          ]
        );
        let functionSig = Utilss.sha3("WithdrawReward(address,uint256)").substr(
          2,
          8
        );

        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({
            method: "eth_sendTransaction",
            params,
          })
          .then((result) => {
            console.log("hash", result);
            this.$alert(
              "TX ID: " + result,
              "You succesfully claimed your rewards!",
              {
                confirmButtonText: this.$t("confirm"),
                type: "success",
              }
            );
          })
          .catch((error) => {
            console.log("tx error", error);
          });
      });      
    },
    // END
  },
};
</script>

<style scoped>
button {
  border: none;
  width: 36px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  color: #ffffff;
  background-color: #273546;
  border-radius: 4px;
  outline: none;
  align-items: center;
  margin: 10px auto;
}

.separator {
  padding: 2rem;
  border-bottom: 1px solid #000;
}

.wallet-description {
  padding: 2em;
  font-size: 1.6rem;
  font-weight: 300;
  color: #ffffff;
  font-family: Anita, Helvetica, sans-serif;
}

.sep1 {
  padding-bottom: 20px;
  border-bottom: transparent;
}

.buttns {
  margin: 10px 0 20px 0;
  display: inline-block;
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
.lockimg {
  width: 6rem;
  height: auto;
  display: block;
  /* margin-top: 40px; */
  margin: -4rem auto 1rem auto;

}


.box-image{
  width: 6rem;
  height: auto;
  display: block;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto
}

.itemsD {
  font-family: Pirulen, Arial, Helvetica, sans-serif;
  color: #496785;
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 5px;
}

.valueD {
  font-family: Helvetica, sans-serif;
  color: #ffffff;
  font-size: 16px;
  font-weight: lighter;
  margin-bottom: 5px;
}

.statsD {
  margin: 20px;
}

.hero-bal {
  font-family: "Anita";
    font-weight: 480;
    line-height: 1.3;
    margin-top: -4em; 
    position: relative;
    color:#fff;
    border-radius: 10px;
    box-sizing: 1px;
    box-shadow: 0 4px 60px #000;
}


.vAddy1 {
  font-size: 12px;
  font-weight: 100;
  font-family: Pirulen, Arial, Helvetica, sans-serif;
  color: #ffffff;
  text-align: center;
  display: inline-block;
  min-width: 140px;
}

.stian {
  font-size: 15px;
  font-weight: 100;
  font-family: Anita, Arial, Helvetica, sans-serif !important;
  color: #ffffff;
  text-align: center;
  display: inline-block;
  min-width: 140px;
}

.vAddy2 {
  font-size: 12px;
  font-weight: 100;
  font-family: Pirulen, Arial, Helvetica, sans-serif;
  color: #ffffff;
  text-align: center;
  display: inline-block;
  min-width: 140px;
  margin-bottom: 24px;
}

.vAddy11 {
  font-size: 12px;
  font-weight: 100;
  padding-top: 10px;
  font-family: Pirulen, Arial, Helvetica, sans-serif;
  color: #ffffff;
  text-align: center;
  display: inline-block;
  min-width: 140px;
}

.walBalT {
  color: #ffffff;
  margin: 10px;
  font-size: 28px;
  font-weight: 400;
}

.neatStaking {
  text-align: left;
  margin: 10px;
}
.walimgs {
  width: 28px;
  height: auto;
}

.walimg {
  width: 64px;
  height: auto;
  margin: 0;
}

.spinr {
  margin: 0 auto;
  display: inline-block;
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
.pools {
  margin: 10px auto;
}

.btnss {
  margin-bottom: -10px;
}

.btns4 {
  margin-bottom: -20px;
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
  margin: 0 10px;
}

.rippleStake:hover {
  color: #000;
  text-transform: uppercase;
  background: #ffffff radial-gradient(circle, transparent 1%, #00bfff 1%)
    center/15000%;
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
  background: #443490 radial-gradient(circle, transparent 1%, #00bfff 1%)
    center/15000%;
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
  margin: 0 10px;
}

.rippleClaims:hover {
  color: #000;
  text-transform: uppercase;

  background: #ffffff radial-gradient(circle, transparent 1%, #ffffff 1%)
    center/15000%;
}

.deleg {
  text-align: center;
  margin: 10px 0px;
  font-size: 13px;
  font-weight: 100;
  color: #496785;
  font-family: Pirulen, Helvetica, sans-serif;
}

.noSel {
  text-align: center;

  margin: 10px 0px;
  font-size: 16px;
  font-weight: 100;
  color: #496785;
  font-family: Pirulen, Helvetica, sans-serif;
}

.addry-w {
  text-align: center;

  font-size: 16px;
  font-weight: 100;
  color: #496785;
  font-family: Pirulen, Helvetica, sans-serif;
}

.boxess {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 20px 0px;
  
}

.boxwb {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    vertical-align: center;
    width: 20em;
    height: 30rem;
    border-radius: 10px;
    margin: auto;
    background: linear-gradient(to bottom,#11001e,#786afb);
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
  background: linear-gradient(to right,#6519c9,#2472fc);
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
    background: #ffffff radial-gradient(circle, transparent 1%, red 1%)
      center/15000%;
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

    background: #ffffff radial-gradient(circle, transparent 1%, #ffffff 1%)
      center/15000%;
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


