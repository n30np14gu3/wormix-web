<template>
  <div class="left-menu">
    <vk-menu-auth-form v-if="this.$route.name != 'login' && !isAuth()"/>

    <div class="menu-links" v-if="this.$route.name == 'login' || isAuth()">
      <vk-menu-link v-for="link in menu_links" :key="link.id" :route="link.url" :title="link.title"/>
    </div>


  </div>
</template>

<style scoped>
.left-menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.menu-links {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

<script>

import VkMenuAuthForm from "@/components/old-vk/forms/VkMenuAuthForm.vue";
import VkMenuLink  from "@/components/old-vk/menu/VkMenuLink.vue";

export default {
  components: {VkMenuLink, VkMenuAuthForm},
  methods: {
    isAuth() {
      return localStorage.getItem('USER_ID') !== null
    }
  },
  data() {
    if(this.isAuth()){
      return {
        menu_links: [
          {
            id: 1,
            url: '/profile',
            title: 'Моя страница'
          },
          {
            id: 2,
            url: '/settings',
            title: 'Настройки'
          },
          {
            id: 3,
            url: '/wormix',
            title: 'Вормикс'
          },
          {
            id: 4,
            url: '/logout',
            title: 'Выход'
          }
        ]
      }
    }
    else{
      return {
        menu_links: [
          {
            id: 1,
            url: '/login',
            title: 'Вход'
          },
          {
            id: 2,
            url: '/register',
            title: 'Регистрация'
          },
          {
            id: 3,
            url: '/about',
            title: 'О сайте'
          }
        ]
      }
    }
  }
}
</script>