<template>
  <div id="old-vk">
    <div style="grid-area: 1 / 1 / 4 / 3"><!--Left pad--></div>
    <div style="grid-area: 1 / 6 / 4 / 8"><!--Right pad--></div>
    <vk-header/>
    <div style="grid-area: 2 / 3 / 4 / 4">
      <!--Menu place-->
      menu
    </div>
    <div style="grid-area: 2 / 4 / 3 / 6">
      <!--Page content-->
      <router-view/>
    </div>
    <vk-footer/>
  </div>
</template>

<style lang="scss">
@import "./resources/old-vk/css/vk-colors.sass";

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: tahoma, arial, verdana, sans-serif, Lucida Sans;
  font-size: 11px;
}

#old-vk {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 40px 1fr 80px;
  grid-column-gap: 0;
  grid-row-gap: 0;
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

import VkHeader from "@/components/old-vk/header/VkHeader.vue";
import VkFooter from "@/components/old-vk/VkFooter.vue";

export default {
  components: {VkFooter, VkHeader}
}
</script>