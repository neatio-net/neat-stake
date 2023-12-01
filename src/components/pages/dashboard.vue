<template>
  <div class="dashboard">


    <div v-show="address == null">
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
          <button class="rippleSelectM" @click="connectAccount">OPEN</button>
        </div>
        <div class="boxwb">
          <div class="lockked">
            <img src="../../assets/unencrypted.png" alt="Private Key" class="lockimg" />
          </div>
          <div class="locked">Private Key</div>
          <button class="rippleSelectM" >IMPORT</button>
        </div>
        <div class="boxwb">
          <div class="lockked">
            <img src="../../assets/encrypted.png" alt="Keystore File" class="lockimg" />
          </div>
          <div class="locked">Keystore File</div>
          <button class="rippleSelectM" >SELECT</button>
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
            <button class="rippleSelectM" @click="neatSend">SEND</button>
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
                  <div class="earn-text">Earn up to 10% per year</div>
                  <div><button class="rippleStakeNew" @click="neatStake">STAKE</button></div>

                </div>


                <div class="boxess-right">

                  <div class="balance-staked">

                    <div class="wl">
                      <div class="spinr"><pixel-spinner :animation-duration="2000" :size="70" color="#000000" /></div>
                    </div>

                    <div>Coins In Stake</div>
                    <div>{{ (+staking).toFixed(2) }}</div>
                    <div><button class="rippleUnStakeNew" @click="unStake">UNSTAKE</button></div>
                  </div>
                  <div class="unclaimed-rewards">

                    <div class="wl">
                      <div class="spinr"><self-building-square-spinner :animation-duration="6000" :size="40"
                          color="#000000" /></div>
                    </div>
                    <div>Unclaimed Rewards</div>
                    <div>{{ (+rewards).toFixed(2) }}</div>
                    <div><button class="rippleClaimNew" @click="claimRwd">CLAIM</button></div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </template>
      <template v-slot:tabPanel-3>
        <div class="action-box1">
          <div class="neatSending">
            <div class="hero__title">
              <input type="text" class="send-input1" v-model="addressToSend" placeholder="Address" />
            </div>
            <div class="hero__title">
              <input type="text" class="send-input2" v-model="amountToSend" placeholder="Amount" />
            </div>
            <button class="rippleSelectM" @click="neatSend">SEND</button>
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
      address: null,
      privateKey: "",
      staking: null,
      rewards: null,
      rewardBalance: null,
      addressToSend: '',
      amountToSend: null,
      amount: "",
      limit: "25000",
      addry: null,
      price: "",
      vComm: "15%",
      pool1: null,
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
      tabList: ["Transfer", "Staking"],

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

    neatStake() {
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
            to: "0x0000000000000000000000000000000000001001",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: Utils.toHex(Utils.fromNEAT(value)),
            data: "0x" + functionSig + data.substring(2),
          },
        ];

        ethereum
          .request({ method: "eth_sendTransaction", params, })
          .then((result) => { this.$alert("TX ID: " + result, "Staking Was Succesful!", { confirmButtonText: this.$t("CLOSE"), type: "success", }); })
          .catch((error) => { console.log("tx error", error); });
      });
    },

    unStake() {
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
        let data = Abi.encodeParams(["address", "uint256"], [this.pool1, "0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16),]);
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
            console.log("hash", result); this.$alert(
              "TX ID: " + result, "You succesfully unstaked your coins!", { confirmButtonText: this.$t("CLOSE"), type: "success", });
          })
          .catch((error) => { console.log("tx error", error); });
      });
    },

    claimRwd() {
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
          console.log("hash", result);
          this.$alert("TX ID: " + result, "You succesfully claimed your rewards!", { confirmButtonText: this.$t("confirm"), type: "success", });
        }).catch((error) => { console.log("tx error", error); });
      });
    },

    async neatSend() {

      if (!Utils.isAddress(this.addressToSend)) {
        this.info("error", this.$t("errAddr"));
        return;
      }
      if (isNaN(this.amountToSend) || this.amountToSend <= 0) {
        this.info("error", this.$t("errAmount"));
        return;
      }
      if (isNaN(this.limit) || this.limit <= 0) {
        this.info("error", this.$t("errLimit"));
        return;
      }

      if (this.price != 0.0000004) {
        this.price = '0.0000004'
      }

      if (this.limit < 21000) {
        this.info("error", this.$t("errLimitLess"));
        return;
      }

      if (isNaN(this.price) || this.price < 0) {
        this.info("error", this.$t("errPrice"));
        return;
      }

      if (this.price > 0.00005) {
        this.info("error", this.$t("errPriceBig"));
        return;
      }

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

    },

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

.el-message-box {}

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

.wallet-description {
  padding: 2em;
  font-size: 1.6rem;
  font-weight: 300;
  color: #ffffff;
  font-family: Anita, Helvetica, sans-serif;
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

.stake-image {
  width: 6rem;
  height: auto;
  display: block;
  margin: 0 auto;

}

.sepr {
  width: 2px;
  background-color: #000000;
}

.staking-side {
  color: #000000;
}

.balance-staked {

  color: #000000;
}

.balance-staked2 {
  display: flexbox;
  vertical-align: middle;
  padding-top: 3rem;
  border-right: #000 3px solid;

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
  background: #ffffff radial-gradient(circle, transparent 1%, #00bfff 1%) center/15000%;
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


.earn-text {
  margin: 1rem;
  font-size: 1.2rem;
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


