<template>
  <div v-if="showDropdown" class="nav__dropdown bg--primary">
    <ul>
      <li v-for="item in items" :key="item.name" class="nav__dropdown__item">
        <!-- FIXME links -->
        <a v-if="item.path" :to="item.path" exact-active-class="--active">
          <div class="nav__desktop__list__item">
            <span v-if="item.icon" class="material-icons text--white">{{ item.icon }}</span>
            <span class="text--white">{{ item.name.toUpperCase() }}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavDropdown',
  props: {
    items: {
      type: Array,
      required: true
    },
    showDropdown: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
// @import "../../theme/theme.scss";
@import "./Nav.scss";
</style>
