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
      :duration="1000"
      :show="showToast"
      @timeout="!showToast"
    />
  </form>
</template>

<script>
import FormInput from "../../molecules/FormInput.vue";
import Button from "../../atoms/Button.vue";
import Toast from "../../molecules/Toast.vue";
export default {
  name: "ContactForm",
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
      this.msg = "there was an error sending the form";
      if (!this.values.length) this.showToast = true;
      else this.$emit("submit", this.values);
    },
    onUpdate(value, i) {
      this.values[i] = value;
      this.$emit("update", value, i, this.values);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Form.scss";
textarea {
  margin-bottom: 8px;
}
span {
  text-align: left;
}
</style>