<template>
  <div class="dashboard">
    <div class="boxe">
      <div class="box0">
        <div class="statsD">
          <div class="stats1">
            <div class="itemsD">Block Height</div>
            <div class="valueD">{{ (+height).toLocaleString() }}</div>
          </div>

          <div class="stats1">
            <div class="itemsD">Avg. Block Time</div>
            <div class="valueD">1.2 seconds</div>
          </div>
          <div class="stats1">
            <div class="itemsD">Staking APY</div>
            <div class="valueD">{{ (+stakingAPY).toFixed(2) + " %" }}</div>
          </div>

          <div class="stats1">
            <div class="itemsD">Locked Coins</div>
            <div class="valueD">{{ (+totalStake).toLocaleString() }}</div>
          </div>

          <div class="stats1">
            <div class="itemsD">Pct. Of Total</div>
            <div class="valueD">{{ (+percentLock).toFixed(2) }} %</div>
          </div>

          <div class="stats1">
            <div class="itemsD">Circ. Supply</div>
            <div class="valueD">{{ (+circcc).toLocaleString() }}</div>
          </div>

          <div class="stats1">
            <div class="itemsD">Total Supply</div>
            <div class="valueD">{{ (+totalSupp).toLocaleString() }}</div>
          </div>

          <div class="stats1">
            <div class="itemsD">Pct. of Max</div>
            <div class="valueD">{{ (+percentMax).toFixed(2) }} %</div>
          </div>

          <div class="stats1">
            <div class="itemsD">Max Supply</div>
            <div class="valueD">50,000,000</div>
          </div>

          <div class="stats1">
            <div class="itemsD">NEAT coin Price</div>
            <div class="valueD">$ {{ (+priceUSD).toFixed(4) }}</div>
          </div>

          <div class="stats1">
            <div class="itemsD">24h Change</div>
            <div class="valueD">{{ (+price24h).toFixed(2) }} %</div>
          </div>

          <div class="stats1">
            <div class="itemsD">Market CAP</div>
            <div class="valueD">$ {{ (+marketCap).toLocaleString() }}</div>
          </div>
        </div>



      </div>
      <div class="boxes">
        <div class="box1">

          <div class="pools">
            <div class="vAddy1" id="pool1">
              <span style="color: #496785">1.</span> {{ "DANNY M POOL" }}<span style="color: #496785">Pool Fee:</span><span style="font-family: Helvetica;font-weight: normal;font-size: 14px;">{{ vComm }}</span>
              <span style="color: #496785">Staking Power:</span><span style="font-family:Helvetica;font-weight:normal;font-size: 14px;">{{ (+v22power).toLocaleString() }}</span>
              <button class="rippleSelect" v-show="staking == 0 && rewards == 0" @click="select1">SELECT</button>
              <span v-show="staking != 0" style="color: #496785;font-size: 14px;font-weight: normal;font-family: Pirulen, Helvetica;">NEAT</span>
            </div> <div class="sep"></div>
          </div>

          <div class="pools">
            <div class="vAddy1" id="pool2">
              <span style="color: #496785">2.</span> {{ "NEATIO - ASIA -" }}<span style="color: #496785">Pool Fee:</span><span style="font-family: Helvetica;font-weight:normal;font-size:14px;">{{ vComm }}</span>
              <span style="color: #496785">Staking Power:</span><span style="font-family: Helvetica;font-weight: normal;font-size: 14px;">{{ (+v33power).toLocaleString() }}</span>
              <button class="rippleSelect" v-show="staking == 0 && rewards == 0" @click="select2">SELECT</button>
              <span v-show="staking != 0" style="color: #496785;font-size:14px;font-weight:normal;font-family: Pirulen, Helvetica;">NEAT</span>
            </div><div class="sep"></div>
          </div>


          <div class="pools">
            <div class="vAddy1" id="pool3">
              <span style="color: #496785">3.</span> {{ "ROMANIA POOL" }}<span style="color: #496785">Pool Fee:</span><span style="font-family: Helvetica; font-weight: normal; font-size: 14px;">{{ vComm }}</span>
              <span style="color: #496785">Staking Power:</span><span style="font-family: Helvetica; font-weight: normal; font-size: 14px;">{{ (+v44power).toLocaleString() }}</span>
               <button class="rippleSelect" v-show="staking == 0 && rewards == 0" @click="select3"> SELECT </button>
              <span v-show="staking != 0" style=" color: #496785; font-size: 14px; font-weight: normal; font-family: Pirulen, Helvetica;">NEAT</span>
            </div><div class="sep"></div>
          </div>

          <div class="pools">
            <div class="vAddy1" id="pool4"><span style="color: #496785">4.</span> {{ "SILVIU25 POOL" }}<span style="color: #496785">Pool Fee:</span>
              <span style="font-family: Helvetica; font-weight: normal; font-size: 14px; ">{{ vComm }}</span><span style="color: #496785">Staking Power:</span>
              <span style="font-family: Helvetica; font-weight: normal; font-size: 14px; ">{{ (+v55power).toLocaleString() }}</span>
              <button class="rippleSelect" v-show="staking == 0 && rewards == 0" @click="select4">SELECT</button>
              <span v-show="staking != 0"  style=" color: #496785; font-size: 14px; font-weight: normal; font-family: Pirulen, Helvetica;">NEAT</span></div>
            <div class="sep"></div>
          </div>

          <div class="pools">
            <div class="vAddy1" id="pool5"><span style="color: #496785">5.</span> {{ "KINGNODE - EU" }}<span style="color: #496785">Pool Fee:</span>
              <span style=" font-family: Helvetica; font-weight: normal; font-size: 14px;">{{ vComm }}</span>
              <span style="color: #496785">Staking Power:</span><span style=" font-family: Helvetica; font-weight: normal; font-size: 14px;">{{ (+v66power).toLocaleString() }}</span>
              <button class="rippleSelect" v-show="staking == 0 && rewards == 0" @click="select5">SELECT</button>
              <span v-show="staking != 0" style="color: #496785;font-size: 14px;font-weight: normal;font-family: Pirulen, Helvetica;">NEAT</span>
            </div>
            <div class="sep"></div>
          </div>

          <div class="pools">
            <div class="vAddy2" id="pool6">
              <span style="color: #496785">6.</span> {{ "NEATIO EUROPE" }}
              <span style="color: #496785">Pool Fee:</span>
              <span style=" font-family: Helvetica; font-weight: normal; font-size: 14px;">{{ vComm }}</span> <span style="color: #496785">Staking Power:</span>
              <span style="font-family: Helvetica; font-weight: normal; font-size: 14px;">{{ (+v77power).toLocaleString() }}</span>
              <button class="rippleSelect" v-show="staking == 0 && rewards == 0" @click="select6"> SELECT </button>
              <span v-show="staking != 0" style="color: #496785;  font-size: 14px; font-weight: normal; font-family: Pirulen, Helvetica;"> NEAT</span>
            </div>
          </div>

        </div>
        <div class="box2">
          <div class="lockked" v-show="address === ''">
            <img src="../../assets/lock.png" alt="Lock" class="lockimg" />
          </div>

          <div class="locked" v-show="address === ''">
            Please unlock your wallet!
          </div>
          <div class="neatStaking">
            <div class="balance-details" v-show="address != ''">
              <div class="wallet-balance" v-show="address !== ''">
                <div class="addry-w">{{ addry }}</div>
                <div class="walBalT">
                  {{ (+balance).toFixed(6)
                  }}<span
                    style="
                      color: #496785;
                      font-size: 22px;
                      font-weight: normal;
                      font-family: Pirulen, Helvetica;
                    "
                  >
                    NEAT</span
                  >
                </div>
              </div>

              <div class="sep"></div>

              <div class="boxess">
                <div class="wallet-balance-available2">
                  <div class="wl">
                    <img
                      src="../../assets/claim.png"
                      alt="stake"
                      class="walimg"
                    />
                  </div>

                  <div>
                    <span
                      style="
                        color: #496785;
                        font-weight: lighter;
                        font-size: 11px;
                        font-family: Pirulen, Helvetica;
                      "
                      >Coins In Stake</span
                    >
                  </div>
                  <span style="color: #496785; font-family: Helvetica">{{
                    (+staking).toFixed(6)
                  }}</span>
                </div>

                <div class="wallet-balance-available2">
                  <div class="wl">
                    <div class="spinr">
                      <orbit-spinner
                        :animation-duration="1200"
                        :size="55"
                        color="#00ffff"
                        alt="stake"
                      />
                    </div>
                  </div>
                  <span
                    style="
                      color: #496785;

                      font-weight: lighter;
                      font-size: 11px;
                      font-family: Pirulen, Helvetica;
                    "
                    >Unclaimed Rewards</span
                  >
                  <span style="color: #496785; font-family: Helvetica">{{
                    (+rewards).toFixed(18)
                  }}</span>
                </div>
              </div>

              <div
                class="noSel"
                v-show="selectedPool == null && staking == 0 && rewards == 0"
              >
                select a pool if you wish to stake your coins
              </div>

              <div class="deleg" v-show="selectedPool != null">
                Selected pool
                <span
                  style="
                    font-size: 14px;
                    color: #00ffff;
                    font-weight: normal;
                    font-family: Pirulen, Helvetica;
                  "
                  >{{ selectedPool }}</span
                >
              </div>
              <div class="deleg" v-show="staking != 0 && rewards != 0">
                Staking on:
                <span
                  style="
                    font-size: 14px;
                    color: #00ffff;
                    font-weight: normal;
                    font-family: Pirulen, Helvetica;
                  "
                  >{{ stakedTo }}</span
                >
              </div>
              <div class="deleg" v-show="rewards > 0">
                Rewards on:
                <span
                  style="
                    font-size: 14px;
                    color: #00ffff;
                    font-weight: normal;
                    font-family: Pirulen, Helvetica;
                  "
                  >{{ stakedTo }}</span
                >
              </div>

              <div
                class="btnss"
                v-show="
                  (staking != null && selectedPool == 'DANNY M POOL') ||
                  (staking != null && stakedTo == 'DANNY M POOL') ||
                  stakedTo == 'DANNY M POOL'
                "
              >
                <div class="buttns">
                  <button class="rippleStake" @click="neatStake1">stake
                  </button>
                  <button class="rippleClaims" @click="claimRwd1">claim
                  </button>
                  <button class="rippleClaims" @click="unStake1">unstake
                  </button>
                </div>
              </div>

              <div
                class="btnss"
                v-show="
                  (staking != null && selectedPool == 'NEATIO - ASIA -') ||
                  (staking != null && stakedTo == 'NEATIO - ASIA -') ||
                  stakedTo == 'NEATIO - ASIA -'
                "
              >
                <div class="buttns">
                  <button class="rippleStake" @click="neatStake2">stake
                  </button>
                  <button class="rippleClaims" @click="claimRwd2">claim
                  </button>
                  <button class="rippleClaims" @click="unStake2">unstake                
                  </button>
                </div>
              </div>

              <div
                class="btnss"
                v-show="
                  (staking != null && selectedPool == 'ROMANIA POOL') ||
                  (staking != null && stakedTo == 'ROMANIA POOL') ||
                  stakedTo == 'ROMANIA POOL'
                "
              >
                <div class="buttns">
                  <button class="rippleStake" @click="neatStake3">stake
                  </button>
                  <button class="rippleClaims" @click="claimRwd3">claim
                  </button>
                  <button class="rippleClaims" @click="unStake3">unstake
                  </button>
                </div>
              </div>

              <div
                class="btnss"
                v-show="
                  (staking != null && selectedPool == 'SILVIU25 POOL') ||
                  (staking != null && stakedTo == 'SILVIU25 POOL') ||
                  stakedTo == 'SILVIU25 POOL'
                "
              >
                <div class="buttns">
                  <button class="rippleStake" @click="neatStake4">stake
                  </button>
                  <button class="rippleClaims" @click="claimRwd4">claim
                  </button>
                  <button class="rippleClaims" @click="unStake4">unstake
                  </button>
                </div>
              </div>

              <div
                class="btnss"
                v-show="
                  (staking != null && selectedPool == 'KINGNODE - EU') ||
                  (staking != null && stakedTo == 'KINGNODE - EU') ||
                  stakedTo == 'KINGNODE - EU'
                "
              >
                <div class="buttns">
                  <button class="rippleStake" @click="neatStake5">stake
                  </button>
                  <button class="rippleClaims" @click="claimRwd5">claim
                  </button>
                  <button class="rippleClaims" @click="unStake5">unstake
                  </button>
                </div>
              </div>

              <div
                class="btnss"
                v-show="
                  (staking != null && selectedPool == 'NEATIO EUROPE') ||
                  (staking != null && stakedTo == 'NEATIO EUROPE') ||
                  stakedTo == 'NEATIO EUROPE'
                "
              >
                <div class="buttns">
                  <button class="rippleStake" @click="neatStake6">stake
                  </button>
                  <button class="rippleClaims" @click="claimRwd6">claim
                  </button>
                  <button class="rippleClaims" @click="unStake6">unstake
                  </button>
                </div>
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
  </div>
