<template>
  <div id="page-header">
    <!--Да, раньше было так :)-->
    <div class="back"></div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
  display: block;
  unicode-bidi: isolate;
}

#page-header {
  height: 40px;
}

#page-header .back {
  position: absolute;
  width: 100%;
  height: 40px;
  background: #4E729A url("../../../resources/old-vk/images/hat.gif") 0px -43px repeat-x;
}

#page-header .left {
  position: absolute;
  left: 0px;
  width: 134px;
  height: 40px;
  background: #4E729A url("../../../resources/old-vk/images/hat.gif") 0px -1px;
}

#page-header .right {
  position: absolute;
  right: 0;
  width: 10px;
  border-right: 1px solid white;
  height: 40px;
  background: #4E729A url("../../../resources/old-vk/images/hat.gif") 100% -1px;
}
</style>