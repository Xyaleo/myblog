
<template>
  <body>
  <div class="xr-editor">
    <div class="top">
      <div class="t1">
        <div class="pic" @click="back"><p>返回首页</p></div>
    <input placeholder="输入文章标题..." spellcheck="false" maxlength="80" class="title">
        <div class=" butt2">
      <button class="launch iconfont icon-fabu"  @click="upload">发布文章</button>
        </div>
      </div>
    <div class="nav" >
      <button  title="源代码" id="b1" @click="display('lb');display('la');changeColor('b1')">HTML</button>
      <div class="dl"></div>
      <button class="iconfont icon-houtui" title="撤销" id="b2" @click="execCommand('undo')"></button>
      <button class="iconfont icon-qianjin" title="重做" id="b3" @click="execCommand('redo')"></button>
      <button class="iconfont icon-zu4" title="格式刷" id="b4" @click="execCommand('removeFormat')"></button>
      <div class="dl"></div>
      <button class="iconfont icon-jiacu" id="bold" title="加粗" @click="execCommand('bold');judge();judge1();focusclick()"></button>
      <button class="iconfont icon-xieti" title="斜体" id="Italic" @click="execCommand('Italic');judge();judge1();focusclick()"></button>
      <button class="iconfont icon-xiahuaxian" title="下划线" id="underline" @click="execCommand('underline');judge();judge1();focusclick()"></button>
      <button class="iconfont icon-shanchuxian" title="删除线" id="strikeThrough" @click="execCommand('strikeThrough');judge();judge1();focusclick()"></button>
      <div class="dl"></div>
      <button class="color" style='background-color:yellow;font-size: 12px;' title="黄色标记" id="yellow" @click="execCommand('hiliteColor','Yellow');focusclick()">标记</button>
      <button class="color" style='background-color:LightGreen;font-size: 12px;' title="绿色标记" id="LightGreen" @click="execCommand('hiliteColor','LightGreen');focusclick()">标记</button>
      <button class="color" style='background-color:LightSkyBlue;font-size: 12px;' title="蓝色标记" id="LightSkyBlue" @click="execCommand('hiliteColor','LightSkyBlue');focusclick()">标记</button>
      <button class="color" style='font-size: 12px;' title="取消标记" id="transparent" @click="execCommand('hiliteColor','Transparent');focusclick()">取消标记</button>
      <div class="dl"></div>
      <button class="iconfont icon-shangbiao1" title="上标" id="superscript" @click="execCommand('superscript');judge();judge1();focusclick()"></button>
      <button class="iconfont icon-xiabiao" title="下标" id="subscript" @click="execCommand('subscript');judge();judge1();focusclick()"></button>
      <div class="dl"></div>
      <button class="iconfont icon-juzuo" title="左对齐" id="justifyLeft" @click="execCommand('justifyLeft');judge();judge1();focusclick()"></button>
      <button class="iconfont icon-juzhong" title="居中" id="justifyCenter" @click="execCommand('justifyCenter');judge();judge1();focusclick()"></button>
      <button class="iconfont icon-juyou" title="右对齐" id="justifyRight" @click="execCommand('justifyRight');judge();judge1();focusclick()"></button>
      <button class="iconfont icon-liangduanduiqi" title="两端对齐" id="justifyFull" @click="execCommand('justifyFull');judge();judge1();focusclick()"></button>
      <div class="dl"></div>
      <button class="iconfont icon-duanluo" title="段落" id="div" @click="execCommand('formatBlock','div');judge();judge1();focusclick()"></button>
      <button class="iconfont icon-h2" title="H1" id="h1" @click="execCommand('formatBlock','h1');judge();judge1();focusclick()"></button>
      <button class="iconfont icon-h" title="H2" id="h2" @click="execCommand('formatBlock','h2');judge();judge1();focusclick()"></button>
      <button class="iconfont icon-h3" title="H3" id="h3" @click="execCommand('formatBlock','h3');judge();judge1();focusclick()"></button>
      <button class="iconfont icon-h5" title="H4" id="h4" @click="execCommand('formatBlock','h4');judge();judge1();focusclick()"></button>
      <button class="iconfont icon-h1" title="H5" id="h5" @click="execCommand('formatBlock','h5');judge();judge1();focusclick()"></button>
      <button class="iconfont icon-h4" title="H6" id="h6" @click="execCommand('formatBlock','h6');judge();judge1();focusclick()"></button>
      <div class="dl"></div>
      <select id="FontName" v-model="select1" @change="getValue('FontName');focusclick()">
        <option style="font-family:'宋体',serif" value="宋体">宋体</option>
        <option style="font-family:'微软雅黑',serif" value="微软雅黑">微软雅黑</option>
        <option style="font-family:'楷体',serif" value="楷体">楷体</option>
        <option style="font-family:'黑体',serif" value="黑体">黑体</option>
        <option style="font-family:'Arial',serif" value="Arial" >Arial</option>
        <option style="font-family:'Arial Black',serif" value="Arial Black" >Arial Black</option>
        <option style="font-family:'Times New Roman',serif" value="Times New Roman">Times New Roman</option>
        <option style="font-family:'Impact',serif" value="Impact">Impact</option>
      </select>
      <select id="FontSize" v-model="select2" @change="getValue('FontSize');focusclick()">
        <option style="font-size:12px"  value="1">12px</option>
        <option style="font-size:14px" value="2">14px</option>
        <option style="font-size:16px" value="3">16px</option>
        <option style="font-size:18px" value="4">18px</option>
        <option style="font-size:20px" value="5" >20px</option>
        <option style="font-size:24px" value="6">24px</option>
        <option style="font-size:36px" value="7">36px</option>
      </select>
      <select id="ForeColor" v-model="select3" @change="getValue('ForeColor');focusclick()">
        <option value="rgb(0, 0, 0)" style="color:black;">黑色</option>
        <option value="rgb(220, 20, 60)" style="color:crimson;">深红</option>
        <option value="rgb(255, 0, 0)" style="color:red;">红色</option>
        <option value="rgb(255, 165, 0)" style="color:orange;">橙色</option>
        <option value="rgb(255, 255, 0)" style="color:yellow;">黄色</option>
        <option value="rgb(144, 238, 144)" style="color:lightgreen;">浅绿</option>
        <option value="rgb(0, 128, 0)" style="color:green;">绿色</option>
        <option value="rgb(173, 216, 230)" style="color:lightblue;">浅蓝</option>
        <option value="rgb(0, 0, 255)" style="color:blue;">蓝色</option>
        <option value="rgb(0, 0, 139)" style="color:darkblue;">深蓝</option>
        <option value="rgb(128, 0, 128)" style="color:purple;">紫色</option>
      </select>

    </div>
    </div>
      <div class="editor" placeholder="写作从这里开始..." id="la" contenteditable="true" @blur="focusState = false" v-focus="focusState"  @click="judge();judge1()" @input="print()"></div>
     <div class="content" id="lb"  style="display:none">{{ html }}</div>
  </div>
  </body>
