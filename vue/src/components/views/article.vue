<template>
  <!--  <div class="text">-->
  <!--    <h3>当前用户： {{name}}</h3>-->
  <!--    <a href="#" @click="quit">退出登录</a>-->
  <!--  </div>-->
  <body>
  <div id="bg" v-if="article!==[]">
    <div class="top">
      <back-vue></back-vue>
    </div>
    <div id="header">
      <nav-vue :name="name" @quit1="quit"></nav-vue>
    </div>
    <div id="ad">
      <img src="../../assets/logo1.png" width="1120" height="200" alt="">
    </div>
    <div id="main">
      <div id="sidebar1">
        <h3>
          每日精选
        </h3>
      </div>
      <div id="content">
        <div id="box1">
          <h1>{{article.title}}</h1>
          <br><br>
          <div id="con" v-html="article.text">

          </div>
        </div>
        <br class="clear"/>
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

  img.left {
    float: left;
    margin: 8px 20px 20px 0;
  }

  img.top {
    margin: 8px 0 20px 0;
  }

  p {
    margin-bottom: 1.75em;
  }

  ul {
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

  #box1 {
    margin: 0 0 24px 0;
    overflow: hidden;
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
  import { getCookie,delCookie } from '../../assets/js/cookie.js'
  import request from 'axios';
  import navVue from '@/components/views/nav'
  import backVue from '@/components/views/backtop'
  export default{
    data(){
      return{
        name: '',
        article:[]
      }
    },
    components:{
      navVue,
      backVue
    },
    mounted(){
      /*页面挂载获取保存的cookie值，渲染到页面上*/
      let uname = getCookie('username');
      this.name = uname
      /*如果cookie不存在，则跳转到登录页*/
      if(uname == ""){
        this.$router.push('/login')
      }
      let aid=this.$route.params.id;
      request.post("/api/goArticle/one",{
        aid:aid
      }).then(res=>{
        this.article = res.data;
      });
      // con.innerHTML=this.article.text;
    },
    methods:{
      getAllArticles:function(){
        this.$axios({
          method:'get',
          url:'/api/getData/all'
        }).then(res=>{
          this.article = res.data;
        })
      },
      quit(){
        /*删除cookie*/
        delCookie('username');
        this.$router.push('/login')
      },
      write(){
        this.$router.push({
          path: `/editer`
        })
      }
    }
  }

</script>
