<template>
  <div id="app">
    <VButton label="button" secondary />
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