</template>

<script>
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
      address: "",
      privateKey: "",
      staking: null,
      rewards: null,
      rewardBalance: null,
      amount: "",
      limit: "21000",
      addry: null,
      price: "",
      pool1: null,
      pool2: null,
      pool3: null,
      pool4: null,
      pool5: null,
      pool6: null,
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
    this.getValidators();
    this.initialize();
    this.getHeight();
    this.getPrice();
    this.getCirc();
    this.get24h();
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

          if (
            this.delegatedTo.hasOwnProperty(
              "0xa5ed22086ee9a68cdb3fd469d31316d40546c9c6"
            )
          ) {
            this.stakedTo = "DANNY M POOL";
          }

          if (
            this.delegatedTo.hasOwnProperty(
              "0x6f755798dc3fb59d3236b0814d4038a094c8db6e"
            )
          ) {
            this.stakedTo = "NEATIO - ASIA -";
          }

          if (
            this.delegatedTo.hasOwnProperty(
              "0xb0745e35006a0fbb88435a15eb8c342a4dc3a02b"
            )
          ) {
            this.stakedTo = "ROMANIA POOL";
          }

          if (
            this.delegatedTo.hasOwnProperty(
              "0xc8b3706f2db85fd5a1590b2a1329ab5af70ef905"
            )
          ) {
            this.stakedTo = "SILVIU25 POOL";
          }

          if (
            this.delegatedTo.hasOwnProperty(
              "0xe98ef881833ff63bca2ea3e92636e7cb7c19d283"
            )
          ) {
            this.stakedTo = "KINGNODE - EU";
          }

          if (
            this.delegatedTo.hasOwnProperty(
              "0xacc7d6d3d745f1f2791a5c42c48da3aa9931f329"
            )
          ) {
            this.stakedTo = "NEATIO EUROPE";
          }
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
      const circulating = this.circulating;
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

      const v2 = Object(validators)[1]; 
      const v2Addy = v2.address;
      this.pool1 = v2Addy; // Pool 1 
      const vPower2 = Utils.toNEAT(Nat.toString(v2.votingPower));
      this.vPower2 = Number(vPower2);
      const v2Pwr = this.vPower2;
      this.v2Pwr = v2Pwr.toFixed(0);
      this.v22power = parseInt(this.v2Pwr);

      const v3 = Object(validators)[2]; 
      const v3Addy = v3.address;
      this.pool2 = v3Addy; // Pool 2
      const vPower3 = Utils.toNEAT(Nat.toString(v3.votingPower));
      this.vPower3 = Number(vPower3);
      const v3Pwr = this.vPower3;
      this.v3Pwr = v3Pwr.toFixed(0);
      this.v33power = parseInt(this.v3Pwr);

      const v4 = Object(validators)[3]; 
      const v4Addy = v4.address;
      this.pool3 = v4Addy; // Pool 3 
      const vPower4 = Utils.toNEAT(Nat.toString(v4.votingPower));
      this.vPower4 = Number(vPower4);
      const v4Pwr = this.vPower4;
      this.v4Pwr = v4Pwr.toFixed(0);
      this.v44power = parseInt(this.v4Pwr);

      const v5 = Object(validators)[4];
      const v5Addy = v5.address;
      this.pool4 = v5Addy; //Pool 4 
      const vPower5 = Utils.toNEAT(Nat.toString(v5.votingPower));
      this.vPower5 = Number(vPower5);
      const v5Pwr = this.vPower5;
      this.v5Pwr = v5Pwr.toFixed(0);
      this.v55power = parseInt(this.v5Pwr);

      const v6 = Object(validators)[5];
      const v6Addy = v6.address;
      this.pool5 = v6Addy; // Pool 5
      const vPower6 = Utils.toNEAT(Nat.toString(v6.votingPower));
      this.vPower6 = Number(vPower6);
      const v6Pwr = this.vPower6;
      this.v6Pwr = v6Pwr.toFixed(0);
      this.v66power = parseInt(this.v6Pwr);

      const v7 = Object(validators)[6];
      const v7Addy = v7.address;
      this.pool6 = v7Addy; // Pool 6
      const vPower7 = Utils.toNEAT(Nat.toString(v7.votingPower));
      this.vPower7 = Number(vPower7);
      const v7Pwr = this.vPower7;
      this.v7Pwr = v7Pwr.toFixed(0);
      this.v77power = parseInt(this.v7Pwr);

      const totalStakeHex = parseInt(v2.votingPower) + parseInt(v3.votingPower) + parseInt(v4.votingPower) + parseInt(v5.votingPower) + parseInt(v6.votingPower) + parseInt(v7.votingPower);
      const totalStakeNEAT = totalStakeHex / 1e18;
      this.totalStake = totalStakeNEAT.toFixed(0);
      this.stakingAPY = (2964759 / parseInt(this.totalStake)) * 100 - 15;
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
      this.selectedPool = "KINGNODE - EU";
    },

    select6() {
      document.getElementById("pool6").click();
      this.selectedPool = "NEATIO EUROPE";
    },


    neatStake1() {
      document.getElementById("pool1").click();
      const pool1 = this.pool1;
      console.log(pool1);
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
  min-width: 36px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  color: #00ffff;
  background-color: #273546;
  border-radius: 4px;
  outline: none;
  align-items: center;
  margin: 10px auto;
}

