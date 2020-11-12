<template>
  <div class="home container">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld
      title="STORYBOOK UI LIBRARY"
      msg="a simple vue UI library built with storybook" 
    />
    <p>using two input components from ./components/Input.vue </p>
    <Input
      name="name"
      type="text"
      placeholder="enter your name"
      label="label"
      icon="person"
      showIcon
      :showError="showError"
      @update="updateValue"
      v-model="textValue"
    />
    <Input
      name="name2"
      type="text"
      placeholder="enter your email"
      label="label"
      icon="email"
      showIcon
      :showError="showError"
      @update="updateValue"
      v-model="textValue2"
    />
    <p>Using the storybook component from ./components/molecules/FormInput.vue</p>
    <FormInput
      name="name3"
      type="text"
      placeholder="enter your email"
      label="label"
      icon="email"
      showIcon
      :showError="showError"
      @update="updateValue"
      v-model="textValue3"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Input from "@/components/Input.vue"
import FormInput from "@/components/molecules/FormInput.vue"
export default {
  name: "Home",
  components: {
    HelloWorld,
    Input,
    FormInput
  },
  data () {
    return {
      showError: false, // form validation
      // input value is updated on @input event using v-model.
      // :value prop is binded on the input
      textValue: '',
      textValue2: '',
      textValue3: ''
    }
  },
  methods: {
    updateValue(value) {
      // TODO update form value on emit
      console.log(value)
    }
  }
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