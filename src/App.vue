<template>
  <div id="old-vk">
    <div style="flex-grow: 2"><!--Left pad--></div>
    <div style="flex-grow: 4; min-width: 640px; max-width: 900px">
      <vk-main-container/>
    </div>
    <div style="flex-grow: 2"><!--Right pad--></div>
  </div>
</template>

<style lang="scss">
@import "./resources/old-vk/css/vk-base";
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: tahoma, arial, verdana, sans-serif, Lucida Sans;
  font-size: 11px;
}

#old-vk {
  //Тут используется flex, так как почему-то grid работает странно
  display: flex;
}

a {
  color: $font-blue;
  cursor: pointer;
  text-decoration: none;
}

a:hover{
  text-decoration: underline;
}
</style>

<script>

import VkMainContainer from "@/components/old-vk/VkMainContainer.vue";

export default {
  components: {VkMainContainer}

}
</script>