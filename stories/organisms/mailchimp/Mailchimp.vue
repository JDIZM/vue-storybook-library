<template>
  <div class="form">
    <form id="subscribe" @submit.prevent="onSubmit">
      <FormInput
        ref="email"
        v-model="email"
        name="email"
        type="email"
        :label="label"
        placeholder="Enter your email"
        icon="email"
        :show-icon="true"
        :show-error="showError"
        :show-success="showSuccess"
        required
        @update="onUpdate"
      />
      <span v-if="showError" class="text--error">
        please enter an email address
      </span>
    </form>
    <Button
      type="submit"
      left
      label="SUBMIT"
      primary
      form="subscribe"
      @onClick="onSubmit"
    />
  </div>
</template>

<script>
import FormInput from "../../molecules/FormInput.vue";
import Button from "../../atoms/Button.vue";
export default {
  name: "Form",
  components: {
    FormInput,
    Button,
  },
  model: {
    data: "value",
    event: "update",
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    showSuccess: {
      type: Boolean,
      default: () => false,
    },
    showError: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      email: "",
    };
  },
  computed: {
    //
  },
  methods: {
    // FIXME native html form validation stopped working
    onSubmit() {
      // console.log(this.$refs["email"].$el.children[2].validity);
      if (this.email === null || this.email === "") {
        this.$emit("onError", this.email);
      } else {
        this.$emit("onSubmit", this.email);
      }
    },
    onUpdate(value) {
      this.$emit("onUpdate", value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Form.scss";
</style>