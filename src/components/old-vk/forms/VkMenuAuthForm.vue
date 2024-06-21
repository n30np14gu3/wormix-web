<template>
  <form>
    <label>E-mail:</label>
    <input type="email" required>

    <label>Пароль:</label>
    <input type="password" required>

    <div class="button-blue button-wide" style="padding-top: 8px">
      <button>Войти</button>
    </div>
    <router-link to="/forgot_password" style="text-align: center; padding-top: 5px">Забыли пароль?</router-link>
  </form>
</template>

<style scoped lang="scss">
@import "../../../resources/old-vk/css/vk-colors.sass";
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
export default {

}
</script>