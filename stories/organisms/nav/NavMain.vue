<template>
  <nav class="nav">
    <!--  -->
    <!-- <NavDesktop
      :links="links"
    /> -->
    <div class="nav__desktop">
      <div class="nav__desktop__brand">
        <div class="nav__desktop__logo">
          <img :src="logoSrc" draggable="false" />
        <!-- logo -->
        <!-- <img :src="require('~/assets/img/' + logo)" :alt="logo"> -->
        </div>
        <!-- <span>COMPANY</span> -->
      </div>
      <!--  -->
      <ul class="nav__desktop__list">
        <li v-for="link in links" :key="link.path">
          <!-- // TODO nuxt-link // router-link -->
          <a v-if="link.path" :to="link.path" exact-active-class="--active">
            <div class="nav__desktop__list__item">
              <span v-if="link.icon" class="material-icons">{{ link.icon }}</span>
              <span v-if="link.name">{{ link.name.toUpperCase() }}</span>
            </div>
          </a>
          <a
            v-else
            @click.prevent="onDropdown"
            exact-active-class="--active"
            role="button"
            aria-pressed="false"
            tabindex="0"
          >
            <div class="nav__desktop__list__item">
              <span v-if="link.icon" class="material-icons">{{ link.icon }}</span>
              <span v-if="link.name">{{ link.name.toUpperCase() }}</span>
            </div>
          </a>
        </li>
      </ul>
      <div class="nav__desktop__btns">
        <a :href="'tel:' + phone" class="nav__desktop__btn btn--outline">
          CALL
        </a>
        <div
          @click.prevent="onEnquire"
          @keydown.enter.prevent="onEnquire"
          class="nav__desktop__btn btn--primary"
          role="button"
          aria-pressed="false"
          tabindex="0"
        >
          ENQUIRE
        </div>
      </div>
    </div>
    <!-- only show nav toggle on mobile -->
    <div class="nav__mobile">
      <div class="nav__mobile__brand">
        <!-- logo -->
        <!-- <img :src="require('~/assets/img/' + logo)" :alt="logo"> -->
        <div class="nav__mobile__logo">
          <img :src="logoSrc" draggable="false" />
        <!-- logo -->
        <!-- <img :src="require('~/assets/img/' + logo)" :alt="logo"> -->
        </div>
        <!-- <span>COMPANY</span> -->
      </div>
      <div class="nav__mobile__btns">
        <a class="nav__mobile__btn btn--outline" :href="'tel:' + phone">
          CALL
        </a>
        <button
          @click.prevent="onEnquire"
          @keydown.enter.prevent="onEnquire"
          class="nav__mobile__btn btn--primary"
          role="button"
          aria-pressed="true"
          tabindex="0"
        >
          ENQUIRE
        </button>
      </div>
    </div>
    <div
      @click="onShowDrawer"
      class="nav__toggle"
      role="button"
      aria-pressed="true"
      tabindex="0"
    >
      <i class="material-icons">menu</i>
    </div>
    <!-- <button @click="showDrawer = !showDrawer" class="nav__toggle btn btn--outline">TOGGLE</button> -->
    <NavDrawer
      :links="links"
      :showDrawer="showDrawer"
      :dropdownItems="dropdownItems"
      @close="onCloseDrawer"
      :logoSrc="logoSrc"
      :showDropdown="showDropdown"
      @onDropdown="onDropdown"
    />
    <NavDropdown
      :items="dropdownItems"
      :showDropdown="showDropdown"
    />
  </nav>
</template>

<script>
// import NavDesktop from '@/components/Nav/NavDesktop'
import NavDrawer from './NavDrawer'
import NavDropdown from './NavDropdown'
export default {
  name: 'NavMain',
  components: {
    // NavDesktop,
    NavDrawer,
    NavDropdown
  },
  props: {
    links: {
      type: Array,
      required: true
    },
    showDrawer: {
      type: Boolean,
      required: true
    },
    showDropdown: {
      type: Boolean,
      required: true
    },
    dropdownItems: {
      type: Array,
      required: true
    },
    logoSrc: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    }
  },
  data () {
    return {
      //
      // showDrawer: false,
      // showDropdown: false,
      // showEnquire: false,
      // drawer: false,
      // phone: process.env.CONTACT_PHONE,
      // dropdownItems: [
      //   { name: 'Domestic', path: '/domestic-scaffolding/' },
      //   { name: 'Commercial', path: '/commercial-scaffolding/' },
      //   { name: 'Industrial', path: '/industrial-scaffolding/' }
      // ],
      // links: [
      //   { name: 'Home', path: '/' },
      //   { name: 'About', path: '/about/' },
      //   { name: 'Services' },
      //   { name: 'Contact', path: '/contact/' }
      //   // { name: 'Blog', path: '/blog', icon: '' }
      // ]
    }
  },
  watch: {
    // watch the route and call method
    '$route.fullPath': 'onRouteChange'
  },
  methods: {
    //
    onDropdown () {
      // FIXME avoid mutating prop
      // this.showDropdown = !this.showDropdown
      this.$emit('onDropdown')
    },
    onEnquire () {
      // TODO showEnquire
      // console.log('clicked')
      this.$emit('onEnquire');
      // this.$router.push({ path: '/contact/' })
    },
    onRouteChange () {
      // react to route changes...
      // TODO emit events instead of mutating props
      this.showDrawer = false
      this.showDropdown = false
    },
    onShowDrawer () {
      // TODO show nav drawer, avoid prop mutation
      this.$emit('onShowDrawer')
    },
    onCloseDrawer () {
      // TODO onCloseDrawer nav drawer, avoid mutating prop.
      // @onCloseDrawer="onCloseDrawer"
      this.$emit('onCloseDrawer')
    }
  }
}
</script>

<style lang="scss" scoped>
// @import "../../theme/theme.scss";
@import "./Nav.scss";
</style>
