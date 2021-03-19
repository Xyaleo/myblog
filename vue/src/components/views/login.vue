<template>
  <div>
    <div class="login-wrap" v-if="showLogin">
      <div class="mask">
      <h3 class="login">登录</h3>
      <p class="tishi" v-show="showTishi">{{tishi}}</p>
        <label class="a1">用&nbsp;&nbsp;户&nbsp;名:</label>
      <input class="a2" type="text" placeholder="请输入用户名" v-model="username">
        <label class="a6">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码&nbsp;:</label>
      <input class="a5" type="password" placeholder="请输入密码" v-model="password">
      <button v-on:click="login">登录</button>
      <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>
    </div>
    <div class="register-wrap" v-if="showRegister">
      <div class="mask1">
      <h3>注册</h3>

      <p class="tishi" v-show="showTishi">{{tishi}}</p>

        <label class="a1">用&nbsp;&nbsp;户&nbsp;名:</label>
      <input class="a2" type="text" placeholder="请输入用户名" v-model="newUsername">
        <label class="a3">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码&nbsp;:</label>
      <input class="a2" type="password" placeholder="请输入密码" v-model="newPassword">
        <label class="a4">确认密码:</label>
      <input class="a2" type="password" placeholder="确认密码" v-model="newPassword1">
      <button v-on:click="register">注册</button>
      <span v-on:click="ToLogin">已有账号？马上登录</span>
        </div>
    </div>
  </div>
</template>

<style scoped>

  .login-wrap{text-align:center;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background: url("../../assets/timg.jpg");
    background-size: 100%;
    background-repeat:no-repeat;
  }
  .register-wrap{text-align:center;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background: url("../../assets/timg.jpg");
    background-size: 100%;
    background-repeat:no-repeat;
  }
  .a1{
    float:left;
    margin-left: 40px;
    margin-top: 7px;
  }
  .a2{
    float:right;
    margin-right: 40px;
  }

  .a3{
    float:left;
    margin-left: 43px;
    margin-top: 30px;
  }
  .a4{
    float:left;
    margin-left: 35px;
    margin-top: 30px;
  }

  .a5{
    float:right;
    margin-right: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .a6{
    float:left;
    margin-left: 43px;
    margin-top: 50px;
  }
  .login{

  }
  .mask{
    width:400px;
    height:305px;
    background: white;
    border-radius: 5px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color:rgba(255,255,255,0.7);
  }
  .mask1{
       width:400px;
       height:325px;
       background: white;
       border-radius: 5px;
       position: absolute;
       top:50%;
       left:50%;
       transform: translate(-50%,-50%);
       background-color:rgba(255,255,255,0.7);
     }
  input{
    display:block;
    width:250px;
    height:40px;
    line-height:40px;
    margin:0 auto;
    margin-bottom: 10px;
    outline:none;
    border:1px solid #888;
    padding:10px;
    box-sizing:border-box;}

  .tishi{
    color:red;

  }

  button{display:block; width:320px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
  span{cursor:pointer;}
  span:hover{color:#41b883;}
</style>

<script >
  import {setCookie,getCookie} from '../../assets/js/cookie.js'
  import request from 'axios';
  import crypto from 'crypto';

  export default {
    data() {
      return {
        showLogin: true,
        showRegister: false,
        showTishi: false,
        tishi: '',
        username: '',
        password: '',
        newUsername: '',
        newPassword: '',
        newPassword1: ''
      }
    },
    mounted(){
      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/

    },
    methods: {

      ToRegister(){
        this.showLogin = false;
        this.showRegister = true;
        this.showTishi= false;
        this.newUsername = '';
        this.newPassword = ''
      },
      ToLogin(){
        this.showRegister = false;
        this.showLogin = true;
        this.showTishi= false;
        this.username = '';
        this.password = ''
      },
      login() {
        let pwdReg = /^[a-zA-Z0-9]*$/;
        let userReg = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
        let userRe = new RegExp(userReg);
        let pwdRe = new RegExp(pwdReg);
        if (this.username === "" || this.password === "") {
          this.tishi = "用户名或密码不能为空";
          this.showTishi = true
        } else if (!pwdRe.test(this.password)) {
          this.tishi = "密码只允许英文字母及数字";
          this.showTishi = true
        }else if (!userRe.test(this.username)) {
          this.tishi = "用户名只允许中文，英文字母，数字及_";
          this.showTishi = true
        } else if (this.username.length > 30 ) {
          this.tishi = "用户名长度超过限制";
          this.showTishi = true
        }else if (this.password.length > 20 ) {
          this.tishi = "密码长度超过限制";
          this.showTishi = true
        } else {
          this.showTishi = false
          let  md5 = crypto.createHash("md5");
          md5.update(this.password); //需要加密的密码
          let pwd = md5.digest('hex');  //password 加密完的密码
          request.post("/api/goLogin",{
            user:this.username,
            pwd:pwd
          }).then((res) => {
            // console.log(res);
            /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
            if (res.data.code === -1) {
              this.tishi = "用户名或密码错误";
              this.showTishi = true
            } else {
              this.tishi = "登录成功";
              this.showTishi = true;
              window.localStorage.setItem('name',this.username);
              setTimeout(function () {
                this.$router.push('/home')
              }.bind(this), 2000)
            }
          })
        }
      },
      register(){
        let pwdReg = /^[a-zA-Z0-9]*$/;
        let userReg = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
        let userRe = new RegExp(userReg);
        let pwdRe = new RegExp(pwdReg);
        if(this.newUsername === "" || this.newPassword === "" || this.newPassword1 === ""){
          this.tishi = "用户名或密码不能为空";
          this.showTishi = true
        } else if (!pwdRe.test(this.newPassword)) {
          this.tishi = "密码只允许英文字母及数字";
          this.showTishi = true
        }else if(!userRe.test(this.newUsername)) {
          this.tishi = "用户名只允许中文，英文字母，数字及_";
          this.showTishi = true
        }else if (this.newUsername.length > 30 ) {
          this.tishi = "用户名长度超过限制";
          this.showTishi = true
        }else if (this.newPassword.length > 20 ) {
          this.tishi = "密码长度超过限制";
          this.showTishi = true
        }else if(this.newPassword !== this.newPassword1 ){
          this.tishi = "两次输入的密码不一致";
          this.showTishi = true
        }else{
          this.showTishi = false
          let  md5 = crypto.createHash("md5");
          md5.update(this.newPassword); //需要加密的密码
          let pwd = md5.digest('hex');  //password 加密完的密码
          request.post("/api/goRegistry", {
            user: this.newUsername,
            pwd: pwd,
          }).then((res)=>{
            // console.log(res)
            if(res.data.code === 1){
              this.tishi = "注册成功，返回登陆页面"
              this.showTishi = true
              this.username = ''
              this.password = ''
              /*注册成功之后再跳回登录页*/
              setTimeout(function(){
                this.showRegister = false
                this.showLogin = true
                this.showTishi = false
              }.bind(this),2000)
            }else{
              this.tishi = "注册失败，原因：用户名已存在"
              this.showTishi = true
            }
          })
        }
      }
    }
  }

</script>
