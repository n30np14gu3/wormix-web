<template>
  <vk-page page_title="Вормикс">
    <iframe style="border: none" :src="api_url" width="100%" height="1000">

    </iframe>
  </vk-page>
</template>

<style lang="scss" scoped>

</style>

<script>
import VkPage from "@/components/old-vk/VkPage.vue";
import axios from "axios";

export default {
  components: {VkPage},
  data() {
    return {
      api_url: "",
      user_id: "",
      auth_token: ""
    }
  },
  beforeMount() {
    axios.post('/account/game').then(response => {
      this.auth_token = response.data.auth_key
      this.user_id = localStorage.getItem("USER_ID")
      this.api_url = `${process.env.VUE_GAME_URL}&api_url=${process.env.VUE_APP_API_BASE}&viewer_id=${this.user_id}&auth_key=${this.auth_token}`;
    }).catch( error => {
      console.log(error.response)
      if(error.required.status === 401 || error.required.status === 403){
        localStorage.clear()
        location.href = ""
      }
    })
  }
}
</script>