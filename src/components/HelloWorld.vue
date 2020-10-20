<template>
 <div>
   <h2>{{ title }}</h2>
   <p>{{ msg }}</p>
 </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      title: {
        type: String,
        Required: true
      },
      msg: {
        type: String,
        Required: true
      }
    },
    data: () => {
      return {
        //
      }
    }
  }
</script>

<style lang="scss" scoped>
// using global sass vars from theme files.
h2, p {
  color: $secondary;
}
</style>