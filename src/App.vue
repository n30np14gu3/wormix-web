<template>
  <div id="old-vk">
    <div style="flex: 1"></div>
    <div style="flex: 0 0 791px">
      <vk-header></vk-header>
      <vk-main-container></vk-main-container>
    </div>
    <div style="flex: 1"></div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: tahoma, arial, verdana, sans-serif, Lucida Sans;
  font-size: 11px;
}

#old-vk {
  display: flex;
  min-width: 720px;
}

.button-blue {
  border-radius: 0;
}

.button-blue button{
  text-align: center;
  padding: 5px;
  border-radius: 2px;
  border: solid 1px rgb(69, 104, 141);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  background: linear-gradient(180deg, #698cb1 10%, #51769e 100%);
  color: white;
  text-shadow:  0 1px 0 rgba(0, 0, 0, 0.34);
}

.button-blue button:hover {
  background: linear-gradient(180deg, #6e93ba 10%, #51769e 100%);
}

.button-blue button:active {
  background: linear-gradient(180deg, #51769e 100%, #698cb1 10%);
}

.button-wide button{
  width: 100%;
}
</style>

<script>
import VkHeader  from "@/components/old-vk/header/VkHeader.vue";
import VkMainContainer from "@/components/old-vk/main-container/VkMainContainer.vue";

export default {
  components: {
    VkMainContainer,
    VkHeader

  }
}
</script>