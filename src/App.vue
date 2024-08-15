<template>
  <div id="old-vk">
    <div :class="this.$route.name === 'wormix' ? 'left-pad-full': 'left-pad'"><!--Left pad--></div>
    <div :class="this.$route.name === 'wormix' ? 'base-container-full': 'base-container'">
      <vk-main-container/>
    </div>
    <div :class="this.$route.name === 'wormix' ? 'right-pad-full': 'right-pad'"><!--Right pad--></div>
  </div>
</template>

<style lang="scss">
@import "./resources/old-vk/css/vk-base.sass";
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
.left-pad{
  flex-grow: 2
}
.right-pad{
  flex-grow: 2
}
.base-container{
  flex-grow: 4;
  min-width: 640px;
  max-width: 800px
}

.left-pad-full{
  display: none;
}
.right-pad-full{
  display: none;
}
.base-container-full{
  flex-grow: 1;
  min-width: 100%;
}
</style>

<script>

import VkMainContainer from "@/components/old-vk/VkMainContainer.vue";

export default {
  components: {VkMainContainer}

}
</script>