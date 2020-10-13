<template>
  <nav class="nav">
    <!--  -->
    <!-- <NavDesktop
      :links="links"
    /> -->
    <div class="nav__desktop">
      <div class="nav__desktop__brand">
        <div class="nav__desktop__logo">
        <!-- logo -->
        <!-- <img :src="require('~/assets/img/' + logo)" :alt="logo"> -->
        </div>
        <!-- <span>COMPANY</span> -->
      </div>
      <!--  -->
      <ul class="nav__desktop__list">
        <li v-for="link in links" :key="link.path">
          <nuxt-link v-if="link.path" :to="link.path" exact-active-class="--active">
            <div class="nav__desktop__list__item">
              <span v-if="link.icon" class="material-icons">{{ link.icon }}</span>
              <span v-if="link.name">{{ link.name.toUpperCase() }}</span>
            </div>
          </nuxt-link>
          <a
            v-else
            @click.prevent="dropdown"
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
        <a :href="'tel:' + phone" class="nav__desktop__btn btn--secondary">
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
        <!-- logo -->
        <!-- <img :src="require('~/assets/img/' + logo)" :alt="logo"> -->
        </div>
        <!-- <span>COMPANY</span> -->
      </div>
      <div class="nav__mobile__btns">
        <a class="nav__mobile__btn btn--secondary" href="tel:12345678">
          CALL
        </a>
        <div
          @click.prevent="onEnquire"
          @keydown.enter.prevent="onEnquire"
          class="nav__mobile__btn btn--primary"
          role="button"
          aria-pressed="true"
          tabindex="0"
        >
          ENQUIRE
        </div>
      </div>
    </div>
    <div
      @click="showDrawer = !showDrawer"
      class="nav__toggle"
      role="button"
      aria-pressed="true"
      tabindex="0"
    >
      <i class="material-icons">menu</i>
    </div>
    <!-- <button @click="showDrawer = !showDrawer" class="nav__toggle btn btn--secondary">TOGGLE</button> -->
    <NavDrawer
      :links="links"
      :showDrawer="showDrawer"
      :dropdownItems="dropdownItems"
      @close="showDrawer = false"
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
    }
  },
  data () {
    return {
      //
      // showDrawer: false,
      // showDropdown: false,
      showEnquire: false,
      drawer: false,
      phone: process.env.CONTACT_PHONE,
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
    '$route.fullPath': 'routeChange'
  },
  methods: {
    //
    dropdown () {
      this.showDropdown = !this.showDropdown
    },
    onEnquire () {
      // TODO showEnquire
      console.log('clicked')
      // this.$router.push({ path: '/contact/' })
    },
    routeChange () {
      // react to route changes...
      this.showDrawer = false
      this.showDropdown = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../theme/theme.scss";
@import "./Nav.scss";
</style>
