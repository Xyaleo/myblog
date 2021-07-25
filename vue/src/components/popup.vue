<template>
  <div class="zhezhao" id='zhezhao' >
    <div class="tankuang" >
      <div id="header" v-drag>
        <div id="header-right" @click="doClose">×</div>
      </div>
      <div id="content">
        <label class="a1">邀&nbsp;请&nbsp;码:</label>
        <input class="a2" type="text" placeholder="请输入邀请码" v-model="mid">
      </div>
      <button @click="register">确认</button>
    </div>
  </div>
</template>

<style scoped>
  .zhezhao{
    position: fixed;
    left: 0;
    top: 0;
    background: #000;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .tankuang{
    position: relative;
    background: #fff;
    width: 300px;
    height: 150px;
    border-radius: 5px;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }

  #header{
    height: 40px;
  }
  #header-right{
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 5px;
    font-size: 22px;
    line-height: 15px;
    color: black;
    right: 8px;
    top: 8px;
    text-align: center;
    cursor:pointer;
  }
  #header-right:hover{
    color: #41b883;
  }
  #content {
    position: absolute;
    width: 100%;
    height: 22px;
    top:40%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  .a1{
    float:left;
    margin-left: 25px;
  }
  .a2{
    float:right;
    margin-right: 25px;
    height:18px;
  }
  button{
    display:block;
    width:100px;
    height:30px;
    line-height: 30px;
    margin:0 auto;
    border:none;
    background-color:#41b883;
    color:#fff;
    font-size:16px;
    margin-top: 50px;
    margin-bottom:5px;
    cursor:pointer;
  }
</style>
<script>

export default{
  props: {
    dialog_visible: Boolean
  },
  data() {
    return {
      visible: this.dialog_visible,
      mid: ''
    }
  },
  directives: {
    drag: function (el) {
      let dragBox = el;
      dragBox.onmousedown = e => {
        //算出鼠标相对元素的位置
        let disX = e.clientX - dragBox.parentElement.offsetLeft;
        let disY = e.clientY - dragBox.parentElement.offsetTop;
        document.onmousemove = e => {
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX;
          let top = e.clientY - disY;
          //移动当前元素
          dragBox.parentElement.style.left = left + "px";
          dragBox.parentElement.style.top = top + "px";
        };
        document.onmouseup = e => {
          //鼠标弹起来的时候不再移动
          document.onmousemove = null;
          //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
          document.onmouseup = null;
        };
      };
    }
  },

  methods: {
    doClose() {
      // 触发父组件中的dialogVisibleEvent事件，并传递参数
      this.$emit('dialogVisibleEvent', false);
    },
    register() {
      this.$emit('dialogVisibleEvent', false);
      this.$emit('midEvent', this.mid);
    }
  }
}

</script>





