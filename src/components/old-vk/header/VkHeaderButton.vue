<template>
  <div class="menu-button">
    <button>{{btn_title}}</button>
  </div>
</template>

<style scoped>
.main-menu .menu-button {
  flex: 0 0 80px;
  height: 100%;
  background: transparent;
}
.main-menu .menu-button button {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  border: none;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 700;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.42);
  font-size: 12px;
  cursor: pointer;
}

.main-menu .menu-button button:hover {
  background: rgba(0, 0, 0, 0.16);
}

.main-menu .menu-button button:active {
  background: rgba(0, 0, 0, 0.3);
}
</style>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {
      btn_title: this.title
    }
  }
}
</script>