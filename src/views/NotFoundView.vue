<template>
  <div style="padding: 10px">
    <vk-popup type="error" header="Страница не найдена" class="popup-error"/>
  </div>
</template>

<script>
import VkPopup from "@/components/old-vk/VkPopup.vue";

export default {
  components: {VkPopup},
  beforeMount() {
    document.title = "Not Found";
  }
}
</script>