<template>
    <div id="nav1" >
      <div id="guide">
        <div id="tit">
          🍊 博客
        </div>
        <ul id="gui" @click="clicknav">
          <li>
            <a href="#/home" id="a1">博客</a>
          </li>
          <li>
            <a >相册</a>
          </li>
          <li>
            <a >论坛</a>
          </li>
          <li>
            <a >专题</a>
          </li>
          <li>
            <a href="#/about" id="a2">关于</a>
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
        <div id="logoff" @click="quit1">退出登录</div>
        <br class="clear"/>
      </div>
    </div>
  </template>
<style scoped>

  * {
    margin: 0;
    padding: 0;
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
  #guide{
    position: relative;
    width: 1380px;
    margin: 0 auto 0 auto;
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
  #write p {
    margin-bottom: 0;
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
    color: #1b1b19;
    width: fit-content;
    cursor:pointer;
  }
  #logoff:hover {
    text-decoration: none;
    color: #f45b4d;
  }

  ul {
    margin-bottom: 1.75em;
  }

  ul li {
    display: inline;
    text-align: center;
    padding: 0.5em 0.3em 0.5em 0.3em;
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
  #nav1 ul li a {
    padding: 0.5em 1em 0.9em 1em;
    font-weight:bold;
  }

  #nav1 ul li .active{
    color: #f45b4d;
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

</style>
<script>
  /*引入公共方法*/
  const request = require('axios');
  export default{
    props:["name","page"],
    data(){
      return{
      }
    },
    mounted(){
        document.getElementById(this.page).classList.add("active");
    },
    methods:{
      quit1(){
        request.get('/api/goLogout').then(res=>{
          window.localStorage.removeItem('name');
          this.$router.push({
            path: res.data.ur
          })
        });
      },

      write(){
        this.$router.push({
          path: `/editer`
        })
      }
    }
  }

</script>
