<template>
  <div class="dropdowns">
    <div v-for="dropdown in dropdowns" :key="dropdown.title" class="dropdown pb--2 pt--2">
      <div class="dropdown__trigger" :class="{ active: dropdown.isActive }" @click="onActive(dropdown)">
        {{ dropdown.title }}
      </div>
      <div class="dropdown__content" :class="{ active: dropdown.isActive }">
        <p>
          {{ dropdown.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dropdowns: {
      type: Array,
      required: true
    }
  },
  methods: {
    onActive(dropdown) {
      dropdown.isActive = !dropdown.isActive;
      this.$emit("click", dropdown);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Dropdown.scss";
.dropdowns {
  width: 100%;
}
</style>
