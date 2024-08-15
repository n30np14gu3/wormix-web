<template>
  <vk-page page_title="Вход">
    <vk-menu-auth-form class="vk-login-form"/>
  </vk-page>
</template>

<style scoped lang="scss">
.vk-login-form {
  padding: 20px 10%;
}
</style>

<script>
import VkMenuAuthForm from "@/components/old-vk/forms/VkMenuAuthForm.vue";
import VkPage from "@/components/old-vk/VkPage.vue";
import router from "@/routes";

export default {
  components: {VkPage, VkMenuAuthForm},
  beforeMount() {
    if(localStorage.getItem('USER_ID') !== undefined)
      router.push('/')
  }
}
</script>