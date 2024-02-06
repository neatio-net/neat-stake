<template>
  <div class="layout">
    <Navbar ref="Navbar"/>
    <router-view class="main"/>

  </div>
</template>

<script>
  import Navbar from '@/components/layouts/Navbar';

  export default {
    name: 'Layout',
    components: {
      Navbar,
  
    }
  }
</script>

<style lang="scss">
  .layout {
    background-color: #000;

    .main {
    min-height: 100vh;


    }

    @media only screen {
    .main {
    margin: 0px auto; 
    }

    .nav-container {
      width: auto;
      margin-top: -5px;
    }
    }



  
      .box0 {
  margin: 36px 10px 10px 10px;

    }






  }
</style>
