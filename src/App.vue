<template>
  <div>
      <!-- <HelloWorld/> -->
      <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
h2 {
  color: $primary;
}
</style>