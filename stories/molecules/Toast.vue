<template>
  <div class="toast-wrapper">
    <div v-if="show" class="toast bg--primary text--white active">
      <span class="material-icons">{{ icon }}</span>
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    show: Boolean,
    icon: {
      type: String,
      default: "info",
    },
    msg: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.onShow();
  },
  updated() {
    this.onShow();
  },
  methods: {
    //
    onShow() {
      if (this.show) {
        setTimeout(() => {
          this.$emit("timeout"); // emit timeout event to parent
        }, this.duration); // after set duration
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Toast.scss";
</style>