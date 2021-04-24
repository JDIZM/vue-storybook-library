<template>
  <div v-if="showDrawer" class="nav__drawer text--secondary">
    <!--  -->
    <div class="nav__drawer__wrapper">
      <div class="nav__drawer__top">
      </div>
      <ul class="nav__drawer__list">
        <li v-for="link in links" :key="link.path">
          <router-link v-if="link.path" :to="link.path" exact-active-class="--active">
            <div class="nav__menu__wrapper">
              <span v-if="link.icon" class="material-icons">{{ link.icon }}</span>
              <span>{{ link.name }}</span>
            </div>
          </router-link>
          <a
            v-else
            @click.prevent="onDropdown"
            exact-active-class="--active"
            role="button"
            aria-pressed="false"
            tabindex="0"
          >
            <div class="nav__menu__wrapper">
              <span v-if="link.icon" class="material-icons">{{ link.icon }}</span>
              <span>{{ link.name }}</span>
            </div>
          </a>
           <ul v-if="showDropdown" class="nav__drawer__dropdown">
              <li v-for="item in dropdownItems" :key="item.name">
                <!-- // TODO router-link // router-link -->
                <a v-if="item.path" :to="item.path" exact-active-class="--active">
                  <div class="nav__drawer__dropdown">{{ item.name }}</div>
                </a>
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
    }
  },
  data () {
    return {
      // 
    }
  },
  methods: {
    //
    onDropdown () {
      this.$emit('onDropdown')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./Nav.scss";
</style>