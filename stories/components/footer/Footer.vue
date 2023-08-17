<template>
  <footer class="footer">
    <div class="footer__grid">
      <div class="footer__grid__item brand">
        <img class="brand__logo" :src="logoSrc" draggable="false" />
      </div>
      <div class="footer__grid__item social">
        <slot name="social"></slot>
      </div>
      <div class="footer__grid__item info">
        <slot name="address"></slot>
      </div>
    </div>
    <div class="copy">
      <p>
        &copy; {{ currentDate }} {{ companyName }}
        <span v-if="companyNo.length"> - Company number {{ companyNo }} - </span>
        <a v-if="privacy.length" :href="privacy">Privacy</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    companyName: {
      type: String,
      required: true
    },
    companyNo: {
      type: String,
      required: false,
      default: ""
    },
    privacy: {
      type: String,
      required: false,
      default: ""
    },
    logoSrc: {
      type: String,
      required: true
    }
  },
  computed: {
    currentDate() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss">
@use "./Footer.scss";
</style>
