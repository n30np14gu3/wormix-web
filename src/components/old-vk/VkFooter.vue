<template>
  <footer>
    <div class="footer-links">
      <a href="#">о сайте</a>
      <a href="#">помощь</a>
      <a href="#">блог</a>
      <a href="#">правила</a>
      <a href="#">реклама</a>
      <a href="#">разработчикам</a>
      <a href="#">вакансии</a>
    </div>
    <div style="text-align: center">
      <a href="https://vkontakte.ru" target="_blank">Вконтакте</a> © 2006-2011
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "../../resources/old-vk/css/vk-colors.sass";

footer {
  grid-area: 3 / 4 / 4 / 6;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.footer-links a{
  padding: 3px 8px;
  margin-right: 5px;
}

.footer-links a{
  text-decoration: none;
}

.footer-links a:hover{
  background-color: $light-hover;
}
</style>

<script>
export default {

}
</script>