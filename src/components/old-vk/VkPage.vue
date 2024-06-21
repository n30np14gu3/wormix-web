<template>
  <div class="vk-page">
    <div class="vk-page-header">
      <strong>{{title}}</strong>
    </div>
    <div class="vk-page-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">

@import "../../resources/old-vk/css/vk-colors.sass";
.vk-page{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  width: 100%;
  height: 100%;
  border: solid 1px $light-border-color;
  border-top: none;
}
.vk-page-header {
  width: 100%;
  grid-area: 1 / 1 / 2 / 2;
  text-align: left;
  background-color: #f5f5f5;
  padding: 7px;
}

.vk-page-content{
  width: 100%;
  height: 100%;
  grid-area: 2 / 1 / 3 / 2;
}

</style>

<script>
export default {
  props: {
    page_title: String
  },
  data() {
    return {
      title: this.page_title
    }
  }
}
</script>
