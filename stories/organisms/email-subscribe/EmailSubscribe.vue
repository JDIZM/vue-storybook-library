<template>
  <form ref="form" class="form" @submit.prevent="onSubmit">
    <FormInput
      ref="email"
      v-model="email"
      name="email"
      type="email"
      placeholder="Enter your email"
      icon="email"
      :label="label"
      :show-icon="true"
      :show-error="showError"
      :show-success="showSuccess"
      required
      @update="onUpdate"
    />
    <Button type="submit" left label="SUBMIT" primary @click="onSubmit" />
  </form>
</template>

<script>
import FormInput from "../../molecules/FormInput.vue";
import Button from "../../atoms/Button.vue";
export default {
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
    onSubmit() {
      // click.prevent on the button
      // stops the default form submit and html validation
      // console.log(this.$refs);
      // console.log(this.$refs["email"].$el.children[2].validity);
      // console.log(this.$refs["form"].submit());
      if (this.email === null || this.email === "") {
        this.$emit("error", this.email);
      } else {
        this.$emit("submit", this.email);
      }
    },
    onUpdate(value) {
      this.$emit("update", value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./EmailSubscribe.scss";
</style>
