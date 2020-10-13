<template>
  <div v-if="showDrawer" class="nav__drawer">
    <!--  -->
    <div class="nav__drawer__wrapper">
      <div class="nav__drawer__top">
        <div class="nav__drawer__brand">
          <!-- logo -->
          <!-- <img :src="require('~/assets/img/' + logo)" :alt="logo"> -->
          <div class="nav__drawer__logo">
          <!-- logo -->
          <!-- <img :src="require('~/assets/img/' + logo)" :alt="logo"> -->
          </div>
          <span>COMPANY</span>
        </div>
        <!-- <div class="nav__drawer__brand"></div> -->
        <div
          @click="$emit('close')"
          class="btn"
          role="button"
          aria-pressed="false"
          tabindex="0"
        >
          <span class="material-icons">close</span>
        </div>
      </div>
      <ul class="nav__drawer__list">
        <li v-for="link in links" :key="link.path">
          <nuxt-link v-if="link.path" :to="link.path" exact-active-class="--active">
            <div class="nav__menu__wrapper">
              <span v-if="link.icon" class="material-icons">{{ link.icon }}</span>
              <span>{{ link.name }}</span>
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
            <div class="nav__menu__wrapper">
              <span v-if="link.icon" class="material-icons">{{ link.icon }}</span>
              <span>{{ link.name }}</span>
            </div>
            <ul v-if="showDropdown" class="nav__drawer__dropdown">
              <li v-for="item in dropdownItems" :key="item.name">
                <nuxt-link v-if="item.path" :to="item.path" exact-active-class="--active">
                  <div class="nav__drawer__dropdown">{{ item.name }}</div>
                </nuxt-link>
              </li>
            </ul>
          </a>
        </li>
      </ul>
    </div>
    <div class="nav__drawer__overlay" />
  </div>
</template>

<script>
export default {
  name: 'NavDrawer',
  props: {
    links: {
      type: Array,
      required: true
    },
    showDrawer: {
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
      phone: process.env.CONTACT_PHONE,
      showDropdown: true
    }
  },
  methods: {
    //
    dropdown () {
      this.showDropdown = !this.showDropdown
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../theme/theme.scss";
@import "./Nav.scss";
</style>
