<template>
  <vk-page page_title="Настройки">

    <!--User profile settings-->
    <div class="container">
      <h1>Настройки профиля</h1>
      <form>
        <label>Рубины</label>
        <input type="number" min="0" :value="user.user_profile.real_money">

        <label>Фузы</label>
        <input type="number" min="0" :value="user.user_profile.money">

        <label>Скорость реакции</label>
        <input type="number" min="0" :value="user.user_profile.reaction_rate">

        <label>Рейтинг</label>
        <input type="number" min="0" :value="user.user_profile.rating">

        <button class="button-blue" type="submit">Сохранить</button>
      </form>
    </div>

    <!-- Worm settings -->
    <div class="container">
      <h1>Настройки персонажа</h1>
      <form>
        <label>Уровень</label>
        <input type="number" min="0" max="30" :value="user.worm_data.level">

        <label>Атака</label>
        <input type="number" min="0" max="60" :value="user.worm_data.attack">

        <label>Броня</label>
        <input type="number" min="0" maxlength="" :value="user.worm_data.armor">

        <label>Расса</label>
        <select :value="user.worm_data.race">
          <option value="0">Червяк</option>
          <option value="2">Боксер</option>
          <option value="3">Демон</option>
          <option value="4">Кролик</option>
          <option value="5">Зомби</option>
          <option value="6">Кот</option>
        </select>

        <button class="button-blue" type="submit">Сохранить</button>
      </form>
    </div>

    <!-- User battle settings -->
    <div class="container">
      <h1>Настройки арены</h1>
      <form>
        <label>Количество миссий</label>
        <input type="number" min="0" :value="user.battle_info.battles_count">

        <label>Текущая миссия</label>
        <input type="text" min="0" :value="user.battle_info.mission_id">
        <button class="button-blue" type="submit">Сохранить</button>
      </form>
    </div>

    <!-- User settings -->
    <div class="container">
      <h1>Настройки пользователя</h1>
      <form>
        <label>Логин</label>
        <input type="text" :value="user.login">

        <label>Пароль</label>
        <input type="password">

        <label>Повторите пароль</label>
        <input type="password">
        <button class="button-blue" type="submit">Сохранить</button>
      </form>
    </div>

    <!-- User settings -->
    <div class="container" @submit="saveSocialData">
      <h1>Социальные настройки</h1>
      <form>
        <label>Фамилия</label>
        <input type="text" :value="user.social_data.last_name">

        <label>Имя</label>
        <input type="text" :value="user.social_data.first_name">
        <button class="button-blue" type="submit">Сохранить</button>
      </form>
    </div>

    <!-- Avatar settings -->
    <div class="container">
      <h1>Смена изображения</h1>
      <form>
        <label>Аватар</label>
        <input type="file" accept="image/jpeg,image/png">
        <button class="button-blue" type="submit">Сохранить</button>
      </form>
    </div>
  </vk-page>
</template>
<style scoped lang="scss">
@import "../resources/old-vk/css/vk-base.sass";

form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

form label{
  color: $font-light-gray;
  padding-bottom: 3px;
  padding-left: 1px;
}

form input,
form select{
  padding: 3px 2px;
  border: solid 1px $input-border-color;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input {
  -moz-appearaance:textfield;
  appearance: textfield;
  margin: 0;
}

form .button-blue {
  margin-top: 4px;
  justify-content: left;
  width: 100px;
}
</style>

<script>
import VkPage from "@/components/old-vk/VkPage.vue";
import axios from "axios";
import router from "@/routes";

export default {
  components: {VkPage},
  data() {
    return {
      user: {
        login: "",
        social_data: {
          first_name: "",
          last_name: "",
          photo: ""
        },
        user_profile: {
          money: 0,
          real_money: 0,
          rating: 0,
          reaction_rate: 0
        },
        worm_data: {
          level: 0,
          armor: 0,
          attack: 0,
          hat: 0,
          race: 0
        },
        battle_info: {
          battles_count: 0,
          mission_id: 0
        }
      }
    }
  },
  created() {
    axios.get('/account').then(response => {
      this.user = response.data.data
      this.user.worm_data.race = this.getRace(this.user.worm_data.hat)
    }).catch( error => {
      console.log(error.response)
      if(error.response.status === 401 || error.response.status === 403){
        localStorage.clear()
        router.push('/login')
      }
    })
  },
  methods: {
    saveSocialData(e){
      e.preventDefault()
    },
    getRace(hat){
      if(hat < 50)
        return hat;

      return (hat - 1000) / 500;
    }
  }
}

</script>
