<template>
  <div>
    <div v-if="show" class="modal bg--white text--black">
      <div class="modal-content">
        <h4>{{ title }}</h4>
        <p>{{ msg }}</p>
      </div>
      <div class="modal-footer">
        <Button left label="CONFIRM" outline @click="$emit('confirm')" />
        <Button left label="CLOSE" primary @click="$emit('close')" />
      </div>
    </div>
    <div v-if="show" class="modal-overlay" />
  </div>
</template>

<script>
import Button from "../atoms/Button.vue";
export default {
  name: "Modal",
  components: {
    Button,
  },
  props: {
    show: Boolean,
    title: {
      type: String,
      required: true,
    },
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Modal.scss";
</style>