<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>

@font-face {
  font-family: "Anita";
  src: local("Anita"),
   url(./fonts/pirulen.ttf) format("truetype");

} 

@font-face {
  font-family: "Alien";
  src: local("Alien"),
   url(./fonts/alien.ttf) format("truetype");

} 

@font-face {
  font-family: "Anita";
  src: local("Anita"),
   url(./fonts/anita.ttf) format("truetype");

} 

@font-face {
  font-family: "Computer";
  src: local("Computer"),
   url(./fonts/cmunbbx.ttf) format("truetype");

} 

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
 
  font-family: Helvetica;
}



.main {
  /* background-image:  url('assets/hero-back.png'); */
  background: linear-gradient(to left,#243B55, #141E30);
  background-blend-mode: multiply;
  background-size: cover;

}

.boxe {
  width: 1280px;
  margin: 0 auto;

}
.statsD {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding:20px;
}
.boxes {
display: grid;
grid-template-columns: 1.5fr 1fr;

}
@media only screen and (max-width: 560px) {

  .box1 {
  width: auto;

  min-height: 300px;
  padding-top: 10px;
  border-width: 1px;  
  background: transparent;
  display:grid;
  border-radius: 10px;
  margin: 50px 30px 0px 10px;
  box-sizing: 1px;
  border: none;
  border: 1px solid #1AA7ECa4;
  border-radius: 10px;
  box-shadow: 0 0 40px #5983FC;

}

  .vAddy1 {
   font-size: 19px;
  /* font-weight: 100; */
  font-family: Anita, Arial, Helvetica, sans-serif;
  color:#1AA7EC;
  text-align: left;

}



.vAddy {
   font-size: 19px;
  color:#1AA7EC;
  text-align: left;

}





.boxes {

display:inline-table;
}

.wallet-balance-available2 {
  margin-top: 10px;
  text-align: center;
  font-size: small;
}

.boxe {
  width: 100vw;
  margin: 0 auto;
}

.statsD {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 12px 24px;
}

.dashboard {
   width: 100%;
  margin: 0 auto;
  }
.el-message-box {
  width: 268px;
}

.box0 {
  margin: 20px auto;
}






}

.box0 {
  width: auto;
  max-width: 1440px;  
  height: fit-content;
  border-width: 2px;
  background: transparent;
  border-radius: 4px;
  margin: 20px 10px 20px 10px;  
  padding: 0 10px; 
  align-content: center; 
  justify-content: center;
  box-sizing: 1px;
  border-radius: 10px;
  box-sizing: 1px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 20px #000;

  
}



.box1 {
  width: auto;
  min-height: 300px;
  padding-top: 10px;
  border-width: 1px;  
  background: transparent;
  display:grid;
  border-radius: 10px;
  margin: 20px 10px 0px 10px;
  box-sizing: 1px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 10px 40px #000;

}

.box2 {
  width: auto;
  max-width: 600px;
  min-height: 300px;
  padding-top: 10px;
  border-width: 1px;
  background: transparent;
  display:grid;
  border-radius: 24px;
  margin: 20px 10px 0px 30px;
  box-sizing: 4px;
  border-radius: 10px;
  box-shadow: 0 10px 40px #000;
}


.aw {
  color: rgba(102, 102, 102, 1);
  font-size: 34px;
}

.el-button {
  border-radius: 10px !important;
  font-weight: bold !important;
  font-family: Anita, Helvetica !important;
}
.el-message-box {
  border-radius: 10px !important;
  background-color: #000 !important;
  font-family: Arial, Helvetica, sans-serif !important;
}

.el-message-box__content {
  color: #1AA7EC !important;
  font-size: 1rem !important;
}

.el-message-box__message {
  text-align: center !important;
} 
.el-radio__input.is-checked + .el-radio__label {
  color: #1AA7EC !important;
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #1AA7EC !important;
  background: #1AA7EC !important;
}
.el-radio__inner:hover {
  border: 1px solid #1AA7EC !important;
}
.sk {
  color: rgba(102, 102, 102, 1);
  font-size: 21px;
  font-weight: bold;
  margin-top: 30px;
}
.skbtn {
  width: 416px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid #ddd;
  line-height: 50px;
  cursor: pointer;
  color: #ddd;
  text-align: center;
  font-size: 18px;
}



.bg-box {
  overflow: hidden;
  height: 188px;
  width: 100%;
}
.el-input__inner {
  background-color: #000 !important;
}

.el-select .el-input.is-focus .el-input__inner {
  border-color: #1AA7EC !important;
}
.el-select .el-input__inner:focus {
  border-color: #1AA7EC !important;
}
.el-select-dropdown__item.selected {
  color: #1AA7EC !important;
}
.el-input.is-active .el-input__inner, .el-input__inner:focus {
  border-color: #1AA7EC !important;
}
.el-message-box__title{
 color: #1AA7EC !important;
 text-align: center !important;
 font-family: Anita, Helvetica !important;
}

.el-message-box__container {
  font-family: Anita, Helvetica !important;
}

.el-message-box__input {
  text-align: center !important;
}

.el-message-box__btns {
 text-align: center !important;
}
.el-input {
 width: 240px !important;
 margin: 0 auto !important;
}
.el-input__inner {
  border-radius: 10px !important;
  background-color: #2c3e50 !important;
  color: #1AA7EC !important;
  text-align: center !important;
  
}


</style>
