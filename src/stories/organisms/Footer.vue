<template>
  <footer>
    <div class="footer">
      <div class="footer__grid">
        <div class="footer__grid__item brand">
          <div class="brand__logo">
            <img :src="logoSrc" draggable="false">
          </div>
          <div class="brand__name">
            <h3 class="brand__name__1">
              VERTEX
            </h3>
          </div>
        </div>
        <div class="footer__grid__item social">
          <h3>SOCIAL</h3>
          <ul>
            <li><a href="https://www.linkedin.com/company/vertex-scaffolding-solutions-ltd/" aria-label="Find us on LinkedIn"><i class="fab fa-linkedin" /></a></li>
            <li><a href="https://www.facebook.com/VERTEXScaffoldingSolutions/" aria-label="Find us on Facebook"><i class="fab fa-facebook-square" /></a></li>
            <!-- <li><a href="#" aria-label="Find us on Twitter"><i class="fab fa-twitter-square" /></a></li> -->
          </ul>
        </div>
        <div class="footer__grid__item info">
          <h3>COMPANY INFO</h3>
          <p>VERTEX SCAFFOLDING</p>
          <p>349 Bury Old Road <br> Manchester <br> M25 1PY</p>
        </div>
      </div>
      <div class="copy">
        <p>&copy; {{ name }} - Company number {{ companyNo }} - <a :href="privacy">Privacy</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
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
  }
}
</script>

<style lang="scss">
  @import './Footer.scss';
  @import '../theme/theme.scss';
</style>
