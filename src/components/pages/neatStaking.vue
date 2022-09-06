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
            <div class="itemsD">Block Time</div>
            <div class="valueD">~1.5 sec</div>
          </div>
          <div class="stats1">
            <div class="itemsD">Staking APY</div>
            <div class="valueD">{{ (+stakingAPY).toFixed(2) + " %" }}</div>
          </div>

          <div class="stats1">
            <div class="itemsD">Total Locked</div>
            <div class="valueD">{{ (+totalStake).toLocaleString() }}</div>
          </div>

          <div class="stats1">
            <div class="itemsD">Circ. Supply</div>
            <div class="valueD">{{ "3,829,969" }}</div>
          </div>

          <div class="stats1">
            <div class="itemsD">Max Supply</div>
            <div class="valueD">50,000,000</div>
          </div>
        </div>
      </div>
      <div class="boxes">
        <div class="box1">
          <!-- Pool1 -->
          <div class="pools">
            <div class="poolbx">
              <div class="vAddy1" id="pool1">
                <span style="color: #496785">1.</span> {{ "NEATIO ASIA" }}
                <span style="color: #496785"> Pool Fee:</span>
                <span
                  style="
                    font-family: Helvetica;
                    font-weight: normal;
                    font-size: 14px;
                  "
                  >{{ vComm }}</span
                >
                <span style="color: #496785"> Voting Power:</span>
                <span
                  style="
                    font-family: Helvetica;
                    font-weight: normal;
                    font-size: 14px;
                  "
                  >{{ (+vPower3).toFixed(0) }}</span
                >
                <span style="color: #496785">NEAT</span>
              </div>

              <div class="btns" v-show="sPool !== null">
                <button class="rippleStake" @click="neatStake11">stake</button>
                <button class="rippleClaims" @click="claimRwd1">claim</button>
                <button class="rippleUnstake" @click="unStake1">unstake</button>
              </div>

              <div class="btns" v-show="sPool === null">
                <div class="buttns">
                  <button class="rippleStake" @click="neatStake1">stake</button>
                  <button class="rippleClaims" @click="claimRwd1">claim</button>
                  <button class="rippleClaims" @click="unStake1">
                    unstake
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Pool2 -->
          <div class="pools">
            <div class="poolbx">
              <div class="vAddy1" id="pool2">
                <span style="color: #496785">2.</span> {{ "NEATIO E. U." }}
                <span style="color: #496785"> Pool Fee:</span>
                <span
                  style="
                    font-family: Helvetica;
                    font-weight: normal;
                    font-size: 14px;
                  "
                  >{{ vComm }}</span
                >
                <span style="color: #496785"> Voting Power:</span>
                <span
                  style="
                    font-family: Helvetica;
                    font-weight: normal;
                    font-size: 14px;
                  "
                  >{{ (+vPower4).toFixed(0) }}</span
                >
                <span style="color: #496785">NEAT</span>
              </div>

              <div class="btns" v-show="sPool !== null">
                <div class="buttns">
                  <button class="rippleStake" @click="neatStake11">
                    stake
                  </button>
                  <button class="rippleClaims" @click="claimRwd1">claim</button>
                  <button class="rippleUnstake" @click="unStake1">
                    unstake
                  </button>
                </div>
              </div>

              <div class="btns" v-show="sPool === null">
                <div class="buttns">
                  <button class="rippleStake" @click="neatStake2">stake</button>
                  <button class="rippleClaims" @click="claimRwd2">claim</button>
                  <button class="rippleClaims" @click="unStake2">
                    unstake
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Pool3 -->
          <div class="pools">
            <div class="poolbx">
              <div class="vAddy1" id="pool3">
                <span style="color: #496785">3.</span> {{ "BIG BOW POOL" }}
                <span style="color: #496785"> Pool Fee:</span>
                <span
                  style="
                    font-family: Helvetica;
                    font-weight: normal;
                    font-size: 14px;
                  "
                  >{{ vComm }}</span
                >
                <span style="color: #496785"> Voting Power:</span>
                <span
                  style="
                    font-family: Helvetica;
                    font-weight: normal;
                    font-size: 14px;
                  "
                  >{{ (+vPower5).toFixed(0) }}</span
                >
                <span style="color: #496785">NEAT</span>
              </div>

              <div class="btns" v-show="sPool !== null">
                <button class="rippleStake" @click="neatStake11">stake</button>
                <button class="rippleClaims" @click="claimRwd1">claim</button>
                <button class="rippleClaims" @click="unStake1">unstake</button>
              </div>

              <div class="btns" v-show="sPool === null">
                <div class="buttns">
                  <button class="rippleStake" @click="neatStake3">stake</button>
                  <button class="rippleClaims" @click="claimRwd3">claim</button>
                  <button class="rippleClaims" @click="unStake3">
                    unstake
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!--Pool4-->
          <div class="pools">
            <div class="vAddy1" id="pool4">
              <span style="color: #496785">4.</span> {{ "SILVIU25 POOL" }}
              <span style="color: #496785"> Pool Fee:</span>
              <span
                style="
                  font-family: Helvetica;
                  font-weight: normal;
                  font-size: 14px;
                "
                >{{ vComm }}</span
              >
              <span style="color: #496785"> Voting Power:</span>
              <span
                style="
                  font-family: Helvetica;
                  font-weight: normal;
                  font-size: 14px;
                "
                >{{ (+vPower6).toFixed(0) }}</span
              >
              <span style="color: #496785">NEAT</span>
            </div>

            <div class="btns" v-show="sPool !== null">
              <button class="rippleStake" @click="neatStake11">stake</button>
              <button class="rippleClaims" @click="claimRwd1">claim</button>
              <button class="rippleUnstake" @click="unStake1">unstake</button>
            </div>

            <div class="btns" v-show="sPool === null">
              <div class="buttns">
                <button class="rippleStake" @click="neatStake4">stake</button>
                <button class="rippleClaims" @click="claimRwd4">claim</button>
                <button class="rippleClaims" @click="unStake4">unstake</button>
              </div>
            </div>
          </div>

          <!--Pool4 END-->
        </div>
        <div class="box2">
          <div class="lockked" v-show="address === ''">
            <img src="../../assets/lock.png" alt="Lock" class="lockimg" />
          </div>

          <div class="locked" v-show="address === ''">
            Please unlock your wallet!
          </div>
          <div class="neatStaking">
            <!-- <span style="color:lightgrey" >Connected Wallet</span>  -->
            <div class="balance-details" v-show="address != ''">
              <div class="wallet-balance" v-show="address !== ''">
                <div class="wallet-address" v-show="address != ''">
                  <div class="address-title" v-show="address != ''">
                    <div class="wl">
                      <img
                        src="../../assets/wallet.png"
                        alt="stake"
                        class="walimgs"
                      />
                    </div>
                    <span style="color: #496785">{{ addry }}</span>
                  </div>
                </div>

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

              <div class="boxess">
                <div class="wallet-balance-available2">
                  <div class="wl">
                    <img
                      src="../../assets/stake.png"
                      alt="stake"
                      class="walimgs"
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
                    (+staking).toFixed(2)
                  }}</span>
                </div>

                <div class="wallet-balance-available2">
                  <div class="wl">
                    <img
                      src="../../assets/claim.png"
                      alt="stake"
                      class="walimgs"
                    />
                  </div>
                  <span
                    style="
                      color: #496785;
                      font-size: 14px;
                      font-weight: lighter;
                      font-size: 11px;
                      font-family: Pirulen, Helvetica;
                    "
                    >Stake Rewards</span
                  >
                  <span style="color: #496785; font-family: Helvetica">{{
                    (+rewards).toFixed(6)
                  }}</span>
                </div>
              </div>

              <div class="deleg">
                Your coins are delegated to {{ stakedTo }}
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
import Access from "./modules/access";
import EyeInput from "./modules/eyeInput";
import BigNumber from "bignumber.js";
import neatioapi from "neatioapi";
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
      commission: 15,
      staking: null,
      rewards: null,
      amount: "",
      limit: "21000",
      addry: null,
      price: "",
      addy3: null,
      addy4: null,
      addy5: null,
      addy6: null,
      vPower3: null,
      vPower4: null,
      vPower5: null,
      vPower6: null,
      vComm: "15%",
      pool1: null,
      pool2: null,
      pool3: null,
      pool4: null,
      sPool: null,
      height: null,
      totalStake: "",
      circulating: "",
      totalSupply: "",
      stakingAPY: "",
      stakedTo: null,
    };
  },
  components: {
    Access,
    EyeInput,
  },

  async mounted() {
    this.connectAccount();
    this.getValidators();
    this.initialize();
    this.getHeight();
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
              "0xaa38dfb4c9dd61e653bc865ff429f05b2db44977"
            )
          ) {
            this.stakedTo = "BIG BOW POOL";
          }

          if (
            this.delegatedTo.hasOwnProperty(
              "0xb0745e35006a0fbb88435a15eb8c342a4dc3a02b"
            )
          ) {
            this.stakedTo = "NEATIO E.U.";
          }

          if (
            this.delegatedTo.hasOwnProperty(
              "0x6f755798dc3fb59d3236b0814d4038a094c8db6e"
            )
          ) {
            this.stakedTo = "NEATIO ASIA";
          }

          if (
            this.delegatedTo.hasOwnProperty(
              "0xc8b3706f2db85fd5a1590b2a1329ab5af70ef905"
            )
          ) {
            this.stakedTo = "SILVIU POOL";
          }

          console.log(this.stakedTo);
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

      const v2 = Object(validators)[1];
      const v2Addy = v2.address;
      this.addy2 = v2Addy;
      const vPower2 = Utils.toNEAT(Nat.toString(v2.votingPower));
      this.vPower2 = vPower2;

      const v3 = Object(validators)[2];
      const v3Addy = v3.address;
      this.addy3 = v3Addy;
      const vPower3 = Utils.toNEAT(Nat.toString(v3.votingPower));
      this.vPower3 = vPower3;

      const v4 = Object(validators)[3];
      const v4Addy = v4.address;
      this.addy4 = v4Addy;
      const vPower4 = Utils.toNEAT(Nat.toString(v4.votingPower));
      this.vPower4 = vPower4;

      const v5 = Object(validators)[4];
      const v5Addy = v5.address;
      this.addy5 = v5Addy;
      const vPower5 = Utils.toNEAT(Nat.toString(v5.votingPower));
      this.vPower5 = vPower5;

      const v6 = Object(validators)[5];
      const v6Addy = v6.address;
      this.addy6 = v6Addy;
      const vPower6 = Utils.toNEAT(Nat.toString(v6.votingPower));
      this.vPower6 = vPower6;
      console.log(v6Addy);

      const totalStakeHex =
        parseInt(v2.votingPower) +
        parseInt(v3.votingPower) +
        parseInt(v4.votingPower) +
        parseInt(v5.votingPower) +
        parseInt(v6.votingPower);
      const totalStakeNEAT = totalStakeHex / 1e18;
      this.totalStake = totalStakeNEAT.toFixed(0);

      this.stakingAPY = (2964759 / parseInt(this.totalStake)) * 100 - 15;
    },

    // STAKE DONE
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

    neatStake1() {
      document.getElementById("pool1").click();
      const pool1 = this.addy3;
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

    // UNSTAKE DONE
    unStake1() {
      document.getElementById("pool1").click();
      const pool1 = this.addy3;
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
          let surplusVotes = this.bn.minus(
            this.bn.add(this.pool1.proxiedBalance, this.pool1.voted),
            this.bn.add(this.pool1.pendingRefundBalance, this.pool1.val)
          );
          if (surplusVotes < 0) {
            return this.$t("surplusVotes");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(
          ["address", "uint256"],
          [
            this.pool1,
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

    claimRwd1() {
      document.getElementById("pool1").click();
      const pool1 = this.addy3;
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
        let data = Abi.encodeParams(
          ["address", "uint256"],
          [
            this.pool1,
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

    neatStake2() {
      document.getElementById("pool2").click();
      const pool2 = this.addy4;
      this.pool2 = pool2;
      //console.log(pool2);
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
      const pool2 = this.addy4;
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
          let surplusVotes = this.bn.minus(
            this.bn.add(this.pool2.proxiedBalance, this.pool2.unStake2),
            this.bn.add(this.pool2.pendingRefundBalance, this.pool2.val)
          );
          if (surplusVotes < 0) {
            return this.$t("surplusVotes");
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

    claimRwd2() {
      document.getElementById("pool2").click();
      const pool2 = this.addy4;
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

    neatStake3() {
      document.getElementById("pool3").click();
      const pool3 = this.addy5;
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

    // UNSTAKE DONE
    unStake3() {
      document.getElementById("pool3").click();
      const pool3 = this.addy5;
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
          let surplusVotes = this.bn.minus(
            this.bn.add(this.pool3.proxiedBalance, this.pool3.voted),
            this.bn.add(this.pool3.pendingRefundBalance, this.pool3.val)
          );
          if (surplusVotes < 0) {
            return this.$t("surplusVotes");
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

    claimRwd3() {
      document.getElementById("pool3").click();
      const pool3 = this.addy5;
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
    // Pool 4
    neatStake4() {
      document.getElementById("pool4").click();
      const pool4 = this.addy6;
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
      const pool4 = this.addy6;
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
          let surplusVotes = this.bn.minus(
            this.bn.add(this.pool4.proxiedBalance, this.pool4.voted),
            this.bn.add(this.pool4.pendingRefundBalance, this.pool4.val)
          );
          if (surplusVotes < 0) {
            return this.$t("surplusVotes");
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
      const pool4 = this.addy6;
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
            this.pool4,
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

.poolbx {
  border-bottom: 1px solid #00ffffa4;
}

.buttns {
  margin: 10px 20px 20px 10px;
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

.vAddy {
  font-size: 12px;
  color: #00ffff;
  text-align: left;
  margin-left: 20px;
  display: inline-block;
  min-width: 100px;
}

.vAddy1 {
  font-size: 12px;
  font-weight: 100;
  font-family: Pirulen, Arial, Helvetica, sans-serif;
  color: #00ffff;
  text-align: left;
  display: inline-block;
  min-width: 140px;
}

.address-title {
  margin-top: 10px;
  margin-bottom: 24px;
  font-size: 17px;
  font-weight: bold;
}

.wallet-address {
  margin-bottom: 5px;
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;
}

.walBalT {
  color: #00ffff;
  margin: 10px;
  font-size: 28px;
  font-weight: 400;
}

.inputs {
  background-color: #000;
  border-radius: 4px;
  width: 240px;
  margin: 20px auto;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  color: #00ffff;
  padding: 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  text-align: center;
}

.neatStaking {
  text-align: left;
  margin: 10px;
}
.walimgs {
  width: 36px;
  height: auto;
}

.wallet-balance-available {
  margin: 10px;
  max-width: 124px;
  text-align: center;
}

.wallet-balance-available2 {
  margin-top: 10px;
  text-align: center;
}
.wl {
  margin: 10px;
  min-height: 40px;
  width: auto;
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
  margin: 10px;
}

.box-shadow {
  box-sizing: 1px;
  border: none;
  border-radius: 20px;
  padding: 30px 50px;
  -webkit-box-shadow: 0px 5px 26px 8px #00ffff;
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
  font-size: 13px;
  font-weight: 100;
  color: #496785;
  font-family: Pirulen, Helvetica, sans-serif;
}

.ripple:active {
  background-color: #00ffff;
  background-size: 100%;
  transition: background 0s;
}

.rippleUnstake {
  font-size: 12px;
  min-width: 80px;
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

.rippleUnstake:hover {
  color: #000;
  text-transform: uppercase;
  background: rgb(255, 255, 255)
    radial-gradient(circle, transparent 1%, rgb(255, 255, 255) 1%) center/15000%;
}

.boxess {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 20px 0px 20px 0px;
}

@media only screen and (max-width: 560px) {
  .valueD {
    font-family: Helvetica, sans-serif;
    color: #00ffff;
    font-size: 12px;
    font-weight: lighter;
    margin-bottom: 5px;
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

  .ripple:active {
    background-color: #00ffff;
    background-size: 100%;
    transition: background 0s;
  }

  .rippleUnstake {
    font-size: 12px;
    min-width: 80px;
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

  .rippleUnstake:hover {
    color: #000;
    text-transform: uppercase;
    background: rgb(255, 255, 255)
      radial-gradient(circle, transparent 1%, rgb(255, 255, 255) 1%)
      center/15000%;
  }

  .box2 {
    margin: 60px 10px;
  }
}
</style>


