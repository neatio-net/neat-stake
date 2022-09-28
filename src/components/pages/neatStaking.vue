<template>
<div class="dashboard" >
    <div class="boxe">
           <div class="box0">
    
          <div class="statsD">
              <div class="stats1"> 
                  <div class="itemsD">Block Height</div>
                  <div class="valueD"> {{ (+height).toLocaleString() }}</div>
              </div>
              
              <div class="stats1"> 
                  <div class="itemsD">Block Time</div>
                  <div class="valueD">1.7 sec</div>
              </div>
                  <div class="stats1"> 
              <div class="itemsD">Staking APY</div>
                  <div class="valueD"> {{ (+stakingAPY).toFixed(2) + ' %' }}</div>
              </div>

              <div class="stats1"> 
                  <div class="itemsD">Total Locked</div>
                  <div class="valueD">{{ (+totalStake).toLocaleString() }}</div>
              </div>

             <div class="stats1"> 
                  <div class="itemsD">Circ. Supply</div>
                  <div class="valueD">{{"3,829,969"}}</div>
              </div>

  
              <div class="stats1"> 
                  <div class="itemsD">Max Supply</div>
                  <div class="valueD">50,000,000</div>
              </div>
          </div>
           </div>
           <div class="boxes">


          












            <div class="box1" >

<!-- Pool1 --> 
 <div class="pools">
           <div class="vAddy11" id="pool1"><span style="color:#496785;">1.</span>  {{ "NEATIO - ASIA -" }} 
             <span style="color:#496785">Pool Fee:</span> <span style="font-family:Helvetica; font-weight:normal; font-size:14px;">{{ vComm }}</span>
             <span style="color:#496785">Staking Power:</span>  <span style="font-family:Helvetica; font-weight:normal; font-size:14px;">{{ v3Pwr }}</span>
             <button class="rippleSelect" v-show="staking == 0" @click="select1">SELECT1</button>
             <span v-show="staking != 0" style="color:#496785; font-size: 14px; font-weight:normal; font-family: Pirulen, Helvetica;"> NEAT</span>
           </div>

       <div class="sep"></div>
     </div>


 <!-- Pool2 -->
 <div class="pools">
   
     <div class="vAddy1" id="pool2"><span style="color:#496785;">2.</span>  {{ "RO NEAT POOL" }} 
       <span style="color:#496785">Pool Fee:</span> <span style="font-family:Helvetica; font-weight:normal; font-size:14px;">{{ vComm }}</span>
       <span style="color:#496785">Staking Power:</span>  <span style="font-family:Helvetica; font-weight:normal; font-size:14px;">{{ v4Pwr}}</span>
       <button class="rippleSelect" v-show="staking == 0" @click="select2">SELECT2</button>
       <span v-show="staking != 0" style="color:#496785; font-size: 14px; font-weight:normal; font-family: Pirulen, Helvetica;"> NEAT</span>
     </div>
 <div class="sep"></div>
</div>

<!-- POOL 3 -->     
<div class="pools">

   <div class="vAddy1" id="pool3"><span style="color:#496785;">3.</span>  {{ "BIG BOW POOL" }} 
     <span style="color:#496785">Pool Fee:</span> <span style="font-family:Helvetica; font-weight:normal; font-size:14px;">{{ vComm }}</span>
     <span style="color:#496785">Staking Power:</span>  <span style="font-family:Helvetica; font-weight:normal; font-size:14px;">{{ v5Pwr}}</span>
     <button class="rippleSelect" v-show="staking == 0" @click="select3">SELECT3</button>
     <span v-show="staking != 0" style="color:#496785; font-size: 14px; font-weight:normal; font-family: Pirulen, Helvetica;"> NEAT</span>
   </div>
   
 <div class="sep"></div>
</div>
<!-- 3 END -->


<!-- POOL 4 -->     
<div class="pools">

<div class="vAddy1" id="pool4"><span style="color:#496785;">4.</span>  {{ "SILVIU25 POOL" }} 
  <span style="color:#496785">Pool Fee:</span> <span style="font-family:Helvetica; font-weight:normal; font-size:14px;">{{ vComm }}</span>
  <span style="color:#496785">Staking Power:</span>  <span style="font-family:Helvetica; font-weight:normal; font-size:14px;">{{ v6Pwr }}</span>
  <button class="rippleSelect" v-show="staking == 0" @click="select4">SELECT4</button>
  <span v-show="staking != 0" style="color:#496785; font-size: 14px; font-weight:normal; font-family: Pirulen, Helvetica;"> NEAT</span>
