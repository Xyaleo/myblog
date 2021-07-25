<template>
  <body>
  <div id="bg" >
    <div class="top">
      <back-vue></back-vue>
    </div>
    <div id="header">
      <nav-vue :name="name" page="a1"></nav-vue>
    </div>
    <div id="ad">
      <img src="../assets/logo1.png" width="1120" height="200" alt="">
    </div>
    <div id="main">
      <div id="sidebar1">
        <h3>
          每日精选
        </h3>
      </div>
      <div id="content">
        <home-vue></home-vue>
      </div>
      <br class="clear"/>
    </div>
  </div>
  </body>
</template>
<style scoped>

  * {
    margin: 0;
    padding: 0;
  }

  a {
    color: #000000;
  }

  body {
    font-size: 12pt;
    line-height: 2em;
    font-family: 幼圆;
    background: #f1f0f0;
  }

  br.clear {
    clear: both;
  }

  h2, h3, h4 {
    margin-bottom: 1.25em;
    font-family: 幼圆;
    color: #000000;
  }

  p {
    margin-bottom: 1.75em;
  }



  #bg {
    padding: 0 0 65px 0;
    position: relative;
    width: 1180px;
    margin: 0 auto 0 auto;

  }

  #ad {
    position: relative;
    padding: 32px;
    height: 200px;
    width: 1110px;
    margin: 0;
    background: #ffffff;
    border-style: solid;
    border-color: #f45b4d;
  }


  #box1 a {
    text-decoration: none;
    font-weight: bold;
  }

  #box1 p {
    border-bottom-style: inset;
  }

  #box1 a:hover {
    text-decoration: underline;
  }

  #header {
    position: relative;
    padding: 28px;
    height: 30px;
    width: 1124px;
    margin: 0 0 0 0;
    background: #f1f0f0;
  }


  #main {
    position: relative;
    padding: 0;
    margin: 0 0 0 0;
    width: 1180px;
    color: #000000;

  }

  #main ul li {
    padding: 8px 0 8px 0;
    border-top: dotted 1px #d9d9d9;
  }

  #content {
    width: 850px;
    padding: 28px;
    margin: 0 28px 0 274px;
    background: #ffffff;
    min-height: calc(100vh - 360px);
  }

  #sidebar1 {
    width: 194px;
    float: left;
    padding: 28px;
    background: #ffffff;
    text-shadow: 0 1px 0 #ffffff;
  }

  #sidebar1 ul {
    list-style: none;
  }

  #sidebar1 ul li {
    padding: 8px 0 8px 0;
    border-top: dotted 1px #c3bfb3;
  }

</style>
<script>
  /*引入公共方法*/
  import navVue from '@/components/nav'
  import backVue from '@/components/backtop'
  import homeVue from '@/components/homepage'

  export default{

    data(){
      return{
        name: ''
      }
    },
    components:{
      navVue,
      backVue,
      homeVue
    },
    mounted(){
      let uname = window.localStorage.getItem('name');
      if(!uname){
        this.$router.push('/login')
      }
      this.name = uname;
    },

    methods:{
    }
  }

</script>
