<template>
  <div class="vk-page">
    <div class="vk-page-header" v-if="user">
      <strong>{{user.social_data.first_name}}</strong>
    </div>
    <div class="vk-page-content">
      <slot></slot>
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
  height: 100%;
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
</style>

<script>
import axios from "axios";
import router from "@/routes";

export default {
  components: { },
  data() {
    return {
      router_path: this.$route.params['profile_id'],
      user: {
        social_data: {
          first_name: "",
        }
      }
      }
  },
  methods: {

  },
  created() {
    axios.get('/account').then(response => {
      this.user = response.data.data
    }).catch( error => {
      console.log(error.response)
      if(error.response.status === 401 || error.response.status === 403){
        localStorage.clear()
        router.push('/login')
      }
    })
  },
  beforeRouteEnter(to, from, next){
    // if(to.name === "profile_default")
    // {
    //   next({
    //     path: '/'
    //   });
    // }
    next();
  }
}
</script>