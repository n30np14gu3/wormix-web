<template>
  <div class="vk-page">
    <div class="vk-page-header" v-if="user">
      <strong>{{`${user.social_data.last_name === null ? "" : user.social_data.last_name} ${user.social_data.first_name}`}}</strong>
    </div>
    <div class="vk-page-content">
      <div class="vk-profile">
        <div class="left-side">
          <div class="left-container">
            <div class="main-photo">
              <img :src="photo_url + 'photos/users/' + user.social_data.photo" alt="" style="width: 100%">
            </div>
            <div class="photo-pad" style="padding-top: 5px;" v-if="isMyAccount()">
              <router-link to="/settings" class="button-blue button-wide" style="display: block; text-decoration: none">Изменить фото</router-link>
            </div>
          </div>
        </div>
        <div class="main-profile">
          <div class="profile-container">
            <div class="main-info">
              <div style="padding-bottom: 5px"><span id="profile-name">{{user.social_data.last_name}} {{user.social_data.first_name}}</span></div>
              <div><span>Дата регистрации: {{new Date(user.created_at).toLocaleDateString("ru-RU")}}</span></div>
            </div>
            <div class="profile-details">
              <table class="profile-data">
                <tr>
                  <td class="data-key">Уровень</td>
                  <td>{{user.worm_data.level}}</td>
                </tr>
                <tr>
                  <td class="data-key">Рейтинг</td>
                  <td>{{user.user_profile.rating}}</td>
                </tr>
                <tr>
                  <td class="data-key">Скорость реакции</td>
                  <td>{{user.user_profile.reaction_rate}}</td>
                </tr>
                <tr>
                  <td class="data-key">Расса</td>
                  <td>{{user.worm_data.race}}</td>
                </tr>
                <tr>
                  <td class="data-key">Рубины</td>
                  <td>{{user.user_profile.real_money}}</td>
                </tr>
                <tr>
                  <td class="data-key">Фузы</td>
                  <td>{{user.user_profile.money}}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../resources/old-vk/css/vk-colors.sass";
.vk-page{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  width: 100%;
  border: solid 1px $light-border-color;
  border-top: none;
}
.vk-page-header {
  width: 100%;
  grid-area: 1 / 1 / 2 / 2;
  text-align: left;
  background-color: #f5f5f5;
  padding: 7px;
}

.vk-page-content{
  width: 100%;
  height: 100%;
  grid-area: 2 / 1 / 3 / 2;
}
.vk-profile {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  max-height: 300px;
}
.left-side { grid-area: 1 / 1 / 2 / 3; }
.main-profile {  grid-area: 1 / 3 / 2 / 7; }


.left-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
}
.main-photo {
  grid-area: 1 / 1 / 7 / 2;
}
.photo-pad {
  grid-area: 7 / 1 / 8 / 2;
}

.profile-container {
  display: grid;
  padding-top: 5px;
  padding-left: 5px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.main-info {
  grid-area: 1 / 1 / 2 / 2;
  border-bottom: solid $light-border-color 1px;
  padding-bottom: 5px;
}
.profile-details {
  grid-area: 2 / 1 / 11 / 2;
  padding-top: 10px;
}
#profile-name {
  font-weight: bold;
  color: $font-blue;
}
.profile-data {
  width: 100%;
}
.profile-data td{
  margin-bottom: 5px;
}
.data-key{
  color: $font-light-gray;
}
td{
  padding-top:5px;
  padding-bottom:5px;
}
</style>

<script>
import axios from "axios";
import router from "@/routes";

export default {
  components: { },
  data() {
    return {
      router_path: this.$route.params['profile_id'],
      photo_url: '',
      user: {
        login: "",
        created_at: "2020-01-01",
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
      },
      races: {
        0: "Червяк",
        1: "Бык",
        2: "Боксер",
        3: "Демон",
        4: "Кролик",
        5: "Зомби",
        6: "Заяц",
      }
    }
  },
  methods: {
    getRace(hat){
      if(hat < 50)
        return hat;

      return Math.floor((hat - 1000) / 500);
    },
    isMyAccount(){
      return this.router_path === undefined || this.router_path === this.user.id
    }
  },
  created() {
    this.photo_url = axios.defaults.baseURL
    axios.get(`/account/${this.router_path === undefined ? '' : `info/${this.router_path}`}`).then(response => {
      this.user = response.data.data
      this.user.worm_data.race = this.races[this.getRace(this.user.worm_data.hat)]
    }).catch( error => {
      console.log(error.response)
      if(error.response.status === 401 || error.response.status === 403){
        localStorage.clear()
        location.href = "/";
      }
      if(error.response.status === 404){
        location.href = "/profile";
      }

    })
  }
}
</script>