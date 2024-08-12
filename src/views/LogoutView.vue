<template>
  <p>Logout...</p>
</template>
<script>
import router from "@/routes";
export default {

  beforeMount() {
    localStorage.clear()
    router.push('/login')
  }
}
</script>