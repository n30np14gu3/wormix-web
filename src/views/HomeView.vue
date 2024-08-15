<template>
  <vk-page page_title="Добро пожаловать">
    <div class="home-container">
      <p>
        <strong>ВКонтакте</strong> – универсальное средство коммуникации и поиска людей,<br>
        которым ежедневно пользуются десятки миллионов человек.
      </p>
      <vk-features/>
      <div class="button-blue button-wide register-btn">
        <router-link to="/register" style="flex: 0 0 158px">Как стать участником</router-link>
      </div>
    </div>
  </vk-page>
</template>

<style scoped lang="scss">
@import "../resources/old-vk/css/vk-base";

.register-btn {
  padding-top: 25px;
  display: flex;
  justify-content: center;
}
</style>

<script>
import VkPage from "@/components/old-vk/VkPage.vue";
import VkFeatures from "@/components/old-vk/VkFeatures.vue";
import router from "@/routes";

export default {
  components: {VkFeatures, VkPage},
  beforeMount() {
    if(localStorage.getItem('USER_ID') !== null)
      router.push('/profile')
  }
}
</script>
