<template>
 <div>
   <h2>HELLO WORLD</h2>
 </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => {
      return {
        //
      }
    }
  }
</script>

<style lang="scss" scoped>
// using global sass vars from theme files.
h2 {
  color: $secondary;
}
</style>