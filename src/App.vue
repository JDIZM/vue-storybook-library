<template>
  <div id="app">
    <VPagination
      :range-length="10"
      :total-pages="20"
      :current-page="page"
      @click="pageHandler"
      @next="pageHandler"
      @prev="pageHandler"
    />
  </div>
</template>

<script>
// test registered component imports
import { VPagination } from "./components";
export default {
  data() {
    return {
      page: 6,
    };
  },
  created() {
    // test imported components
    console.log(VPagination);
  },
  methods: {
    pageHandler(e) {
      console.log(e);
      this.page = e;
    },
  },
};
</script>

<style lang="scss">
// access scss vars
@use "theme/helpers" as *;
#app {
  // use map-get for scss vars
  width: map-get($breakpoints, md);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  // use base css vars
  background-color: var(--primary);
}
</style>
