<template>
  <body>
  <div id="bg">
    <div class="top">
      <back-vue></back-vue>
    </div>
    <div id="header">
      <nav-vue :name="name" page="a2"></nav-vue>
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
        <div id="box1">
          <h1>
            博客更新记录
          </h1>
          <br>
          <h2  style="float:left">
            0.1.0
          </h2>
          <h4 style="float:right">2019.7.21</h4>
          <br class="clear"/>
          <p>
            1.添加主页，导航栏，滚动窗口<br>
            2.添加文章界面<br><br>
          </p>

          <h2  style="float:left">
            0.1.5
          </h2>
          <h4 style="float:right">2019.7.24</h4>
          <br class="clear"/>
          <p>
            导航中添加了“关于”页面，用于记录博客修改的内容和时间<br><br>
          </p>

          <h2  style="float:left">
            0.2.0
          </h2>
          <h4 style="float:right">2019.7.27</h4>
          <br class="clear"/>
          <p>
            1.添加返回顶部功能<br>
            2.改变了页面的主要配色：红色变为橙色<br><br>
          </p>

          <h2  style="float:left">
            1.0.0
          </h2>
          <h4 style="float:right">2020.5.25</h4>
          <br class="clear"/>
          <p>
            1.项目重置，基于vue，egg
            2.延续之前的页面风格，再基础上改进<br>
            3.实现登陆注册功能<br><br>
          </p>

          <h2  style="float:left">
            1.1.0
          </h2>
          <h4 style="float:right">2020.8.4</h4>
          <br class="clear"/>
          <p>
            1.实现了富文本编辑器<br>
            2.增加文章发布功能<br><br>
          </p>

          <h2  style="float:left">
            1.2.0
          </h2>
          <h4 style="float:right">2020.10.26</h4>
          <br class="clear"/>
          <p>
            1.新增了文章列表和文章详情功能，基础博客功能完成<br>
            2.优化代码结构<br><br>
          </p>

          <h2  style="float:left">
            1.2.5
          </h2>
          <h4 style="float:right">2021.3.13</h4>
          <br class="clear"/>
          <p>
            1.增加了页面标题<br>
            2.博客成功部署到服务器<br><br>
          </p>

          <h2  style="float:left">
            1.3.0
          </h2>
          <h4 style="float:right">2021.3.18</h4>
          <br class="clear"/>
          <p>
            1.优化性能：部分文件采用cdn服务传输<br>
            2.部分功能组件化<br><br>
          </p>

          <h2  style="float:left">
            1.4.0
          </h2>
          <h4 style="float:right">2021.3.19</h4>
          <br class="clear"/>
          <p>
            1.登陆改用cookie<br>
            2.修复了路由bug<br><br>
          </p>

          <h2  style="float:left">
            1.5.0
          </h2>
          <h4 style="float:right">2021.3.21</h4>
          <br class="clear"/>
          <p>
            1.优化性能：采用代码压缩<br>
            2.修复了一些bug<br><br>
          </p>

          <h2  style="float:left">
            1.6.0
          </h2>
          <h4 style="float:right">2021.4.5</h4>
          <br class="clear"/>
          <p>
            项目升级为vue3.0<br><br>
          </p>

          <h2  style="float:left">
            1.7.0
          </h2>
          <h4 style="float:right">2021.6.25</h4>
          <br class="clear"/>
          <p>
            1.新增注册邀请码<br>
            2.改进了登陆页面的内容<br><br>
          </p>

          <h2  style="float:left">
            1.8.0
          </h2>
          <h4 style="float:right">2021.6.28</h4>
          <br class="clear"/>
          <p>
            1.新增关于界面，简单记录网站的更新<br>
            2.修复了一些bug<br><br>
          </p>

          <h2 >
            接下来的计划
          </h2>
          <br class="clear"/>
          <p>
            1.首屏加载优化<br>
            2.主页显示优化<br>
            3.完善文章功能<br><br>
          </p>

        </div>
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

  #box1 p {
    border-bottom-style: inset;
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
  export default{
    data(){
      return{
        name: '',
      }
    },
    components:{
      navVue,
      backVue
    },
    mounted(){
      let uname = window.localStorage.getItem('name');
      if(!uname){
        this.$router.push('/login')
      }
      this.name = uname;
    },
    methods:{
      write(){
        this.$router.push({
          path: `/editer`
        })
      }
    }
  }

</script>
