<template>
  <div v-if="showDrawer" class="nav__drawer text--secondary">
    <!--  -->
    <div class="nav__drawer__wrapper">
      <div class="nav__drawer__top"></div>
      <ul class="nav__drawer__list">
        <li v-for="link in links" :key="link.path">
          <router-link
            v-if="link.path"
            :to="link.path"
            exact-active-class="--active"
          >
            <div class="nav__menu__wrapper">
              <span v-if="link.icon" class="material-icons">
                {{ link.icon }}
              </span>
              <span>{{ link.name }}</span>
            </div>
          </router-link>
          <!-- dropdown item only -->
          <a
            v-else
            exact-active-class="--active"
            role="button"
            aria-pressed="false"
            tabindex="0"
            @click.prevent="onDropdown"
          >
            <div class="nav__menu__wrapper">
              <span v-if="link.icon" class="material-icons">
                {{ link.icon }}
              </span>
              <span>{{ link.name }}</span>
            </div>
          </a>
          <ul v-if="showDropdown && !link.path" class="nav__drawer__dropdown">
            <li v-for="item in dropdownItems" :key="item.name">
              <router-link
                v-if="item.path"
                :to="item.path"
                exact-active-class="--active"
              >
                <div class="nav__drawer__dropdown">{{ item.name }}</div>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="nav__drawer__overlay" />
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
    showDrawer: {
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
  },
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    onDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Nav.scss";
</style>
