<template>
  <div v-if="showDropdown" class="nav__dropdown">
    <ul class="nav__desktop__list">
      <li
        v-for="item in items"
        :key="item.path"
        class="nav__desktop__list__item"
      >
        <router-link
          v-if="item.path"
          :to="item.path"
          exact-active-class="--active"
        >
          <div class="nav__desktop__list__item--flex">
            <span>{{ item.name.toUpperCase() }}</span>
            <span class="icons"><chevron-right medium /></span>
          </div>
          <p>{{ item.copy }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import ChevronRight from "../../atoms/icons/ChevronRight.vue";

export default {
  components: {
    ChevronRight,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    showDropdown: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      //
    };
  },
};
</script>

<style lang="scss" scoped>
.nav__dropdown {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  span,
  p {
    color: var(--light);
  }
}
.nav__desktop__list {
  display: flex;
  flex-direction: row;
  margin: 1rem;
  color: var(--light);
  justify-content: center;
  &__item {
    display: block;
    border: 1px solid rgba(255, 255, 255, 0.19);
    border-radius: 8px;
    width: 313px;
    margin: 0.5rem;
    p {
      text-align: left;
    }
    a {
      display: block;
      padding: 1rem;
      height: 100%;
    }
    &--flex {
      display: flex;
      justify-content: space-between;
    }
  }
}

a.nuxt-link-active,
a.--active {
  background: rgba(255, 255, 255, 0.19);
  border-radius: 8px;
  text-decoration: none;
  span.icons {
    transform: rotate(90deg);
  }
}
.icons {
  vertical-align: top;
}
</style>
