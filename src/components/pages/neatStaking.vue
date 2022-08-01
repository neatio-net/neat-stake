<template>
  <div class="main">
    <div class="dashboard" >
           <div class="box0">      
          NEATIO STAKING DASHBOARD
          
        </div>

    </div>
    <div v-if="step == 1">    

      <Access @unlock="unlock"></Access>
    </div>
    <div v-if="step == 2" style="padding-bottom: 90px">

    <div class="boxes">
     <div class="box1" >
      <!-- Pool1 -->
          <div class="cards-grid__item">
            <div class="cards-grid__graphic">
              <div class="cards-grid__icon cards-grid__icon--create">

              </div>
            </div>
            <div class="pools">
              <div class="poolNo">Pool #1</div>
              <div class="vAddy" id="pool1">{{ addy3 }} </div>
              <div class="vPower"><span style="color:grey">Pool Fee: </span>{{ vComm }}  <span style="color:#a6ff33"> ⋮ </span>  <span style="color:grey">Pool Total Weight: </span>{{ (+vPower3).toFixed(2) }} 
              <span style="color:#00bfff; font-size: small; font-weight: bold;"> NEAT</span></div>
            <div class="btns" v-show="address !== ''">
                <button class="rippleStake" @click="neatStake1">stake</button>                
                <button class="rippleClaims" @click="claimRwd1">claim</button>
                <button class="rippleUnstake" @click="unStake1">unstake</button>
            </div>
            </div>
          </div>

                      <!-- Pool2 -->
          <div class="cards-grid__item">
            <div class="cards-grid__graphic">
              <div class="cards-grid__icon cards-grid__icon--create">

              </div>
            </div>
            <div class="pools">
              <div class="poolNo">Pool #2</div>
              <div class="vAddy" id="pool2">{{ addy4 }} </div>
              <div class="vPower"><span style="color:grey">Pool Fee: </span>{{ vComm }}  <span style="color:#a6ff33"> ⋮ </span>  <span style="color:grey">Pool Total Weight: </span>{{ (+vPower4).toFixed(2) }} 
              <span style="color:#00bfff; font-size: small; font-weight: bold;"> NEAT</span></div>
            <div class="btns" v-show="address !== ''">
                <button class="rippleStake" @click="neatStake2">stake</button>                
                <button class="rippleClaims" @click="claimRwd2">claim</button>
                <button class="rippleUnstake" @click="unStake2">unstake</button>
            </div>
            </div>
          </div>
          <!-- Pool3 -->
                      



      </div>


    
      <div class="box2" >
 
               <div class="lockked" v-show="address === ''">
                  <img
                    src="../../assets/lock.png"
                    alt="Lock"
                    class="lockimg"
                  />
      </div>

                    <div class="locked" v-show="address === ''">Wallet Locked!</div>
        <div class="neatStaking">
                  <div class="balance-details" v-show="address != ''">
                   <div class="wallet-balance-available" v-show="address !== ''">
                       <div class="wallet-address" v-show="address != ''">
              <span style="color:lightgrey" > Connected Wallet Address</span> 
               <div class="address-title" v-show="address != ''">
              {{address}}
              </div>
          </div>
          
           <span style="color:lightgrey; font-size: 14px;">Available Balance:</span>  <span style="color:#a6ff33">{{ (+balance).toFixed(6)}}</span> <span style="font-weight: bold; font-size: 12px;">NEAT</span>
          </div>
          
            <div class="wallet-balance-available">
           <span style="color:lightgrey; font-size: 14px;">Delegated Coins:</span> <span style="color:#a6ff33">{{(+staking).toFixed(6)}}</span>   <span style="font-weight: bold; font-size: 12px;">NEAT</span>
           <!-- <button class="rippleUnreg" @click="unStake1">unstake</button> -->
          </div>
            <div class="wallet-balance-available">
           <span style="color:lightgrey; font-size: 14px;">Unclaimed Rewards:</span> <span style="color:#a6ff33">{{(+rewards).toFixed(6)}}</span>  <span style="font-weight: bold; font-size: 12px;">NEAT</span>
           <!-- <router-link to="/claimReward"
                  ><button class="rippleClaim" @click="claimRwd1">claim</button></router-link
                > -->
          </div>
          </div>
            </div>
        
      </div>
      </div>
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
const Web3 = require('web3');
const Utilss = require('web3').utils;
const URL = 'https://rpc.neatio.net';
const web3 = new Web3('https://rpc.neatio.net');

