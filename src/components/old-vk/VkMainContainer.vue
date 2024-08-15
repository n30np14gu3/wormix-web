<template>
  <div id="main-container">
    <vk-header style=" grid-area: 1 / 1 / 2 / 2"/>
    <div class="page-container">
      <!--Page container-->

      <div style="grid-area: 1 / 1 / 3 / 2; margin-right: 20px" :class="this.$route.name === 'wormix' ? 'left-menu-game': ''">
        <!--Left menu-->
        <vk-left-menu/>
      </div>

      <div style="grid-area: 1 / 2 / 2 / 6" :class="this.$route.name === 'wormix' ? 'game-container': ''">
        <!--Page content-->
        <router-view/>
      </div>

      <div style=" grid-area: 2 / 2 / 3 / 6">
        <!--Page footer-->
        <vk-footer/>
      </div>
    </div>
  </div>
</template>

<style scoped>
#main-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
}
.page-container {
  grid-area: 2 / 1 / 3 / 2;
  padding: 0 10px;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 80px;
  grid-column-gap: 0;
  grid-row-gap: 0;
}
.left-menu-game {
  display: none;
}
.game-container {
  grid-area: 1 / 6 / 1 / 1 !important;
}

</style>

<script>
import VkHeader from "@/components/old-vk/header/VkHeader.vue";
import VkFooter from "@/components/old-vk/VkFooter.vue";
import VkLeftMenu from "@/components/old-vk/menu/VkLeftMenu.vue";

export default {
  components: {VkLeftMenu, VkFooter, VkHeader}

}
</script>