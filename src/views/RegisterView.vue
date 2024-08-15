<template>
  <vk-page page_title="Добро пожаловать">
    <div class="home-container">
      <p>
        <strong>ВКонтакте</strong> – универсальное средство коммуникации и поиска людей,<br>
        которым ежедневно пользуются десятки миллионов человек.
      </p>
      <h1>Регистрация</h1>
      <form style="padding: 20px 36%"  @submit="doSignUp">
        <input placeholder="Логин" v-model="this.login_data.login" type="text" required>
        <input placeholder="Пароль" v-model="this.login_data.password" type="password" required>
        <input placeholder="Повторите ппароль" v-model="this.login_data.password_confirmation" type="password" required>
        <div class="button-blue button-wide">
          <button>Регистрация</button>
        </div>
      </form>
      <h1>Зачем мне создавать страницу ВКонтакте?</h1>
      <vk-features/>
    </div>
  </vk-page>
</template>

<style scoped lang="scss">
@import "../resources/old-vk/css/vk-colors.sass";
form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

form input{
  padding: 5px 3px;
  margin-bottom: 6px;
  border: solid 1px $input-border-color;
}
form input:last-child{
  margin-bottom: 0;
}
</style>

<script>

import VkPage from "@/components/old-vk/VkPage.vue";
import VkFeatures from "@/components/old-vk/VkFeatures.vue";
import axios from "axios";

export default {
  components: {VkFeatures, VkPage},
  data() {
    return {
      login_data: {
        login: "",
        password: "",
        password_confirmation: "",
      }
    }
  },
  methods: {
    doSignUp(e) {
      e.preventDefault()
      axios.post('/account/sign_up', this.login_data).then(response => {
        localStorage.setItem("API_TOKEN", response.data.auth_token)
        localStorage.setItem("USER_ID", response.data.id)
        location.href = "/"
      }).catch( error => {
        console.log(error)
        if(error.response !== undefined){
          if(error.response.status === 422){
            alert(error.response.data.message)
          }
          else
            alert("Произошла неизвестная ошибка")
        }
      })
    }
  }
}
</script>
