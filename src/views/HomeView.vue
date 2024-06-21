<template>
  <vk-page page_title="Добро пожаловать">
    <div class="home-container">
      <p>
        <strong>ВКонтакте</strong> – универсальное средство коммуникации и поиска людей,<br>
        которым ежедневно пользуются десятки миллионов человек.
      </p>
      <p>
        С помощью <strong>ВКонтакте</strong> Вы можете:
      </p>
      <ul class="listing">
        <li>Найти людей, с которыми Вы когда-либо учились, работали или отдыхали.</li>
        <li>Узнать больше о людях, которые Вас окружают, и найти новых друзей.</li>
        <li>Всегда оставаться в контакте с теми, кто Вам дорог.</li>
      </ul>
      <div class="image-gallery">
        <div class="image">
          <img src="../resources/old-vk/images/welcome_images/dial_1.png" alt="">
        </div>
        <div class="image">
          <img src="../resources/old-vk/images/welcome_images/news_1.png" alt="">
        </div>
        <div class="image">
          <img src="../resources/old-vk/images/welcome_images/photos_1.png" alt="">
        </div>
      </div>
      <div class="button-blue button-wide register-btn">
        <router-link to="/register" style="flex: 0 0 158px">Как стать участником</router-link>
      </div>
    </div>
  </vk-page>
</template>

<style scoped lang="scss">
@import "../resources/old-vk/css/vk-base";
.home-container {
  padding: 20px 40px;
}
.home-container p {
  margin: 15px 0;
}

.home-container .listing {
  list-style: square;
  padding-left: 40px;
}

.listing li::marker{
  color: $listing-dot-color;
}

.image-gallery {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  column-gap: 40px;
}

.image {
  flex: 0 0 132px;
  cursor: pointer;
}

.image img{
  width: 132px;
  height: 100px;
}

.register-btn {
  padding-top: 25px;
  display: flex;
  justify-content: center;
}
</style>

<script>
import VkPage from "@/components/old-vk/VkPage.vue";

export default {
  components: {VkPage},
}
</script>
