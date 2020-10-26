<template>
  <!--  <div class="text">-->
  <!--    <h3>当前用户： {{name}}</h3>-->
  <!--    <a href="#" @click="quit">退出登录</a>-->
  <!--  </div>-->
  <body>
  <div id="bg" v-if="article!==[]">
    <div class="top">
      <img class="back-to-top"
           src="../../assets/top.png">
    </div>
    <div id="header">
      <div id="nav1" >
        <div id="guide">
        <div id="tit">
          🍊 博客
        </div>
        <ul id="gui">
          <li class="active">
            <a href="#/home">博客</a>
          </li>
          <li>
            <a href="#">相册</a>
          </li>
          <li>
            <a href="#">论坛</a>
          </li>
          <li>
            <a href="#">专题</a>
          </li>
          <li>
            <a href="#">关于</a>
          </li>
        </ul>
          <div id="write" @click="write">
            <p>
            创作文章
            </p>
          </div>
        <div id="user">
          用户名： {{name}}
        </div>
          <div id="logoff" @click="quit">退出登录</div>
        <br class="clear"/>
      </div>
      </div>
    </div>
    <div id="ad">
      <img src="../../assets/logo1.png" width="1120" height="200" alt="">
    </div>
    <div id="main">
      <div id="sidebar1">
        <h3>
          每日精选
        </h3>
<!--        <ul>-->
<!--          <li>-->
<!--            <a href="https://www.jianshu.com/p/0cb5f5573b64" target="_blank">JavaScript学习 第一章</a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a href="https://www.jianshu.com/p/f793e41d427f" target="_blank">JavaScript学习 第二章</a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a href="https://www.jianshu.com/p/559592dbfee1" target="_blank">JavaScript学习 第三章</a>-->
<!--          </li>-->
<!--        </ul>-->
<!--        <h3>-->
<!--          人气排行-->
<!--        </h3>-->
<!--        <ul>-->
<!--          <li>-->
<!--            <a href="https://www.jianshu.com/p/acc0b9ddae8a" target="_blank">1. 初识HTTP协议</a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a href="https://www.jianshu.com/p/00b61fe3a729" target="_blank">2. Git与GitHub简单介绍</a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a href="https://www.jianshu.com/p/e37c1de69852" target="_blank">3. Web前端</a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a href="https://www.jianshu.com/p/559592dbfee1" target="_blank">4. JavaScript学习 第三章</a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a href="https://www.jianshu.com/p/f793e41d427f" target="_blank">5. JavaScript学习 第二章</a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a href="https://www.jianshu.com/p/0cb5f5573b64" target="_blank">6. JavaScript学习 第一章</a>-->
<!--          </li>-->
<!--        </ul>-->
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

  #tit {
    float: left;
    margin-left: 60px;
    margin-right: 20px;
    font-size: 2em;
    font-family: "Agency FB",serif;
    font-weight:bold;
    color: #f45b4d;
    white-space: nowrap;
  }

  #write {
    float:left;
    background-color: #f45b4d;
    height: 40px;
    width: 110px;
    line-height: 41px;
    margin: 10px 0 10px 30px;
    border-radius:10px;
    font-size: 24px;
    text-align: center;
    white-space: nowrap;
    font-family: "Agency FB",serif;
    text-decoration: none;
    text-transform: lowercase;
    color: #f3f3f3;
    cursor:pointer;
  }

  #user {
    float:left;
    margin-left: 30px;
    margin-right: 30px;
    font-size: 24px;
    white-space: nowrap;
    font-family: "Agency FB",serif;
  }

  #logoff{
    float: left;
    text-decoration: none;
    text-transform: lowercase;
    font-family: "Agency FB",serif;
    font-size: 22px;
    width: fit-content;
    color: #1b1b19;
    cursor:pointer;
  }

  #logoff:hover {
    text-decoration: none;
    color: #f45b4d;
  }

  #guide{
    position: relative;
    width: 1380px;
    margin: 0 auto 0 auto;
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

  .back-to-top {
    display:none;
    position: fixed;
    right: 2%;
    bottom: 5%;
    width: 5%;
    height: auto;
    z-index: 1000;
    cursor: pointer;
  }

  #nav1 {
    position: fixed;
    top:0;
    width: 100%;
    height: 56px;
    line-height: 56px;
    left:0;
    background: #ffffff;
    font-size: 24px;
    font-family: 幼圆,serif;
    z-index:9;
    border-color: #f0f0f0;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
  }

  #gui a {
    text-decoration: none;
    text-transform: lowercase;
    color: #1b1b19;
  }

  #gui a:hover {
    text-decoration: none;
    color: #f45b4d;
  }

  #nav1 ul {
    list-style: none;
    margin: 0 auto;
    text-align: center;
    width:auto;
    float:left;
    white-space: nowrap;
  }

  #nav1 ul li {
    display: inline;
    text-align: center;
    padding: 0.5em 0.3em 0.5em 0.3em;
  }

  #nav1 ul li a {
    padding: 0.5em 1em 0.9em 1em;
    font-weight:bold;
  }

  #nav1 ul li.active a {
    color: #f45b4d;
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


  export default{
    data(){
      return{
        name: '',
        article:[]
      }
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
      $(function () {
        $(window).scroll(function () {
          if ($(window).scrollTop() > 180) {
            $(".back-to-top").fadeIn(500);

          }
          else {
            $(".back-to-top").fadeOut(1);
          }
        });

        $(".back-to-top").click(function () {
          $('body,html').animate({scrollTop: 0}, 100);
          return false;
        });
      });
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