.sep {
  padding-bottom: 24px;
  border-bottom: 1px solid #00ffffa4;
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
  margin: 20px;
  color: #00ffff;
  font-weight: 200;
  font-family: Pirulen, Helvetica, sans-serif;
}

.lockked {
  align-items: center;
  justify-content: center;
}
.lockimg {
  width: 124px;
  height: auto;
  display: block;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
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
  color: #00ffff;
  font-size: 16px;
  font-weight: lighter;
  margin-bottom: 5px;
}

.statsD {
  margin: 20px;
}

.vAddy1 {
  font-size: 12px;
  font-weight: 100;
  font-family: Pirulen, Arial, Helvetica, sans-serif;
  color: #00ffff;
  text-align: center;
  display: inline-block;
  min-width: 140px;
}

.vAddy2 {
  font-size: 12px;
  font-weight: 100;
  font-family: Pirulen, Arial, Helvetica, sans-serif;
  color: #00ffff;
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
  color: #00ffff;
  text-align: center;
  display: inline-block;
  min-width: 140px;
}

.walBalT {
  color: #00ffff;
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
  color: #00ffff;
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
  color: #00ffff;
  border: 1px solid #00ffffa4;
  background-color: transparent;
  background-position: center;
  transition: background 0.4s;
  margin: 0 10px;
}

