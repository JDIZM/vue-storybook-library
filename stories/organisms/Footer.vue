<template>
  <footer class="bg--primary text--white">
    <div class="footer">
      <div class="footer__grid">
        <div class="footer__grid__item brand">
          <div class="brand__logo">
            <img :src="logoSrc" draggable="false" />
          </div>
          <!-- <div class="brand__name">
          </div> -->
        </div>
        <div class="footer__grid__item social">
          <h3>SOCIAL</h3>
          <ul>
            <li v-for="link in social" :key="link.name">
              <a
                :href="link.path"
                :aria-label="link.aria"
                ><i :class="link.iconClass" /></a>
            </li>
            <!-- <li><a href="#" aria-label="Find us on Twitter"><i class="fab fa-twitter-square" /></a></li> -->
          </ul>
        </div>
        <div class="footer__grid__item info">
          <h3>COMPANY INFO</h3>
          <p>{{ name }}</p>
          <p>
            {{ address[0] }} <br />
            {{ address[1] }} <br />
            {{ address[2] }}
          </p>
        </div>
      </div>
      <div class="copy">
        <p>
          &copy; {{ name }} - Company number {{ companyNo }} -
          <a :href="privacy">Privacy</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
// FIXME duplicate keys
export default {
  name: "Footer",
  props: {
    name: {
      type: String,
      required: true,
    },
    companyNo: {
      type: String,
      required: true,
    },
    privacy: {
      type: String,
      required: true,
    },
    logoSrc: {
      type: String,
      required: true,
    },
    address: {
      type: Array,
      required: true,
    },
    social: {
      type: Array,
      required: true,
      // default: () => {
      //   [{linkedin: 'https://linkedin.com'}]
      // } 
    }
  },
};
</script>

<style lang="scss">
// import the theme first for global variables
// @import "../theme/theme.scss";
@import "./Footer.scss";
</style>
