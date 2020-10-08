<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <v-btn color="primary" depressed elevation="2">Primary</v-btn>
    <v-btn color="secondary" elevation="2">Secondary</v-btn>
    <v-btn outlined color="primary" elevation="2">Outlined</v-btn>
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
