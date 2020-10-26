<template>
  <div class="form">
    <form @submit.prevent="onSubmit">
      <input type="text">
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
// TODO import input component
export default {
  name: 'Form',
  props: {
    // 
  },
  data () {
    return {
      //
      formData: {
        // 
        name: 'james',
        last: 'd',
        age: 34
      }
    }
  },
  methods: {
    onSubmit () {
      // should be kebab-case but storybook wont work with it.
      // TODO form data
      this.$emit('onSubmit', this.formData)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Form.scss';
</style>