</div>

<div class="sep"></div>
</div>
<!-- 4 END -->

<!-- POOL 5 -->     
<div class="pools">

<div class="vAddy2" id="pool5"><span style="color:#496785;">5.</span>  {{ "KINGNODE - EU" }} 
  <span style="color:#496785">Pool Fee:</span> <span style="font-family:Helvetica; font-weight:normal; font-size:14px;">{{ vComm }}</span>
  <span style="color:#496785">Staking Power:</span>  <span style="font-family:Helvetica; font-weight:normal; font-size:14px;">{{ v7Pwr}}</span>
  <button class="rippleSelect" v-show="staking == 0" @click="select5">SELECT5</button>
  <span v-show="staking != 0" style="color:#496785; font-size: 14px; font-weight:normal; font-family: Pirulen, Helvetica;"> NEAT</span>
</div>

</div>
<!-- 5 END -->








</div>
            <div class="box2" >
               <div class="lockked" v-show="address === ''">
                  <img
                    src="../../assets/lock.png"
                    alt="Lock"
                    class="lockimg"
                  />
      </div>


    

        <div class="locked" v-show="address === ''">Please unlock your wallet! </div>
        <div class="neatStaking">
          <!-- <span style="color:lightgrey" >Connected Wallet</span>  -->
                  <div class="balance-details" v-show="address != ''">
                   <div class="wallet-balance" v-show="address !== ''">

                    <div  class="addry-w"> {{addry}}</div>
          <div class="walBalT">{{ (+balance).toFixed(6)}}<span style="color:#496785; font-size: 22px; font-weight:normal; font-family: Pirulen, Helvetica;"> NEAT</span> </div>
          




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
                    <div class="spinr" ><orbit-spinner :animation-duration="1200" :size="55" color="#00ffff" alt="stake"/></div>
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

<!-- 
          <div class="boxess" >
                 <div class="spinnerr">

                    <div class="spinr" ><orbit-spinner :animation-duration="1200" :size="55" color="#00ffff" alt="stake" class="walimgs"/></div>

                  
                 
                
                 
              
                </div>    

                  <div class="staking-name">
                    <div class="wallet-balance-available2">

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
          
                </div>

                <div class="staking-values">

<div class="stake-detail2">
  <div>  <span style="color:#496785; font-family: Helvetica;">{{(+staking).toFixed(6)}}</span></div> 

  <div>  <span style="color:#496785; font-family: Helvetica;">{{(+rewards).toFixed(6)}}</span>  </div> 
</div>

