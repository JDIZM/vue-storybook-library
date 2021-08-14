<template>
  <div id="form" class="form">
    <form @submit.prevent>
      <FormInput
        v-for="(input, i) in inputs"
        :key="input.name"
        :name="input.name"
        :type="input.type"
        :placeholder="input.placeholder"
        :label="input.label"
        :icon="input.icon"
        :show-icon="input.showIcon"
        :show-error="input.showError"
        @update="onUpdate($event, i)"
      />
      <!-- use toast component to show errors, but this is here just incase -->
      <div v-if="showError">
        <span class="material-icons text--error">error</span>
        <span class="text--error">Please enter the correct information</span>
      </div>
      <div v-if="showSuccess">
        <span class="material-icons text--success">check</span>
        <span class="text--primary">Your message has been sent!</span>
      </div>
      <Button
        type="submit"
        left
        label="SUBMIT"
        primary
        form="form"
        @onClick="onSubmit"
      />
    </form>
  </div>
</template>

<script>
import FormInput from "../../molecules/FormInput.vue";
import Button from "../../atoms/Button.vue";
export default {
  name: "ContactForm",
  components: {
    FormInput,
    Button,
  },
  props: {
    inputs: {
      type: Array,
      required: true,
    },
    showError: {
      type: Boolean,
      default: false,
    },
    showSuccess: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      values: [], // submitted form values
    };
  },
  methods: {
    onSubmit() {
      // TODO validate
      // FIXME native html form validation
      if (!this.values.length) this.$emit("error");
      else this.$emit("onSubmit", this.values);
    },
    onUpdate(value, i) {
      this.values[i] = value;
      this.$emit("onUpdate", value, i, this.values);
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