<template>
  <vk-page page_title="Вормикс">
    <!--Wormix game-->
    <iframe style="border: none" :src="api_url" width="100%" height="900">

    </iframe>
  </vk-page>
</template>

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
      this.api_url =
          `?api_id=2`
          +`&api_settings=8479`
          +`&viewer_type=2`
          +`&sid=smtp`
          +`&secret=smtp`
          +`&access_token=`
          +`&user_id=${this.user_id}`
          +`&group_id=0`+
          `&is_app_user=1`
          +`&language=0&`
          +`parent_language=0&`
          +`ad_info=dasss==`
          +`&is_secure=0`
          +`&ads_app_id=smtp`
          +`&referrer=unknown`
          +`&lc_name=smtp`
          +`&hash=`
          +`&api_url=${process.env.VUE_APP_API_BASE}`
          +`&viewer_id=${this.user_id}`
          +`&auth_key=${this.auth_token}`;
    }).catch( error => {
      console.log(error.response)
      if(error.required.status === 401 || error.required.status === 403){
        localStorage.clear()
        location.href = "/"
      }
    })
  }
}
</script>