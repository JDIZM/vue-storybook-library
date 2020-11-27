<template>
  <div class="form">
    <form @submit.prevent="onSubmit">
      <!-- <div :class="icons"></div> -->
      <FormInput 
        name="email"
        type="email"
        label="Subscribe to our newsletter?"
        placeholder="Enter your email"
        icon="email"
        :showIcon="true"
        :showError="false"
        v-model="email"
        @update="onUpdate"
        required
      />
      <span v-if="showError" class="text--error">please enter an email address </span>
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
  name: 'Form',
  components: {
    FormInput,
    Button
  },
  props: {
    // left: {
    //   type: Boolean,
    //   required: false,
    //   default: () => false
    // },
    // showIcon: {
    //   type: Boolean,
    //   required: false,
    //   default: () => false
    // },
    // icon: {
    //   type: String,
    //   required: true
    // },
    // label: {
    //   type: String,
    //   required: true
    // },
    // placeholder: {
    //   type: String,
    //   required: true
    // }
  },
  model: {
    data: "value",
    event: "update"
  },
  data () {
    return {
      //
      email: '',
      showError: false
    }
  },
  methods: {
    onSubmit () {
      // TODO validate on submit
      if (this.email === null || this.email === '') {
        this.showError = true
      }
      this.$emit('onSubmit', this.updateForm)
      // TODO send to mailchimp firebase function
      // handle within the component or not?
    },
    onUpdate(value) {
      this.$emit('onUpdate', value)
    }
  },
  computed: {
    // use computed values to map form data to an object.
    updateForm () {
      return {
          email: this.email,
      }
    },
    // FIXME only works with dynamic classes, doesn't work with props.
    // returns an object with props, returns the string value with classes
    icons () {
      return {
          'email': !this.showError,
          'error': this.showError
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Form.scss';
</style>