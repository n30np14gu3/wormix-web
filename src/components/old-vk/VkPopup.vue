<template>
  <div class="popup">
    <h1>{{header}}</h1>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
$box-info-border: #607387;
$box-info-bg: #e7ebef;

$box-success-border: #638052;
$box-success-bg: #efffe6;

$box-warning-border: #ccb449;
$box-warning-bg: #f7f4e5;

$box-error-border: #b37262;
$box-error-bg: #ffeae6;

.popup {
  width: 100%;
  padding: 15px;
}

.popup h1 {
  padding-bottom: 3px;
}

.popup-info {
  background-color: $box-info-bg;
  border: 1px solid $box-info-border;
}

.popup-success {
  background-color: $box-success-bg;
  border: 1px solid $box-success-border;
}

.popup-success h1 {
  color: $box-success-border;
}

.popup-warning {
  background-color: $box-warning-bg;
  border: 1px solid $box-warning-border;
}

.popup-warning h1 {
  color: $box-warning-border;
}

.popup-error {
  background-color: $box-error-bg;
  border: 1px solid $box-error-border;
}

.popup-error h1 {
  color: $box-error-border;
}

</style>




<script>
export default {
  props: {
    type: String,
    header: String
  },
  data() {
    return {
      popup_type: this.type,
      popup_header: this.header
    }
  }

}
</script>