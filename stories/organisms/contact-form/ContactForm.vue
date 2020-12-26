<template>
  <div class="form">
    <form @submit.prevent="onSubmit">
      <FormInput
        v-for="(input, i) in inputs"
        :key="input.name"
        :name="input.name"
        :type="input.type"
        :placeholder="input.placeholder"
        :label="input.label"
        :icon="input.icon"
        :showIcon="input.showIcon"
        :showError="input.showError"
        @update="onUpdate($event, i)"
      />
      <div v-if="showError">
        <span class="material-icons text--error">error</span>
        <span class="text--error">Please enter the correct information</span>
      </div>
      <div v-if="showSuccess">
        <span class="material-icons text--success">check</span>
        <span class="text--primary">Your message has been sent!</span>
      </div>
      <Button
        @onClick="onSubmit"
        type="submit"
        left
        label="SUBMIT"
        primary
      />
    </form>
  </div>
</template>

<script>
import FormInput from '../../molecules/FormInput.vue'
import Button from '../../atoms/Button.vue'
export default {
  name: 'ContactForm',
  components: {
    FormInput,
    Button
  },
  props: {
    // TODO show message box
    // TODO connect with firebase function
    inputs: {
      type: Array,
      required: true
    },
    showError: {
      type: Boolean,
      required: false,
      default: () => false
    },
     showSuccess: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  data () {
    return {
      values: []
    }
  },
  methods: {
    onSubmit () {
      // TODO form validation
      // this.$emit('onSubmit', this.updateForm)
      this.$emit('onSubmit', this.values)
    },
    onUpdate(value, i) {
      this.values[i] = value
      this.$emit('onUpdate', value, i, this.values)
      // use axios to post emitted data to firebase function
    }
  },
  computed: {
    // classes() {
    //   return {
    //     'btn--left': this.left,
    //   }
    // },
    // use computed values to map form data to an object.
    // updateForm () {
    //   return {
    //       name: this.name,
    //       phone: this.phone,
    //       email: this.email,
    //       message: this.message
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
@import './Form.scss';
textarea {
  margin-bottom: 8px;
}
span {
  text-align: left;
}
</style>