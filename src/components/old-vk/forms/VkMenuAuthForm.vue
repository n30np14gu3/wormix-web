<template>
  <form @submit="doLogin">
    <label>Имя пользователя:</label>
    <input type="text" v-model="this.login" required>

    <label>Пароль:</label>
    <input type="password"  v-model="this.password" required>

    <div class="button-blue button-wide" style="padding-top: 8px">
      <button>Войти</button>
    </div>
    <!--
    <router-link to="/forgot_password" style="text-align: center; padding-top: 5px">Забыли пароль?</router-link>
    -->
  </form>
</template>

<style scoped lang="scss">
@import "../../../resources/old-vk/css/vk-base.sass";
form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

form label{
  color: $font-light-gray;
  padding-bottom: 3px;
  padding-top: 8px;
}

form label:first-child{
  padding-top: 0;
}

form input{
  padding: 3px 2px;
  border: solid 1px $input-border-color;
}
</style>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    doLogin(e){
      e.preventDefault()
      axios.post('/account/sign_in', {
        'login': this.login,
        'password': this.password
      }).then(response => {
        localStorage.setItem("API_TOKEN", response.data.auth_token)
        localStorage.setItem("USER_ID", response.data.id)
        this.login = ""
        this.password = ""
        location.href = "/profile"
      }).catch( error => {
        alert("Неверное имя пользователя или пароль")
      })
    }
  }
}
</script>