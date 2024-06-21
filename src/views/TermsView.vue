<template>
  <vk-page page_title="Пользовательское соглашение">
    <div class="terms-container">
      <div class="terms-block">
        <h1>Правила пользования сайтом</h1>
        <p>TODO: Закончить правила (https://web.archive.org/web/20110716125923/http://vkontakte.ru/help.php?page=terms)</p>
      </div>

      <div class="terms-block">
        <h1>Полный текст лицензии использования</h1>
        <p>MIT License</p><br>
        <p>Copyright (c) 2024 shockbyte</p><br>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining a copy<br>
          of this software and associated documentation files (the "Software"), to deal<br>
          in the Software without restriction, including without limitation the rights<br>
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br>
          copies of the Software, and to permit persons to whom the Software is<br>
          furnished to do so, subject to the following conditions:<br>
        </p><br>

        <p>
          The above copyright notice and this permission notice shall be included in all<br>
          copies or substantial portions of the Software.
        </p><br>

        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br>
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br>
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE<br>
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br>
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,<br>
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE<br>
          SOFTWARE.
        </p>
      </div>
    </div>
  </vk-page>
</template>

<style scoped lang="scss">
.terms-container{
  padding: 20px 10px;
}

.terms-block {
  padding-bottom: 20px;
}
</style>

<script>
import VkPage from "@/components/old-vk/VkPage.vue";

export default {
  components: {VkPage}

}
</script>