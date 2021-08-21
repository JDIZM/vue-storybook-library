<template>
  <div id="app"></div>
</template>

<script>
// test imports
import { VButton } from "./components";
import { VImg } from "./components";
import { VDropdown } from "./components";
import { VFormInput } from "./components";
import { VModal } from "./components";
import { VToast } from "./components";
import { VSlider } from "./components";
import { VContactForm } from "./components";
import { VEmailSubscribe } from "./components";
import { VNav } from "./components";
import { VFooter } from "./components";
import { VNotFound } from "./components";
export default {
  created() {
    // test imported components
    console.log(VButton);
    console.log(VImg);
    console.log(VDropdown);
    console.log(VFormInput);
    console.log(VModal);
    console.log(VToast);
    console.log(VSlider);
    console.log(VContactForm);
    console.log(VEmailSubscribe);
    console.log(VNav);
    console.log(VFooter);
    console.log(VNotFound);
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