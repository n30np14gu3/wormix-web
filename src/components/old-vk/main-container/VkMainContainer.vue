<template>
  <div class="page-container">
    <div class="page-menu">Main menu</div>

    <div class="page-content">Page content</div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 0 5px;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.page-container .page-menu {
  width: 100%;
  height: 100%;
  background-color: red;
  flex: 1;
}

.page-container .page-content {
  width: 100%;
  height: 100%;
  background-color: yellow;
  flex: 4;
}
</style>


<script>
export default {

}
</script>