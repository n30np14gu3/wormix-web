<template>
  <footer>
    <div class="footer-links">
      <router-link to="/about">о сайте</router-link>
      <a href="#">помощь</a>
      <a href="#">блог</a>
      <router-link to="/terms">правила</router-link>
      <a href="#">реклама</a>
      <a href="https://github.com/n30np14gu3" target="_blank">разработчикам</a>
      <a href="#">вакансии</a>
    </div>
    <div style="text-align: center; padding-top: 5px">
      <a href="https://vkontakte.ru" target="_blank" style="padding-bottom: 5px">Вконтакте</a> © 2006-2011 <br>
      <a href="https://github.com/n30np14gu3" target="_blank">ShockByte</a> © {{ current_year }}
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "../../resources/old-vk/css/vk-colors.sass";

footer {
  grid-area: 3 / 4 / 4 / 6;
  padding-top: 10px;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.footer-links a{
  padding: 3px 8px;
  margin-right: 5px;
  text-decoration: none;
}

.footer-links a:hover{
  background-color: $light-hover;
}

.footer-links a:active{
  background-color: $light-active;
}

</style>

<script>
export default {
  data() {
    return {
      current_year: ""
    }
  },
  created() {
    this.current_year = new Date().getFullYear()
  }
}
</script>