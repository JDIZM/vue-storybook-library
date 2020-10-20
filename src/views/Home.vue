<template>
  <div class="home container">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld
      title="STORYBOOK UI LIBRARY"
      msg="a simple vue UI library built with storybook" 
    />
    <p></p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
// FIXME scoped scss isn't using global
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // this is where we use the variable
  color: $primary;
  margin-top: 60px;
}
</style>