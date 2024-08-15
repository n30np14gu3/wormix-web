<template>
  <vk-page page_title="О сайте">
    <div class="about-container">
      <h1>О сайте</h1>
      <div class="about-block">
        <p>
          Добро пожаловать на сайт <b>WORMIX NST</b>, интернет-ресурс, предоставляет возможность вспомнить <br>
          тот самый Вормикс в ВКонтакте. Сайт <b>WORMIX NST</b> (<strong><a href="/">{{ current_domain }}</a></strong>) – это сетевой <br>
          проект, позволяющий поиграть в старый Вормикс 2013 года.
        </p><br>
        <p>
          С помощью данного сайта Вы сможете насладиться игрой в Вормикс версии 2013 года. <br>
          Сайт позволяет изменять количество внутреигровой валюты, а также корректировать большинство параметров персонажа
        </p><br>
        <p style="padding-bottom: 5px">Исходный код проекта доступен на <b>GitHub</b>. Проект состоит из следующих модулей:</p>
        <ul class="listing">
          <li><a href="https://github.com/n30np14gu3/wormix-core" target="_blank">Ядро проекта</a></li>
          <li><a href="https://github.com/n30np14gu3/wormix-api" target="_blank">REST API сервис</a></li>
          <li><a href="https://github.com/n30np14gu3/wormix-web" target="_blank">Веб-панель игры</a></li>
        </ul><br>
        <p>Огромная благодарность следующим людям за помощь в изучении клиента игры:</p>
        <ul class="listing">
          <li>BiosNop</li>
          <li>JuneSomething (R.I.P.)</li>
        </ul>
      </div>
    </div>
  </vk-page>
</template>

<style scoped lang="scss">
@import "../resources/old-vk/css/vk-base.sass";
.about-container{
  padding: 20px 10px;
}

.about-block {
  padding-bottom: 20px;
}
.about-block p{
  padding-left: 20px;
}
.listing li{
  padding-bottom: 2px;
}
</style>

<script>
import VkPage from "@/components/old-vk/VkPage.vue";

export default {
  components: {VkPage},
  data() {
    return {
      current_domain: ""
    }
  },
  created() {
    this.current_domain = `https://${window.location.hostname}/`
  }

}
</script>