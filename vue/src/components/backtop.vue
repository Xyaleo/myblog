<template>
  <img class="back-to-top"
       src="../assets/top.png">
</template>

<style scoped>
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
</style>
<script>
  const $ = require('jquery');
export default{
  mounted() {
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
  }

}

</script>
