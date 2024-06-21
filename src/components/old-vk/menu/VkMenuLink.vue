<template>
  <router-link :to="link_href" class="menu-link">{{link_title}}</router-link>
</template>

<style scoped lang="scss">
@import "../../../resources/old-vk/css/vk-colors.sass";

.menu-link {
  width: 100%;
  padding: 6px 8px;
  text-decoration: none;
}

.menu-link:hover{
  background-color: $light-hover;
}

.menu-link:active{
  background-color: $light-active;
}
</style>

<script>
export default {
  props: {
    route: String,
    title: String
  },

  data() {
    return {
      link_href: this.route,
      link_title: this.title
    }
  }
}
</script>