</template>

<script>
  import { getCookie } from '../../assets/js/cookie.js'
  import request from 'axios';



  export default {
    name: 'app',
    data() {
      return {
        select1:'Arial',
        select2: '3',
        select3: 'rgb(0, 0, 0)',
        html: '',
        focusState:'true'
      }
    },
    directives: {
      focus: {
        update: function (el, {value}) {
          if (value) {
            el.focus()
          }
        }
      }
    },
    mounted(){
      /*页面挂载获取保存的cookie值，渲染到页面上*/
      let uname = getCookie('username');
      /*如果cookie不存在，则跳转到登录页*/
      if(uname === ""){
        this.$router.push('/login')
      }
    },
    methods: {
      back(){
        this.$router.push({
          path: `/home`
        })
      },
      focusclick () {
        this.focusState = true
      },
      execCommand(name, args) {
        document.execCommand(name, false, args);
      },
      getValue(a){
        if(a==='FontSize'){
          document.execCommand(a,false,this.select2);
        }else if(a==='ForeColor'){
          document.execCommand(a,false,this.select3);
        }else{
          document.execCommand(a,false,this.select1);
        }

      },
      print() {
        if (document.queryCommandValue('formatBlock') === '') {
          document.execCommand('formatBlock', false, 'div');
        }
        this.html = document.querySelector('.editor').innerHTML;
      },
      display(id){
        var traget=document.getElementById(id);

        if(traget.style.display==="none"){
          traget.style.display="";

        }else{
          traget.style.display="none";
        }
      },
      changeColor(id)
      {
        var traget=document.getElementById(id);
        var traget1=document.getElementsByClassName("iconfont");
        var traget2=document.getElementsByTagName("select");
        var traget3=document.getElementsByClassName("color");
        if(traget.style.background==="rgb(198, 198, 198)"){
        traget.style.background = '#f3f3f3';
          for (var i=0;i<traget1.length;i++)
          {
            traget1[i].disabled = false;
          }
          for (var i=0;i<traget2.length;i++)
          {
            traget2[i].disabled = false;
          }
          for (var i=0;i<traget3.length;i++)
          {
            traget3[i].style.color = 'black';
          }
        }else{
          traget.style.background = '#c6c6c6';
          for (var i=0;i<traget1.length;i++)
          {
            traget1[i].disabled = true;
            traget1[i].style.background = '#f3f3f3';
          }
          for (var i=0;i<traget2.length;i++)
          {
            traget2[i].disabled = true;
          }
          for (var i=0;i<traget3.length;i++)
          {
            traget3[i].style.color = '#c6c6c6';
          }
        }
      },
      judge(){
        let button1=['bold','Italic','underline','strikeThrough','justifyLeft','justifyCenter','justifyRight',
          'justifyFull','div','h1','h2','h3','h4','h5','h6','superscript','subscript'];

          for (var i = 0; i < button1.length; i++) {
            let traget = document.getElementById(button1[i]);
            if (document.queryCommandValue(button1[i]) === 'true') {
              traget.style.background = '#c6c6c6';
            } else {
              traget.style.background = '#f3f3f3';
            }
            if (document.queryCommandValue('formatBlock') === button1[i]) {
              document.getElementById(button1[i]).style.background = '#c6c6c6';
            }

        }
      },
      judge1(){
        console.log(document.queryCommandValue('FontName').replace(/\"/g,""))

          if (document.queryCommandValue('FontSize') !== this.select2){
            this.select2=document.queryCommandValue('FontSize')
          }
          if(document.queryCommandValue('FontName').replace(/\"/g,"") !== this.select1){
            this.select1=document.queryCommandValue('FontName').replace(/\"/g,"")
          }
          if(document.queryCommandValue('ForeColor') !== this.select3){
            this.select3=document.queryCommandValue('ForeColor')
          }
      },
      upload(){
        var now = new Date();
        var year = now.getFullYear(); //得到年份
        var month = now.getMonth();//得到月份
        var day = now.getDate();//得到日期
        var hour = now.getHours();//得到小时
        var minu = now.getMinutes();//得到分钟
        var sec = now.getSeconds();//得到秒
        month = month + 1;
        if (month < 10) month = "0" + month;
        if (date < 10) date = "0" + date;
        if (hour < 10) hour = "0" + hour;
        if (minu < 10) minu = "0" + minu;
        if (sec < 10) sec = "0" + sec;
        let date = year + "-" + month + "-" + day;
        let time = hour + ":" + minu + ":" + sec;
        let text = document.querySelector('.editor').innerHTML;
        let title = document.getElementsByClassName("title")[0].value;
        let uname = getCookie('username');
        if(title.match(/^[ ]*$/)){
          alert("上传失败 原因：标题不能为空")
        }else if(text === '<div><br></div>' || text === '<br>' || text === ''){
          alert("上传失败 原因：内容不能为空")
        } else{
        request.post("/api/goUpload",{
          uname:uname,
          title:title,
          text:text,
          date:date,
          time:time
        }).then((res) => {
          console.log(res);
          /*接口的传值(-1,上传失败)*/
          if (res.data.code === 1) {
            alert("发布成功");
          } else {
            alert("发布失败 原因：此标题不能与您已发布的文章标题相同");
          }
        })
        }
      }
    }
  };

</script>

<style scoped>
  body {
    margin: 0;
    background-color: #ffffff;
  }
 ::-webkit-scrollbar {/*滚动条整体样式*/

    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    background-color: #7e7e7e;
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%,
    rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
  }

::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #EDEDED;

  }
  .xr-editor {
    width: 100%;
    height: 100%;

  }


  .top{
    position: fixed;
    top:0;
    width: 100%;
    height: 108px;
    z-index:9;
    left:0;
  }
  .t1{
    display: flex;
    padding: 0 32px;
    overflow-y:hidden;
    height: 60px;
  }

  .pic{
    display: flex;
    box-sizing: border-box;
    width: 88px;
    align-items: center;
    font-size: 20px;
    margin-top: 10px;
    height: 40px;
    outline: none;
    border: 1px;
    background:white!important;
    white-space: nowrap;
    padding: 0;
    cursor:pointer;
    margin-right: 100px;
    text-align: center;
    border-radius:10px;
    border: solid;
   }
  .title{
    flex: 1 1 auto;
    height: 60px;
    box-sizing: border-box;
    font-size: 28px;
    font-weight:bold;
    margin-right: auto;
    margin-left: auto;
    outline: none;
    border: 0;
    overflow:hidden;
    overflow-y:auto;
    display: block;
    padding: 0;

  }

  .butt2{
    flex: 0 1 calc(50% - 25rem);
    display: flex;
    align-items: center;
    margin-top: 0;
    height: 60px;
    box-sizing: border-box;
    border: 0;
    overflow:hidden;
    background:white;
    padding: 0;
    justify-content: flex-end;
  }
  .launch{
    display: block;
    width: 180px;
    align-items: center;
    font-size: 28px;
    margin-top: 0;
    height: 60px;
    box-sizing: border-box;
    white-space: nowrap;
    outline: none;
    border: 0;
    background:white!important;
    padding: 0;
    cursor:pointer;

  }
  .launch:hover{
    color:#8d8b86;
    background: white!important;
  }

  .nav {
    height: 48px;
    border: 1px solid #8d8b86;
    background: #f3f3f3;
    display:flex;
    flex-wrap: wrap;
    overflow:hidden;
    justify-content: center;
  }
  .dl{
    overflow:hidden;
    margin:5px 5px 0 5px ;
    height: 37px;
    width: 1px;
    background: #8d8b86;
  }

  button {
    border:none;
    background: #f3f3f3;
    width: 38px;
    height: 38px;
    outline:none;
    margin-top:5px;
    display: inline-block;


  }
  button:hover{
    background: #c6c6c6 !important;
  }
  #b1{
    font-size: 6px;
    width: 40px;
  }

  select{
    width:100px;
    height: 38px;
    font-size: 18px;
    margin-top:5px;
    outline:none;
    margin-right:5px;
  }

  option{
    font-size: 18px;
  }


  .editor {
    flex: 1;
    margin: 9.334rem auto 0;
    outline: none;
    border: 0;
    position: static;
    width: 70rem;
    height: auto;
    box-sizing: border-box;
    overflow:hidden;
    overflow-y:auto;
    padding: 2em;
  }
  .editor:empty::before{
    color:grey;
    content:attr(placeholder);
  }
  .content {
    flex: 1;
    margin-top: 9.334rem;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    outline: none;
    border: 0;
    position: static;
    width: 70rem;
    height: auto;
    box-sizing: border-box;
    overflow:hidden;
    overflow-y:auto;
    padding: 32px;
  }

</style>
