<template>
  <div id="app">
    <VButton label="button" />
  </div>
</template>

<script>
// test registered component imports
import { VButton } from "./components";
export default {
  created() {
    // test imported components
    console.log(VButton);
  },
};
</script>

<style lang="scss">
// access scss vars
@import "../theme/_vars.scss";
#app {
  // use map-get for scss vars
  background-color: map-get($colours, secondary);
  // use base css vars
  background-color: var(--primary);
}
</style>
