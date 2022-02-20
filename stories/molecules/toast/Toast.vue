<template>
  <div class="toast-wrapper">
    <div v-if="show" class="toast" :class="states">
      <span class="icons">
        <slot />
      </span>
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    msg: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    destruct: Boolean,
    success: Boolean,
  },
  computed: {
    states() {
      return {
        "--success": this.success,
        "--destruct": this.destruct,
        "--active": this.show,
      };
    },
  },
  mounted() {
    this.onShow();
  },
  updated() {
    this.onShow();
  },
  methods: {
    onShow() {
      if (this.show) {
        setTimeout(() => {
          this.$emit("timeout");
        }, this.duration);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Toast.scss";
</style>
