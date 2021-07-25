<template>
  <div id="box1">
    <h2>
      热门博客
    </h2>
    <div class="con">
      <div v-bind:key="item.id" v-for="item of article" class="article" >
        <a id="item_title" @click="toArticle(item.id)">{{item.title}}</a>
        <div id="item_info">
          <div id="item_brief">{{item.brief}}...</div>
          <div id="item_name">{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.date}}</div>
          <p></p>
        </div>
      </div>
    </div>
  </div>

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

  h2, h3, h4 {
    margin-bottom: 1.25em;
    font-family: 幼圆;
    color: #000000;
  }
  p {
    margin-bottom: 1.75em;
  }

  .con {
    width:100%
  }

  #item_title{
    cursor:pointer
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

  #main ul li {
    padding: 8px 0 8px 0;
    border-top: dotted 1px #d9d9d9;
  }

  #item_title{
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    display: block;
    weight:90%;
  }


</style>
<script>
  /*引入公共方法*/
  const request = require('axios');
  export default{
    data(){
      return{
        article:[]
      }
    },
    mounted(){
      this.getAllArticles();//取得文章数据
    },

    methods:{
      getAllArticles:function(){
        request.post('/api/goArticle/all').then(res=>{
          if(res.data.sta === 'no') {
            window.localStorage.removeItem('name');
            this.$router.push({
              path: res.data.ur
            })
          }else {
            this.article = res.data;
            for (let i = 0; i < res.data.length; i++) {
              this.article[i].brief = res.data[i].text.replace(/<\/?[^>]*>/g, '').substring(0, 50)
            }
          }
        })
      },
      toArticle:function(id){
        this.$router.push({
          path: `/p/${id}`
        });
      }
    }
  }

</script>