.rippleStake:hover {
  color: #000;
  text-transform: uppercase;
  background: #00ffff radial-gradient(circle, transparent 1%, red 1%)
    center/15000%;
}

.rippleSelect {
  font-size: 12px;
  min-width: 68px;
  height: 22px;
  border-radius: 4px;
  font-weight: bold;
  color: #00ffff;
  border: 1px solid #00ffffa4;
  background-color: transparent;
  background-position: center;
  transition: background 0.4s;
  margin: 0 10px;
}

.rippleSelect:hover {
  color: #000;
  text-transform: uppercase;
  background: #00ffff radial-gradient(circle, transparent 1%, red 1%)
    center/15000%;
}

.rippleClaims {
  font-size: 12px;
  min-width: 68px;
  height: 22px;
  border-radius: 4px;
  font-weight: bold;
  border: 1px solid #00ffffa4;
  background-color: transparent;
  background-position: center;
  transition: background 0.4s;
  margin: 0 10px;
}

.rippleClaims:hover {
  color: #000;
  text-transform: uppercase;

  background: #00ffff radial-gradient(circle, transparent 1%, #00ffff 1%)
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

@media only screen and (max-width: 560px) {
  .box1 {
    width: auto;
    min-height: 300px;
    padding-top: 10px;
    border-width: 1px;
    background: #000;
    display: grid;
    border-radius: 10px;
    margin: 50px 10px 0px 10px;
    box-sizing: 1px;
    border: none;
    border: 1px solid #00ffffa4;
    border-radius: 10px;
    box-shadow: 0 0 40px #00bfff31;
  }

  .valueD {
    font-family: Helvetica, sans-serif;
    color: #00ffff;
    font-size: 12px;
    font-weight: lighter;
    margin-bottom: 5px;
  }

  .pools {
    text-align: center;
    margin: 0 auto;
    padding: 10px;
  }

  .rippleStake {
    font-size: 12px;
    min-width: 68px;
    height: 22px;
    border-radius: 4px;
    font-weight: bold;
    color: #00ffff;
    border: 1px solid #00ffffa4;
    background-color: transparent;
    background-position: center;
    transition: background 0.4s;
    margin: 0 auto;
  }

  .rippleStake:hover {
    color: #000;
    text-transform: uppercase;
    background: #00ffff radial-gradient(circle, transparent 1%, red 1%)
      center/15000%;
  }

  .rippleClaims {
    font-size: 12px;
    min-width: 68px;
    height: 22px;
    border-radius: 4px;
    font-weight: bold;
    border: 1px solid #00ffffa4;
    background-color: transparent;
    background-position: center;
    transition: background 0.4s;
    margin: 0 auto;
  }

  .rippleClaims:hover {
    color: #000;
    text-transform: uppercase;

    background: #00ffff radial-gradient(circle, transparent 1%, #00ffff 1%)
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


