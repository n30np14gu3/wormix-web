<template>
  <div class="page-layout">
    <vk-header></vk-header>
  </div>
  <div style="padding: 10px">
    <div class="button-blue">
      <button>Войти</button>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: tahoma, arial, verdana, sans-serif, Lucida Sans;
  font-size: 11px;
  background: white;
}
.button-blue {
  padding: 5px 0;
  border-radius: 0;
}
.button-blue button{
  text-align: center;
  padding: 5px 40px;
  border-radius: 2px;
  border: solid 1px rgb(69, 104, 141);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  background: linear-gradient(180deg, #698cb1 10%, #51769e 100%);
  color: white;
  text-shadow:  0 1px 0 rgba(0, 0, 0, 0.34);
}
</style>
<script>
import VkHeader  from "@/components/old-vk/header/VkHeader.vue";

export default {
  components: {
    VkHeader

  }
}
</script>