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
              <div class="vAddy">{{ addy4 }} </div>
              <div class="vPower"><span style="color:grey">Pool Total Weight: </span>{{ vPower4 }} 
              <span style="color:#00bfff; font-size: small; font-weight: bold;"> NEAT</span></div>
              <div class="vComm"><span style="color:grey">Pool Fee: </span>{{ vComm }}</div>
            <div class="btn" v-show="address !== ''">
              <button id="selectBtn" @click="neatStake">{{ "SELECT" }}</button>
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
              <div class="vAddy">{{ addy5 }} </div>
              <div class="vPower"><span style="color:grey">Pool Total Weight: </span>{{ vPower5 }} 
              <span style="color:#00bfff; font-size: small; font-weight: bold;"> NEAT</span></div>
              <div class="vComm"><span style="color:grey">Pool Commission: </span>{{ vComm }}</div>
            
        <div class="btn" v-show="address !== ''">
          <button id="selectBtn" @click="neatStake">{{ "SELECT" }}</button>
        </div>
        
            </div>
          </div>



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
          
           <span style="color:lightgrey; font-size: 14px;">Available Balance:</span>  <span style="color:#a6ff33">{{ (+balance).toFixed(2)}}</span> <span style="font-weight: bold; font-size: 12px;">NEAT</span>
          </div>
          
            <div class="wallet-balance-available">
           <span style="color:lightgrey; font-size: 14px;">Delegated Coins:</span> <span style="color:#a6ff33">{{(+staking).toFixed(2)}}</span>   <span style="font-weight: bold; font-size: 12px;">NEAT</span>
           <button class="rippleUnreg" @click="unStake">unstake</button>
          </div>
            <div class="wallet-balance-available">
           <span style="color:lightgrey; font-size: 14px;">Unclaimed Rewards:</span> <span style="color:#a6ff33">{{(+rewards).toFixed(2)}}</span>  
           <router-link to="/claimReward"
                  ><button class="rippleClaim">claim</button></router-link
                >
          </div>
          </div>
            </div>
          <div class="item" v-show="address !== ''">
            <input class="inputs"
              v-model="amount"
              placeholder="Enter Amount To Stake"
            >
          </div>

 
        <div class="btn" v-show="address !== ''">
          <button id="gtButton" @click="neatStake">{{ "LET'S STAKE" }}</button>
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
const URL = 'https://rpc.neatio.net';
const RPC = require("neatioapi").rpc;
const Abi = require("neatioapi").abi;
const Web3 = require('web3');
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
      addy4: null,
      addy5: null,
      vPower4: null,
      vPower5: null,
      vComm: "15%",
      stakingPool: null,
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



    // STAKE
    async neatStake() {

      
      let send = RPC(URL);

      let contractMethod = neatioapi.abi.methodID("Delegate", [
        "bytes",
        "bytes",
        "uint8",
      ]);

      let data = neatioapi.abi.encodeParams(
        ["bytes", "bytes", "uint8"],
        [this.nodePublicKey, signature, this.commission]
      );


      const params = [
        {
          from: this.address,
          to: this.stakingPool,   
          gas: Utils.toHex(this.limit),
          gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
          value: Utils.toHex(Utils.fromNEAT(this.amount)),
          data: contractMethod + data.substring(2)
        },
      ];

      ethereum
        .request({
          method: 'eth_sendTransaction',
          params,
        })
        .then((result) => {
          console.log('hash', result);
          this.$alert(result, "Delegation was successful!", {
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
    },


    // UNSTAKE
    async unStake() {
        let contractMethod = neatioapi.abi.methodID("UnRegister", []);
              const params = [
        {
          from: this.address,
           to: this.stakingPool, 
          gas: Utils.toHex(this.limit),
          gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
          value: "0x0",
          data: contractMethod
        },
      ];

      ethereum
        .request({
          method: 'eth_sendTransaction',
          params,
        })
        .then((result) => {
          console.log('hash', result);
          this.$alert(result, "UnStake was successful!", {
            confirmButtonText: this.$t("confirm"),
            type: "success",
          });

          setTimeout(() => {
            this.getBalance();
          }, 4000)
        })
        .catch((error) => {
          console.log('tx error', error)
        });

    }   
       
  },
};
</script>

<style scoped>

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

.rippleClaim {
  font-size: 12px;
  min-width: 80px;
  height: 22px;
  border-radius: 24px;
  font-weight: bold;
	background-position: center;
	transition: background 0.4s;
  float: right;
  margin-top: -5px;
 
  }

  .rippleClaim:hover {
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

  .rippleUnreg {
  font-size: 12px;
  min-width: 80px;
  height: 22px;
  border-radius: 24px;
  font-weight: bold;
  color: #00bfff;
	background-position: center;
	transition: background 0.4s;
  float: right;
  margin-top: -5px;
 
  }

  .rippleUnreg:hover {
  color: #fff;  
	text-transform: uppercase;
	background: red radial-gradient(circle, transparent 1%, red 1%) 
	center/15000%; 
  }

  .ripple:active {
	background-color: red;
	background-size: 100%;
	transition: background 0s;
  }


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

