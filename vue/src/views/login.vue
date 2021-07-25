<template>
  <div>
    <div class="login-wrap" v-if="showLogin">
      <div class="mask">
      <h3 class="login">登录</h3>
      <p class="tishi" :style="{visibility:showTishi}">{{tishi}}</p>
        <label class="a1">用&nbsp;&nbsp;户&nbsp;&nbsp;名:</label>
      <input class="a2" type="text" placeholder="请输入用户名" v-model="username">
        <label class="a6">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码&nbsp;:</label>
      <input class="a5" type="password" placeholder="请输入密码" v-model="password">
      <button v-on:click="login">登录</button>
      <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>
    </div>
    <div class="register-wrap" v-if="showRegister">
      <div class="mask1">
      <h3  class="login">注册</h3>
      <p class="tishi" :style="{visibility:showTishi}">{{tishi}}</p>
        <label class="a1">用&nbsp;&nbsp;户&nbsp;&nbsp;名:</label>
      <input class="a2" type="text" placeholder="请输入用户名" v-model="newUsername">
        <label class="a3">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码&nbsp;:</label>
      <input class="a2" type="password" placeholder="请输入密码" v-model="newPassword">
        <label class="a4">确认密码:</label>
      <input class="a2" type="password" placeholder="确认密码" v-model="newPassword1">
      <button v-on:click="register">注册</button>
      <span v-on:click="ToLogin">已有账号？马上登录</span>
        </div>
    </div>
    <pop-vue v-show="dialog_visible"
            :dialog_visible="dialog_visible"
            @dialogVisibleEvent="showDialog"
            @midEvent="regi">
    </pop-vue>
    <load-vue v-show="load_visible">
    </load-vue>
  </div>
</template>

<style scoped>

  .login-wrap{text-align:center;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background: url("../assets/timg1.jpg");
    background-size:cover;
  }
  .register-wrap{text-align:center;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background: url("../assets/timg1.jpg");
    background-size:cover
  }
  .a1{
    float:left;
    margin-left: 38px;
    margin-top: 7px;
  }
  .a2{
    float:right;
    margin-right: 40px;
  }

  .a3{
    float:left;
    margin-left: 44px;
    margin-top: 30px;
  }
  .a4{
    float:left;
    margin-left: 39px;
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
    margin-left: 44px;
    margin-top: 50px;
  }
  .login{
    margin-bottom: 0;
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

  p{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .tishi{
    color:red;

  }

  button{
    display:block;
    width:320px;
    height:40px;
    line-height: 40px;
    margin:0 auto;
    border:none;
    background-color:#41b883;
    color:#fff;
    font-size:16px;
    margin-bottom:5px;
    cursor:pointer;
  }
  span{cursor:pointer;}
  span:hover{color:#41b883;}
</style>

<script >
  const request = require('axios');
  import crypto from 'crypto';
  import popVue from '@/components/popup';
  import loadVue from '@/components/loading';

  export default {
    components: { popVue, loadVue},
    data() {
      return {
        showLogin: true,
        showRegister: false,
        showTishi: 'hidden',
        tishi: '默认',
        dialog_visible: false,
        load_visible: false,
        username: '',
        password: '',
        newUsername: '',
        newPassword: '',
        newPassword1: ''
      }
    },

    methods: {
      showDialog(visible) {
        this.dialog_visible = visible;
      },
      ToRegister(){
        this.showLogin = false;
        this.showRegister = true;
        this.showTishi= 'hidden';
        this.newUsername = '';
        this.newPassword = '';
        this.newPassword1 = '';
      },
      ToLogin(){
        this.showRegister = false;
        this.showLogin = true;
        this.showTishi= 'hidden';
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
          this.showTishi = 'visible'
        } else if (!pwdRe.test(this.password)) {
          this.tishi = "密码只允许英文字母及数字";
          this.showTishi = 'visible'
        }else if (!userRe.test(this.username)) {
          this.tishi = "用户名只允许中文，英文字母，数字及_";
          this.showTishi = 'visible'
        } else if (this.username.length > 30 ) {
          this.tishi = "用户名长度超过限制";
          this.showTishi = 'visible'
        }else if (this.password.length > 20 ) {
          this.tishi = "密码长度超过限制";
          this.showTishi = 'visible'
        } else {
          this.showTishi = 'hidden';
          this.load_visible = true;
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
              this.showTishi = 'visible';
              this.load_visible = false;
            } else {
              this.tishi = "登录成功,即将跳转";
              this.showTishi = 'visible';
              this.load_visible = false;
              window.localStorage.setItem('name',this.username);
              setTimeout(function () {
                this.$router.push('home')
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
          this.showTishi = 'visible'
        } else if (!pwdRe.test(this.newPassword)) {
          this.tishi = "密码只允许英文字母及数字";
          this.showTishi = 'visible'
        }else if(!userRe.test(this.newUsername)) {
          this.tishi = "用户名只允许中文，英文字母，数字及_";
          this.showTishi = 'visible'
        }else if (this.newUsername.length > 30 ) {
          this.tishi = "用户名长度超过限制";
          this.showTishi = 'visible'
        }else if (this.newPassword.length > 20 ) {
          this.tishi = "密码长度超过限制";
          this.showTishi = 'visible'
        }else if(this.newPassword !== this.newPassword1 ){
          this.tishi = "两次输入的密码不一致";
          this.showTishi = 'visible'
        }else{
          this.showTishi = 'hidden';
          this.showDialog(true);
        }
      },
      regi(mid){
        this.load_visible = true;
        let  md5 = crypto.createHash("md5");
        md5.update(this.newPassword); //需要加密的密码
        let pwd = md5.digest('hex');  //password 加密完的密码
        request.post("/api/goRegistry", {
          user: this.newUsername,
          pwd: pwd,
          mid: mid
        }).then((res)=>{
          // console.log(res)
          if(res.data.code === 1){
            this.tishi = "注册成功，即将返回登陆页面";
            this.showTishi = 'visible';
            this.username = '';
            this.password = '';
            this.load_visible = false;
            /*注册成功之后再跳回登录页*/
            setTimeout(function(){
              this.showRegister = false;
              this.showLogin = true;
              this.showTishi = 'hidden'
            }.bind(this),2000)
          }else if(res.data === -2){
            this.tishi = "注册失败，原因：邀请码错误";
            this.showTishi = 'visible';
            this.load_visible = false;
          }else{
            this.tishi = "注册失败，原因：用户名已存在";
            this.showTishi = 'visible';
            this.load_visible = false;
          }
        });

      }
    }
  }

</script>
