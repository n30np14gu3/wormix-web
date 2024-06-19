<template>
  <div id="old-vk">
    <vk-header/>
    <div style="grid-area: 2 / 3 / 4 / 4">
      <!--Menu place-->
      menu
    </div>
    <div style="grid-area: 2 / 4 / 3 / 6">
      <!--Page content-->
      <router-view/>
    </div>
    <div style="grid-area: 3 / 4 / 4 / 6">
      <!---->
      Footer
    </div>
  </div>
</template>

<style lang="scss">
@import "./resources/old-vk/css/vk-colors.sass";

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#old-vk {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
}

</style>

<script>

import VkHeader from "@/components/old-vk/header/VkHeader.vue";

export default {
  components: {VkHeader}


}
</script>