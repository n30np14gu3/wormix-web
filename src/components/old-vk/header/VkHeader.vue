<template>
  <div class="page-header">
    <router-link class="main-logo" to="/"></router-link>
    <div class="main-menu">
      <vk-header-button title="Выход" @click="doLogout()"  v-if="checkLogin()"></vk-header-button>
    </div>
  </div>
</template>


<style scoped>
.page-header {
  width: 100%;
  display: flex;
  height: 40px;
  flex-direction: row;
  background: #4E729A url("../../../resources/old-vk/images/hat.png") 0 -43px repeat-x;
  border-radius: 0 0 8px 8px;
}

.page-header .main-logo {
  flex: 0 0 145px;
  background: #4E729A url("../../../resources/old-vk/images/hat.png") 0 -1px;
}

.page-header .main-menu {
  display: flex;
  flex-direction: row;
  justify-content: right;
  background: transparent;
  align-items: end;
  width: 100%;
  margin-right: 7px;
}
</style>

<script>
import VkHeaderButton from "@/components/old-vk/header/VkHeaderButton.vue";

export default {
  components: {VkHeaderButton},
  methods: {
    doLogout(){
      localStorage.clear();
      location.href = "/";
    },
    checkLogin(){
      return localStorage.getItem('USER_ID') !== null
    }
  }
}
</script>