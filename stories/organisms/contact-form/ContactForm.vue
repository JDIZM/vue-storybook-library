<template>
  <form ref="form" class="form" @submit.prevent>
    <FormInput
      v-for="(input, i) in inputs"
      :key="input.name"
      v-bind="input"
      @update="onUpdate($event, i)"
    />
    <Button type="submit" left label="SUBMIT" primary @click="onSubmit" />
    <Toast
      :msg="msg"
      :duration="3000"
      :show="showToast"
      @timeout="showToast = false"
    />
  </form>
</template>

<script>
import FormInput from "../../molecules/FormInput.vue";
import Button from "../../atoms/Button.vue";
import Toast from "../../molecules/Toast.vue";
export default {
  components: {
    FormInput,
    Button,
    Toast,
  },
  props: {
    inputs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      values: [], // submitted form values
      showToast: false,
      msg: "",
    };
  },
  methods: {
    onSubmit() {
      // click.prevent on the button
      // stops the default form submit and html validation
      // you could use the native form .submit() method
      // console.log(this.$refs["form"]);

      // check empty
      if (!this.values.length) {
        this.onError();
        return;
      }
      // check for required input
      for (let i = 0; i < this.inputs.length; i += 1) {
        if (this.inputs[i].required && !this.values[i].length) {
          this.onError();
          return;
        }
      }
      // success
      this.$emit("submit", this.values);
    },
    onUpdate(value, i) {
      this.values[i] = value;
      this.$emit("update", value, i, this.values);
    },
    onError() {
      this.msg = "there was an error sending the form";
      this.showToast = true;
      this.$emit("error", this.msg);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./ContactForm.scss";
</style>