export default {
  data() {
    return {
      step: 2,
      balance: "",
      fullbalance:"",
      address: "",
      privateKey: "",
      commission: 15,
      staking:"",
      rewards:"",
      amount:"",
      limit: "21000",
      price: "",
      addy3: null,
      addy4: null,
      addy5: null,
      vPower3: null,
      vPower4: null,
      vPower5: null,
      vComm: "15%",
      pool1: null,
      pool2: null,
      pool3: null,
  
    };
  },
  components: {
    Access,
    EyeInput,
  },

  async mounted() {
    this.connectAccount();
    this.initialize();


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
    console.log(validators);
    
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
  },


  methods: {


    initialize () {
      ethereum.on("chainChanged", (_chainId) => {        
        this.getGasPrice();
        this.getBalance ()
        this.getBalanceDetail()
      });

      ethereum.on("accountsChanged", (_accounts) => {
        this.address = _accounts[0];
        this.getBalance ()
        this.getBalanceDetail();
      })
    },


    async connectAccount () {
      try {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        this.address = accounts[0];
        this.getBalance ()
        this.getBalanceDetail();
        this.getGasPrice();
      } catch (e) {
        console.log("request accounts error:", e);
      }
    },


    getBalance () {
      ethereum
        .request({
          method: "eth_getBalance",
          params: [this.address]        
        })      
        .then( (result) => {
          console.log("balance", result);
          this.balance = Utils.toNEAT(result)
        }
        )    
        .catch( (error) => {
            console.log("Error", error)
          }
       )
    },
    
    getBalanceDetail() {
        const valData = {
        jsonrpc: "2.0",
        method: "neat_getBalanceDetail",
        params: [`${this.address}`, "latest", true],
        id: 1,
      };
      axios.post(URL, valData )
        .then((response) => {
          
          this.fullbalance = Utils.toNEAT(
            Nat.toString(response.data.result.balance)
          ),

          this.staking = Utils.toNEAT(
              Nat.toString(response.data.result.delegateBalance)
          ),
          this.rewards = Utils.toNEAT(
              Nat.toString(response.data.result.rewardBalance)
          );
        })
        .catch( (error) => {
            console.log('error', error)            
          }

       )

    },

    getGasPrice() {
      ethereum
        .request({
          method: "eth_gasPrice",
          params: []
        })
        .then((result) => {
            console.log("gasprice", result);
            this.price = Utils.toNEAT(result);
          }
        )
        .catch((error) => {
            console.log('error', error)
          }

        )
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
      const pool1 = this.addy4;
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
          }
        ];

        ethereum
          .request({
            method: 'eth_sendTransaction',
            params,
          })
          .then((result) => {
            console.log('hash', result);
            this.$alert("hash:" + result, "You succesfully staked your coins!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });
            setTimeout(() => {
            this.getBalance();
          }, 2000)
          })
          .catch((error) => {
            console.log('tx error', error)
          });
      });
    },

    // UNSTAKE WIP
    unStake1() {
      document.getElementById("pool1").click();
      const pool1 = this.addy4;
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
        let data = Abi.encodeParams(["address", "uint256"], [this.pool1,"0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16)]);
        let functionSig = Utilss
          .sha3("UnDelegate(address,uint256)")
          .substr(2, 8);

        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          }
        ];

        ethereum
          .request({
            method: 'eth_sendTransaction',
            params,
          })
          .then((result) => {
            console.log('hash', result);
            this.$alert("hash:" + result, "success", {
              confirmButtonText: this.$t("confirm"),
              type: "success",
            });

            setTimeout(() => {
              this.getBalance();
            }, 2000)
          })
          .catch((error) => {
            console.log('tx error', error)
          });

      });
    },
      
      // Claim REWARD WIP
      claimRwd1() {
      document.getElementById("pool1").click();
      const pool1 = this.addy4;
      this.pool1 = pool1;
      this.$prompt(this.$t("Amount To Claim"), "", {
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("rewardNumber")
          }

          if (+val <= 0) {
            return this.$t("rewardGt")
          }

          let leftReard = this.bn.minus(this.pool1.reward, val);
          if (leftReard < 0) {
            return this.$t("rewardNotEnough")
          }
        }
      }).then(({ value }) => {
        let data = Abi.encodeParams(["address", "uint256"], [this.pool1, "0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16)]);
        let functionSig = Utilss
          .sha3("WithdrawReward(address,uint256)")
          .substr(2, 8);

        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          }
        ];

        ethereum
          .request({
            method: 'eth_sendTransaction',
            params,
          })
          .then((result) => {
            console.log('hash', result);
            this.$alert("hash:" + result, "success", {
              confirmButtonText: this.$t("confirm"),
              type: "success",
            });

            setTimeout(() => {
              this.refresh();
              this.getBalance();
            }, 4000)
          })
          .catch((error) => {
            console.log('tx error', error)
          });
      });
    },

    // 2nd Round
    neatStake2() {
      document.getElementById("pool2").click();
      const pool2 = this.addy4;
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
          }
        ];

        ethereum
          .request({
            method: 'eth_sendTransaction',
            params,
          })
          .then((result) => {

            this.$alert("TX:" + result, "Staked Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });
            setTimeout(() => {
            this.getBalance();
          }, 2000)
          })
          .catch((error) => {
            console.log('tx error', error)
          });
      });
    },

    // UNSTAKE WIP
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
        let data = Abi.encodeParams(["address", "uint256"], [this.pool2,"0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16)]);
        let functionSig = Utilss
          .sha3("UnDelegate(address,uint256)")
          .substr(2, 8);

        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          }
        ];

        ethereum
          .request({
            method: 'eth_sendTransaction',
            params,
          })
          .then((result) => {
          
            this.$alert("TX:" + result, "UnStake Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log('tx error', error)
          });

      });
    },
      
      // Claim REWARD DONE
      claimRwd2() {
      document.getElementById("pool2").click();
      const pool2 = this.addy4;
      this.pool2 = pool2;
      this.$prompt(this.$t("Amount To Claim"), "", {
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel"),
        inputValidator: (val) => {
          if (isNaN(val)) {
            return this.$t("rewardNumber")
          }

          if (+val <= 0) {
            return this.$t("rewardGt")
          }

          let leftReard = this.bn.minus(this.pool2.reward, val);
          if (leftReard < 0) {
            return this.$t("rewardNotEnough")
          }
        }
      }).then(({ value }) => {
        let data = Abi.encodeParams(["address", "uint256"], [this.pool2, "0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16)]);
        let functionSig = Utilss
          .sha3("WithdrawReward(address,uint256)")
          .substr(2, 8);

        const params = [
          {
            from: this.address,
            to: "0x0000000000000000000000000000000000000505",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: "0x0",
            data: "0x" + functionSig + data.substring(2),
          }
        ];

        ethereum
          .request({
            method: 'eth_sendTransaction',
            params,
          })
          .then((result) => {
              this.$alert("TX: " + result, "Claim Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log('tx error', error)
          });
      });
    },
    
    // Claim END
       
  },
};
</script>

<style scoped>

.el-button {
  border-radius: 24px;
}

button {
	border: none;
  min-width: 40px;
	font-family: Arial, Helvetica, sans-serif;
	text-transform: uppercase;
	cursor: pointer;
	color: #00BFFF;
	box-shadow: inset 0 0 0.1em #00BFFF, 0 0 0.1em #00BFFF;
	border: #00BFFF solid 1px;
	background-color: #24292f;
  border-radius: 4px;
	outline: none;
  align-items: center;
  margin: 10px auto;
  }

.pool-address {
  text-align: center;
  color:#fff;
  font-size: 14px;
  
}
.btns {
  display:inline-block;
  }
.pool-address-title {
  text-align: center;
  color:rgb(158, 158, 158);
  size: 12px;
  margin-bottom: 5px;
}
  
.info {
  display: inline-block;
  margin-left: 10px;
  margin-top: 50px;
}

.locked {
  text-align: center;
  margin: 20px;
  color:#a6ff33;
}

.lockked {
  align-items: center;
  justify-content: center;

}
.lockimg {
  width: 124px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;


}

.address-title {
  margin-top:10px;
  margin-bottom:50px; 
  font-size: 14px;
  font-weight: bold;
  margin-left: -15px;
  
}

.wallet-address {
  margin-bottom:5px;
  margin-left: 10px;
  margin-top:10px;
  text-align: center;

}

.inputs {
    background-color: #000;
    border-radius: 24px;
    width: 240px;
    margin: 20px auto;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    color: #a6ff33;
    padding: 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    text-align: center;
}

.neatStaking {
  text-align: left;
  margin: 10px;
}
.item {
 display: flex;  
 color:#00BFFF;
}


.wallet-balance-available {
  margin: 10px;
}

.balance-details {

  margin-top:10px;
}
 .dashboard{
    font-size:24px;
    font-weight: bold;
    color: #00bfFf;
    padding: 20px;
  

 }
.pools {
  margin: 10px;

}
.poolNo {
  color: #a6ff33;
}

.vPower {
  color:#fff;
  margin-top: 5px;
}

.vComm {
  color:#fff;
}

.ticker {
  color:#00BFFF;
  font-size: small;
  font-weight: bold;
  margin-left: 5px;
  display: flex;
}

  .rippleStake {
  font-size: 12px;
  min-width: 80px;
  height: 22px;
  border-radius: 24px;
  font-weight: bold;
  color: #00bfff;
	background-position: center;
	transition: background 0.4s;
  margin: 0 10px; 
  }

  .rippleStake:hover {
  color: #000;  
	text-transform: uppercase;
	background: #a6ff33 radial-gradient(circle, transparent 1%, red 1%) 
	center/15000%; 
  }

.rippleClaims {
  font-size: 12px;
  min-width: 80px;
  height: 22px;
  border-radius: 24px;
  font-weight: bold;
	background-position: center;
	transition: background 0.4s;
  margin: 0 10px;
  }

  .rippleClaims:hover {
  color: #000;  
	text-transform: uppercase;

	background: #00BFFF radial-gradient(circle, transparent 1%, #00BFFF 1%) 
	center/15000%; 
  }

  .ripple:active {
	background-color: #00BFFF;
	background-size: 100%;
	transition: background 0s;
  }

  .rippleUnstake {
  font-size: 12px;
  min-width: 80px;
  height: 22px;
  border-radius: 24px;
  font-weight: bold;
  color: #00bfff;
	background-position: center;
	transition: background 0.4s;
  margin: 10px; 
  }

  .rippleUnstake:hover {
  color: #fff;  
	text-transform: uppercase;
	background: red radial-gradient(circle, transparent 1%, red 1%) 
	center/15000%; 
  }

  /* .ripple:active {
	background-color: red;
	background-size: 100%;
	transition: background 0s;
  } */


 .not-connected {
    font-size:16px;
    font-weight:240;
    color: #00bfFf;
    margin: auto;
    color: #a6ff33;


 }


.btn {
  display: flex;
}
    #gtButton {
      width: 140px;
      height: 40px;
      color: #000000;
      border: 1px solid #000;
      border-radius: 24px;
      background-color: #00bfff;
      font-size: 16px;
      cursor: pointer;
      margin: 0 auto;
      margin-top: 50px;
    }
    #gtButton:hover {
      background-color: #a6ff33;
    }

        #selectBtn {
      width: 80px;
      height: 20px;
      color: #000000;
      border: 1px solid #000;
      border-radius: 24px;
      background-color: #00bfff;
      font-size: 12px;
      font-weight:bolder;
      cursor: pointer;
    }
    #selectBtn:hover {
      background-color: #a6ff33;
    }

</style>

<style>
.el-message-box__message p {
  margin: 0;
  line-height: 24px;
  word-break: break-all;
}
</style>

