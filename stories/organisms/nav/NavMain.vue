<template>
  <nav class="nav">
    <div class="nav__desktop">
      <div class="nav__desktop__brand">
        <div class="nav__desktop__logo">
          <img :src="logoSrc" draggable="false" />
        </div>
      </div>
      <!--  -->
      <ul class="nav__desktop__list">
        <li v-for="link in links" :key="link.path">
          <router-link
            v-if="link.path"
            :to="link.path"
            exact-active-class="--active"
          >
            <div class="nav__desktop__list__item">
              <span v-if="link.icon" class="material-icons">
                {{ link.icon }}
              </span>
              <span v-if="link.name">{{ link.name.toUpperCase() }}</span>
            </div>
          </router-link>
          <a
            v-else
            exact-active-class="--active"
            role="button"
            aria-pressed="false"
            tabindex="0"
            @click.prevent="onDropdown"
          >
            <div class="nav__desktop__list__item">
              <span v-if="link.icon" class="material-icons">
                {{ link.icon }}
              </span>
              <span v-if="link.name">{{ link.name.toUpperCase() }}</span>
            </div>
          </a>
        </li>
      </ul>
      <div class="nav__desktop__btns">
        <a :href="'tel:' + phone" class="nav__desktop__btn btn btn--outline">
          CALL
        </a>
        <div
          class="nav__desktop__btn btn btn--secondary"
          role="button"
          aria-pressed="false"
          tabindex="0"
          @click.prevent="onEnquire"
          @keydown.enter.prevent="onEnquire"
        >
          ENQUIRE
        </div>
      </div>
    </div>
    <!-- only show nav toggle on mobile -->
    <div class="nav__mobile">
      <div class="nav__mobile__brand">
        <div class="nav__mobile__logo">
          <img :src="logoSrc" draggable="false" />
        </div>
      </div>
      <div class="nav__mobile__btns">
        <a class="nav__mobile__btn btn btn--outline" :href="'tel:' + phone">
          CALL
        </a>
        <button
          class="nav__mobile__btn btn btn--secondary"
          role="button"
          aria-pressed="true"
          tabindex="0"
          @click.prevent="onEnquire"
          @keydown.enter.prevent="onEnquire"
        >
          ENQUIRE
        </button>
      </div>
    </div>
    <!-- toggle hidden on desktop with display:none -->
    <div
      class="nav__toggle"
      role="button"
      aria-pressed="true"
      tabindex="0"
      @click="onShowDrawer"
    >
      <i v-if="!showDrawer" class="material-icons">menu</i>
      <i v-else class="material-icons">close</i>
    </div>
    <NavDrawer
      :links="links"
      :show-drawer="showDrawer"
      :dropdown-items="dropdownItems"
      :logo-src="logoSrc"
      @close="onCloseDrawer"
      @onDropdown="onDropdown"
    />
    <NavDropdown :items="dropdownItems" :show-dropdown="showDropdown" />
  </nav>
</template>

<script>
import NavDrawer from "./NavDrawer";
import NavDropdown from "./NavDropdown";
export default {
  components: {
    NavDrawer,
    NavDropdown,
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
    showDrawer: {
      type: Boolean,
      required: true,
    },
    showDropdown: {
      type: Boolean,
      required: true,
    },
    dropdownItems: {
      type: Array,
      required: true,
    },
    logoSrc: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      //
    };
  },
  watch: {
    // watch the route and call method
    "$route.fullPath": "onRouteChange",
  },
  methods: {
    //
    onDropdown() {
      this.$emit("onDropdown");
    },
    onEnquire() {
      this.$emit("onEnquire");
    },
    onRouteChange() {
      // react to route changes...
      this.$emit("onReset");
    },
    onShowDrawer() {
      this.$emit("onShowDrawer");
    },
    onCloseDrawer() {
      this.$emit("onCloseDrawer");
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../../atoms/button/Button.scss';
@use './Nav.scss';
</style>
