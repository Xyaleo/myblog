<template>
  <div class="zh-loading-box">
    <div class="zh-loading-inner">
      <div class="zh-loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>加载中···</p>
    </div>
  </div>
</template>>
<style>
  .zh-loading{width:100px;height:100px;position:relative;margin:0 auto;}
  .zh-loading span{display:inline-block;width:16px;height:16px;border-radius:50%;background:#90ee90;position:absolute;-webkit-animation:load 1.04s ease infinite}
  @-webkit-keyframes load{0%{-webkit-transform:scale(1.2);opacity:1}
    100%{-webkit-transform:scale(.3);opacity:.5}
  }
  .zh-loading span:nth-child(1){left:0;top:50%;margin-top:-10px;-webkit-animation-delay:.13s}
  .zh-loading span:nth-child(2){left:14px;top:14px;-webkit-animation-delay:.26s}
  .zh-loading span:nth-child(3){left:50%;top:0;margin-left:-10px;-webkit-animation-delay:.39s}
  .zh-loading span:nth-child(4){top:14px;right:14px;-webkit-animation-delay:.52s}
  .zh-loading span:nth-child(5){right:0;top:50%;margin-top:-10px;-webkit-animation-delay:.65s}
  .zh-loading span:nth-child(6){right:14px;bottom:14px;-webkit-animation-delay:.78s}
  .zh-loading span:nth-child(7){bottom:0;left:50%;margin-left:-10px;-webkit-animation-delay:.91s}
  .zh-loading span:nth-child(8){bottom:14px;left:14px;-webkit-animation-delay:1.04s}
  .zh-loading-box{position: absolute;z-index: 999;height: 100%;width: 100%;top:0;left:0;}
  .zh-loading-box .zh-loading-inner{position: absolute;z-index: 2;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);transform: translate(-50%, -50%);}
  .zh-loading-box .zh-loading-inner p{color: #41b883;text-align: center;}

</style>