</div>

         
                         
            </div> -->
          <div class="noSel" v-show="selectedPool == null && staking < 1 && rewards < 1"> select a pool if you wish to stake your coins </div>

                  <div><span style="font-size: 16px; font-weight:normal; font-family: Pirulen, Helvetica;">{{stakedTo}}</span> </div>
          <div class="noSel1" v-show="selectedPool != null"> </div>

          <div class="deleg" v-show="selectedPool != null "> Selected pool <span style="font-size: 14px; color:#00ffff; font-weight:normal; font-family: Pirulen, Helvetica;">{{selectedPool}}</span> </div>
          <div class="deleg" v-show="staking > 0 "> Staking on <span style="font-size: 14px; color:#00ffff; font-weight:normal; font-family: Pirulen, Helvetica;">{{stakedTo}}</span> </div>
          <div class="deleg" v-show="stakedTo > 0 "> Rewards on <span style="font-size: 14px; color:#00ffff; font-weight:normal; font-family: Pirulen, Helvetica;">{{stakedTo}}</span> </div>
          
          <!-- <div><span style="font-size: 16px; font-weight:normal; font-family: Pirulen, Helvetica;">{{selectedPool}}</span> </div> -->


          <div class="btnss" v-show="staking != null && selectedPool == 'NEATIO - ASIA -' || staking != null && stakedTo == 'NEATIO - ASIA -'">
                    <div class="buttns">
                      <button class="rippleStake" @click="neatStake1">stake1</button>                
                      <button class="rippleClaims" @click="claimRwd1">claim1</button>
                      <button class="rippleClaims" @click="unStake1">unstake1</button>
                    </div>
                  </div>

                  <div class="btnss" v-show="staking != null && selectedPool == 'RO NEAT POOL' || staking != null && stakedTo == 'RO NEAT POOL'">
                    <div class="buttns">
                      <button class="rippleStake" @click="neatStake2">stake2</button>                
                      <button class="rippleClaims" @click="claimRwd2">claim2</button>
                      <button class="rippleClaims" @click="unStake2">unstake2</button>
                    </div>
                  </div>

                  <div class="btnss" v-show="staking != null && selectedPool == 'BIG BOW POOL' || staking != null && stakedTo == 'BIG BOW POOL'">
                    <div class="buttns">
                      <button class="rippleStake" @click="neatStake3">stake3</button>                
                      <button class="rippleClaims" @click="claimRwd3">claim3</button>
                      <button class="rippleClaims" @click="unStake3">unstake3</button>
                    </div>
                  </div>

                  <div class="btnss" v-show="staking != null && selectedPool == 'SILVIU25 POOL' || staking != null && stakedTo == 'SILVIU25 POOL'">
                    <div class="buttns">
                      <button class="rippleStake" @click="neatStake4">stake4</button>                
                      <button class="rippleClaims" @click="claimRwd4">claim4</button>
                      <button class="rippleClaims" @click="unStake4">unstake4</button>
                    </div>
                  </div>

                  <div class="btnss" v-show="staking != null && selectedPool == 'KINGNODE - EU' || staking != null && stakedTo == 'KINGNODE - EU'">
                    <div class="buttns">
                      <button class="rippleStake" @click="neatStake5">stake5</button>                
                      <button class="rippleClaims" @click="claimRwd5">claim5</button>
                      <button class="rippleClaims" @click="unStake5">unstake5</button>
                    </div>
                  </div>







          </div>
            </div>        
      </div>








    </div>
    <div v-if="step == 1">    
      <Access @unlock="unlock"></Access>
    </div>
    <div v-if="step == 2" style="padding-bottom: 90px">
    

   
    </div>
    </div>
  </div>

    
</template>

