<template>
  <div class="nav-container">
    <div class="nav-panel">
    
        <router-link
          to="/"
                  >
          <img
          src="../../assets/logo.png"
          alt="Neatio Wallet"
          class="nav-logo"
        /></router-link> 

   

    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import MetaMaskOnboarding from '@metamask/onboarding';

export default {
  name: "NavPanel",
  data() {
    return {
      curNav: "Home",
      searchContent: "",
      otherSearch: "",
      currentChainId: '',
      chainId: '0x3e9',
      testChainId: '0x3ea',
      address: '',
    };
  },
  created() {
    this.getLocaction();
  },
  mounted() {
    this.initialize();
  },
  methods: {
    hh() {
      console.log(this);
    },
    strTrim(str) {
      str = str + "";
      return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    highlight(index) {
      this.curNav = index;
    },

    getLocaction() {
      this.isTestNetwork = window.location.hostname.substr(0, 4) === "test" || window.location.hostname.substr(0, 4) === "loca";
    },

    async initialize () {
      this.currentChainId = await ethereum.request({ method: 'eth_chainId' });

      ethereum.on('chainChanged', (_chainId) => {
        this.connectAccount(_chainId)
      });

      ethereum.on('accountsChanged', (_accounts) => {
        this.requestAccount()
      });

      this.requestAccount();
    },
    async requestAccount () {
      this.currentChainId = await ethereum.request({ method: 'eth_chainId' });
      try {
        if (this.currentChainId !== this.chainId) {
          this.connectAccount();
        } else {
          
          this.address = `Neatio`
        }

      } catch (e) {
        console.log('request accounts error:', e);
      }
    },
    async connectAccount () {
      try {
        if (this.currentChainId !== this.chainId) {
          this.address = this.$t('wrongNetwork');
        }else {
          const accounts = await ethereum.request({ method: 'eth_accounts' });
          this.address = `${accounts[0].substr(0, 6)}...${accounts[0].slice(-4)}`;
        }
      } catch (e) {
        console.log('request accounts error:', e);
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
  },
};
</script>

<style lang="scss">



.nav-logo {
  width: auto;
  height: 3.8rem;
  margin: 0.2rem 0;
}


.nav-container {
  box-shadow: 0px 4px 8px 0px #000000;
  background-color: #181616;
  margin: 0 auto;

  @media only screen and (max-width: 560px) {
  .nav-panel {
    max-width: 320px;
  }

}


  .nav-panel {
    text-align: left;
    box-sizing: border-box;
    width: 86em;
    margin: 0 auto;
    height: 4.2rem;
    .logo-neatio {
      width: 4rem;
      height: auto;
    }
    .ii {
      vertical-align: middle;
    }
    router-link-exact-active router-link-active
    .help:hover {
      color: #1AA7EC;
      padding-bottom: 2px;
      border-bottom: 2px solid #1AA7EC;
    }
    .conColor1 {
      color:red;
    }
        .conColor2 {
      color: #000;
      font-family: Anita, Arial, Helvetica, sans-serif;
    }
    .iv {
      height: 52px;
      line-height: 52px;
      float: right;
      & input {
        width: 280px;
        box-sizing: border-box;
        height: 37px;
        padding-left: 10px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border: 1px solid #ccc;
        border-right: none !important;
        outline: none;
        vertical-align: middle;
      }
      & span {
        display: inline-block;
        width: 53px;
        height: 37px;
        line-height: 3;
        background-color: #3a3cda;
        text-align: center;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
        vertical-align: middle;
      }
      .search-icon {
        background-size: cover;
        display: inline-block;
        width: 24px;
        height: 22px;
      }
    }

    .netBtn {
        float: right;
        padding: 5px;
        margin-top: 10px;
    }

    #connectButton {
      width: 6rem;
      height: 2.6rem;
      margin-top: 1.2rem;
      text-transform: uppercase;
      padding: 10px;  
      border-radius: 10px;
      background: linear-gradient(to right,#6519c9,#2472fc);
      font-size: 16px;
      cursor: pointer;
      text-align: center;

      
    }

    #connectButton:hover {
      color: #000000;
  text-transform: uppercase;
  background: #2472fc;
    }
  }
}
.common-inline-block {
  display: inline-block;  
  cursor: pointer; 


}




</style>
