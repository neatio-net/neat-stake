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
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #00bfff;
  font-family: Helvetica;
}



.main {
  background-image:  url('assets/hero-bg-new.jpg');
  background-blend-mode: multiply;
  background-color: #2c3e50;
  background-size: cover;

}

.boxe {
  width: 50%;
  margin: 0 auto;

}
.statsD {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin: 12px;
}
.boxes {
display: grid;
grid-template-columns: 1fr 1fr;
width: 100%;
margin: 0 auto;

}
@media only screen and (max-width: 560px) {
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

}

.box0 {
  width: auto;
  max-width: 1100px;  
  height: fit-content;
  border-style: solid;
  border-color: #000;
  border-width: 2px;
  background: #1d2630;
  border-radius: 24px;
  margin: 10px 10px auto;  
  padding: 0 10px; 
  align-content: center; 
  justify-content: center;
  
}

.box1 {
  width: auto;
  max-width: 600px;
  min-height: 300px;
  padding-top: 10px;
  border-style: solid;
  border-color: #2c3e50;
  border-width: 1px;  
  background: #000;
  display:grid;
  border-radius: 24px;
  margin: 20px 10px 0px 10px;
}

.box2 {
  width: auto;
  max-width: 600px;
  min-height: 300px;
  padding-top: 10px;
  border-style: solid;
  border-color: #000;
  border-width: 2px;
  background: #1d2630;
  display:grid;
  border-radius: 24px;
  margin: 20px 10px 0px 10px;

}


.aw {
  color: rgba(102, 102, 102, 1);
  font-size: 34px;
}

.el-button {
  border-radius: 24px !important;
  font-weight: bold !important;
}
.el-message-box {
  border-radius: 24px !important;
  background-color: #000 !important;
  font-family: Arial, Helvetica, sans-serif !important;
}

.el-message-box__content {
  color: #00bfff !important;
  font-size: 1rem !important;
}

.el-message-box__message {
  text-align: center !important;
} 
.el-radio__input.is-checked + .el-radio__label {
  color: #00bfff !important;
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #00bfff !important;
  background: #00bfff !important;
}
.el-radio__inner:hover {
  border: 1px solid #00bfff !important;
}
.sk {
  color: rgba(102, 102, 102, 1);
  font-size: 16px;
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
  font-size: 14px;
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
  border-color: #00bfff !important;
}
.el-select .el-input__inner:focus {
  border-color: #00bfff !important;
}
.el-select-dropdown__item.selected {
  color: #00bfff !important;
}
.el-input.is-active .el-input__inner, .el-input__inner:focus {
  border-color: #00bfff !important;
}
.el-message-box__title{
 color: #A6FF33 !important;
 text-align: center !important;
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
  border-radius: 24px !important;
  background-color: #2c3e50 !important;
  color: #A6FF33 !important;
  text-align: center !important;
  
}
</style>