<script>
import { OrbitSpinner } from 'epic-spinners';
import { LoopingRhombusesSpinner } from 'epic-spinners';
import { Socket } from 'vue-loading-spinner';
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
      address: '',
      privateKey: "",
      staking: null,
      rewards: null,
      amount:"",
      limit: "21000",
      addry: null,
      price: "",
      addy3: null,
      addy4: null,
      addy5: null,
      addy6: null,
      addy7: null,
      vPower3: null,
      v3Pwr: "",
      vPower4: null,
      v4Pwr: "",
      vPower5: null,
      v5Pwr: "",
      vPower6: null,
      v6Pwr: "",
      vPower7: null,
      v7Pwr: "",
      vComm: "15%",
      pool1: null,
      pool2: null,
      pool3: null,
      pool4: null,
      pool5: null,
      height: null,
      totalStake: '',
      circulating: '',
      totalSupply: '',
      stakingAPY:'',
      stakedTo: null,
      selectedPool: null,

    };
  },
  components: {
    Access,
    EyeInput,
    OrbitSpinner,
    LoopingRhombusesSpinner,
    Socket,
  },

  async mounted() {
    this.connectAccount();
    this.getValidators();
    this.initialize();
    this.getHeight();
  },


  methods: {
    initialize () {
      ethereum.on("chainChanged", (_chainId) => {        
        this.getGasPrice();
        this.getBalance ();
        this.getBalanceDetail();
      });

      ethereum.on("accountsChanged", (_accounts) => {
        this.address = _accounts[0];
        this.getBalance ();
        this.getBalanceDetail();
        
      })
    },


    async connectAccount () {


      
      try {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        this.address = accounts[0];
        this.addry = `${accounts[0].substr(0, 6)} . . . ${accounts[0].slice(-6)}`;
        this.getBalance ()
        this.getBalanceDetail();
        this.getGasPrice();
        this.getValidators();
        this.getHeight();
       

        
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
          // console.log("balance", result);
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

          this.delegatedTo = response.data.result;

          // console.log(this.delegatedTo);
        

          if (this.delegatedTo.hasOwnProperty("0xaa38dfb4c9dd61e653bc865ff429f05b2db44977")){
          this.stakedTo = 'NEATIO - ASIA -';     
          }

          if (this.delegatedTo.hasOwnProperty("0xb0745e35006a0fbb88435a15eb8c342a4dc3a02b")){
          this.stakedTo = 'RO NEAT POOL';     
          }

          if (this.delegatedTo.hasOwnProperty("0x6f755798dc3fb59d3236b0814d4038a094c8db6e")){
          this.stakedTo = 'BIG BOW POOL';      
          }

          if (this.delegatedTo.hasOwnProperty("0xc8b3706f2db85fd5a1590b2a1329ab5af70ef905")){
          this.stakedTo = 'SILVIU25 POOL';      
          }

          if (this.delegatedTo.hasOwnProperty("0xe98ef881833ff63bca2ea3e92636e7cb7c19d283")){
          this.stakedTo = 'KINGNODE - EU';      
          }


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
          this.price = Utils.toNEAT(result);
          }
        )
        .catch((error) => {
            console.log('error', error)
          }

        )
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
      .then((response) => this.height = Nat.toString(response.data.result));


    
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
    this.vPower3 = Number(vPower3);
    const v3Pwr = this.vPower3.toLocaleString("en-US");
    this.v3Pwr = v3Pwr;

  
    const v4 = Object(validators)[3];
    const v4Addy = v4.address;
    this.addy4 = v4Addy;
    const vPower4 = Utils.toNEAT(Nat.toString(v4.votingPower));
    this.vPower4 = Number(vPower4);
    const v4Pwr = this.vPower4.toLocaleString("en-US");
    this.v4Pwr = v4Pwr;
  
    const v5 = Object(validators)[4];
    const v5Addy = v5.address;
    this.addy5 = v5Addy;
    const vPower5 = Utils.toNEAT(Nat.toString(v5.votingPower));
    this.vPower5 = Number(vPower5);
    const v5Pwr = this.vPower5.toLocaleString("en-US");
    this.v5Pwr = v5Pwr;

    const v6 = Object(validators)[5];
    const v6Addy = v6.address;
    this.addy6 = v6Addy;
    const vPower6 = Utils.toNEAT(Nat.toString(v6.votingPower));
    this.vPower6 = Number(vPower6);
    const v6Pwr = this.vPower6.toLocaleString("en-US");
    this.v6Pwr = v6Pwr;
 
    const v7 = Object(validators)[6];
    const v7Addy = v7.address;
    this.addy7 = v7Addy;
    const vPower7 = Utils.toNEAT(Nat.toString(v7.votingPower));
    this.vPower7 = Number(vPower7);
    const v7Pwr = this.vPower7.toLocaleString("en-US");
    this.v7Pwr = v7Pwr;
 

    const totalStakeHex = parseInt(v2.votingPower) + parseInt(v3.votingPower) + parseInt(v4.votingPower) + parseInt(v5.votingPower) + parseInt(v6.votingPower) + parseInt(v7.votingPower);
    const totalStakeNEAT = totalStakeHex / 1e18;
    this.totalStake = totalStakeNEAT.toFixed(0);

     this.stakingAPY =  (2964759 / parseInt(this.totalStake)) * 100 - 15;

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

     
    
    neatStake11() {

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

        const params = [
          {
            from: this.address,
            to: "0xbC5282967825FE36F7956bd4247B9d4540051EFC",
            gas: Utils.toHex(this.limit),
            gasPrice: Utils.toHex(Utils.fromNEAT(this.price)),
            value: Utils.toHex(Utils.fromNEAT(value)),
          
          }
        ];

        ethereum
          .request({
            method: 'eth_sendTransaction',
            params,
          })
          .then((result) => {
              this.$alert("TX ID: " + result, "You succesfully staked your coins!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });

          })
          .catch((error) => {
            console.log('tx error', error)
          });
      });
    },

    select1() {
      document.getElementById("pool1").click();
      this.selectedPool = 'NEATIO - ASIA -';
    },

    select2() {
      document.getElementById("pool2").click();
      this.selectedPool = 'RO NEAT POOL';
    },

    select3() {
      document.getElementById("pool3").click();
      this.selectedPool = 'BIG BOW POOL';
    },

    select4() {
      document.getElementById("pool4").click();
      this.selectedPool = 'SILVIU25 POOL';
    },

    select5() {
      document.getElementById("pool5").click();
      this.selectedPool = 'KINGNODE - EU';
    },


    neatStake1() {
      document.getElementById("pool1").click();
      const pool1 = this.addy3;
      this.pool1 = pool1;
      //console.log(pool1);
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

            this.$alert("TX ID: " + result, "Staking Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });

          })
          .catch((error) => {
            console.log('tx error', error)
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
            this.$alert("TX ID: " + result, "You succesfully unstaked your coins!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });


          })
          .catch((error) => {
            console.log('tx error', error)
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
            this.$alert("TX ID: " + result, "You succesfully claimed your rewards!", {
              confirmButtonText: this.$t("confirm"),
              type: "success",
            });


          })
          .catch((error) => {
            console.log('tx error', error)
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
          }
        ];

        ethereum
          .request({
            method: 'eth_sendTransaction',
            params,
          })
          .then((result) => {

            this.$alert("TX ID: " + result, "Staking Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });

          })
          .catch((error) => {
            console.log('tx error', error)
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
          
            this.$alert("TX ID: " + result, "UnStake Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log('tx error', error)
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
          }
        ];

        ethereum
          .request({
            method: 'eth_sendTransaction',
            params,
          })
          .then((result) => {

            this.$alert("TX ID: " + result, "Staking Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });

          })
          .catch((error) => {
            console.log('tx error', error)
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
        let data = Abi.encodeParams(["address", "uint256"], [this.pool3,"0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16)]);
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
            this.$alert("TX ID: " + result, "You succesfully unstaked your coins!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log('tx error', error)
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
            return this.$t("rewardNumber")
          }

          if (+val <= 0) {
            return this.$t("rewardGt")
          }

          let leftReard = this.bn.minus(this.pool3.reward, val);
          if (leftReard < 0) {
            return this.$t("rewardNotEnough")
          }
        }
      }).then(({ value }) => {
        let data = Abi.encodeParams(["address", "uint256"], [this.pool3, "0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16)]);
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
            this.$alert("TX ID: " + result, "You succesfully claimed your rewards!", {
              confirmButtonText: this.$t("confirm"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log('tx error', error)
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
          }
        ];

        ethereum
          .request({
            method: 'eth_sendTransaction',
            params,
          })
          .then((result) => {

            this.$alert("TX ID: " + result, "Staking Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });

          })
          .catch((error) => {
            console.log('tx error', error)
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
        let data = Abi.encodeParams(["address", "uint256"], [this.pool4,"0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16)]);
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
            this.$alert("TX ID: " + result, "You succesfully unstaked your coins!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log('tx error', error)
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
            return this.$t("rewardNumber")
          }

          if (+val <= 0) {
            return this.$t("rewardGt")
          }

          let leftReard = this.bn.minus(this.pool4.reward, val);
          if (leftReard < 0) {
            return this.$t("rewardNotEnough")
          }
        }
      }).then(({ value }) => {
        let data = Abi.encodeParams(["address", "uint256"], [this.pool4, "0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16)]);
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
            this.$alert("TX ID: " + result, "You succesfully claimed your rewards!", {
              confirmButtonText: this.$t("confirm"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log('tx error', error)
          });
      });
    },

    // Pool 5
      neatStake5() {
      document.getElementById("pool5").click();
      const pool5 = this.addy7;
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
          }
        ];

        ethereum
          .request({
            method: 'eth_sendTransaction',
            params,
          })
          .then((result) => {

            this.$alert("TX ID: " + result, "Staking Was Succesful!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });

          })
          .catch((error) => {
            console.log('tx error', error)
          });
      });
    },


    unStake5() {
      document.getElementById("pool5").click();
      const pool5 = this.addy7;
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
          let surplusVotes = this.bn.minus(
            this.bn.add(this.pool5.proxiedBalance, this.pool5.voted),
            this.bn.add(this.pool5.pendingRefundBalance, this.pool5.val)
          );
          if (surplusVotes < 0) {
            return this.$t("surplusVotes");
          }
        },
      }).then(({ value }) => {
        let data = Abi.encodeParams(["address", "uint256"], [this.pool5,"0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16)]);
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
            this.$alert("TX ID: " + result, "You succesfully unstaked your coins!", {
              confirmButtonText: this.$t("CLOSE"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log('tx error', error)
          });

      });
    },
      
      claimRwd5() {
      document.getElementById("pool5").click();
      const pool5 = this.addy7;
      this.pool5 = pool5;
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

          let leftReard = this.bn.minus(this.pool5.reward, val);
          if (leftReard < 0) {
            return this.$t("rewardNotEnough")
          }
        }
      }).then(({ value }) => {
        let data = Abi.encodeParams(["address", "uint256"], [this.pool5, "0x" + new BigNumber(value).multipliedBy(Math.pow(10, 18)).toString(16)]);
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
            this.$alert("TX ID: " + result, "You succesfully claimed your rewards!", {
              confirmButtonText: this.$t("confirm"),
              type: "success",
            });
          })
          .catch((error) => {
            console.log('tx error', error)
          });
      });
    },

    // Pool 5 END

    
       
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

.sep{
  padding-bottom: 24px;
  border-bottom: 1px solid #00ffffa4;
}

.sep1{
  padding-bottom: 20px;
  border-bottom: transparent;
}


  
.buttns{
 margin: 20px;
 display: inline-block;
}



.locked {
  text-align: center;
  margin: 20px;
  color:#00ffff;
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
  color: #00FFFF;
  font-size: 16px;
  font-weight:lighter;
  margin-bottom: 5px;
}

.statsD {
  margin:20px;
}


.vAddy {
  font-size: 12px;
  color:#00ffff;
  text-align: left;
  margin-left: 20px;
  display: inline-block;
  min-width: 100px;

}

.vAddy1 {
  font-size: 12px;
  font-weight: 100;
  font-family: Pirulen, Arial, Helvetica, sans-serif;
  color:#00ffff;
  text-align: center;
  display: inline-block;
  min-width: 140px;

}

.vAddy2 {
  font-size: 12px;
  font-weight: 100;
  font-family: Pirulen, Arial, Helvetica, sans-serif;
  color:#00ffff;
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
  color:#00ffff;
  text-align: center;
  display: inline-block;
  min-width: 140px;
}
  
.walBalT {
  color:#00ffff;
  margin: 10px;
  font-size:28px;
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
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    text-align: center;
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

.balimg {  
  width: 24px;
  height: auto;
  margin-right: 16px;
  margin-bottom: -5px;
}


.stake-detail1 {
  margin: 10px;

}

.stake-detail2 {
  margin: 10px;

}



.spinr {

  margin: 0 auto;
  display: inline-block
  
}
.staking-name {
  text-align: right;
}

.staking-values{
  text-align: left;
}

.balance-details {
  text-align: center;
  margin-top:10px;
}
 .dashboard{
    font-weight: bold;
    color: #00ffff;
    padding-top: 10px;
 }
.pools {
  margin: 10px auto;
}

.btns{
  margin-bottom: -40px;
}

.btnss {
  margin-bottom: -10px;
}

.btns4{
  margin-bottom: -20px;
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
    /* padding: 60px 20px; */
    margin: 10px 0px;
    font-size: 16px;
    font-weight: 100;
    color: #496785;
    font-family: Pirulen, Helvetica, sans-serif;
  }

  .addry-w {
    text-align: center;
    /* padding: 60px 20px; */
    /* margin: 10px 0px; */
    font-size: 16px;
    font-weight: 100;
    color: #496785;
    font-family: Pirulen, Helvetica, sans-serif;
  }

.spinnerr {
  margin: 20px;
}

  .noSel1 {   
    padding: 10px 10px;
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
	background: rgb(255, 255, 255) radial-gradient(circle, transparent 1%, rgb(255, 255, 255) 1%) 
	center/15000%; 
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
  display:grid;
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
  color: #00FFFF;
  font-size: 12px;
  font-weight:lighter;
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
	background: rgb(255, 255, 255) radial-gradient(circle, transparent 1%, rgb(255, 255, 255) 1%) 
	center/15000%; 
  }
  .example-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#myGrid {
  flex: 1 1 0px;
  width: 100%;
}

.example-header {
  font-family: Pirulen, Tahoma, sans-serif;
  font-size: 13px;
  margin-bottom: 5px;
}

.socket {
  color: #00FFFF;
}




.box2 {
      margin: 60px 10px;

    }



}




</style>


