<template>
  <div class="form">
    <form @submit.prevent="onSubmit">
      <!-- <div :class="icons"></div> -->
      <!-- TODO test error classes -->
      <FormInput 
        name="email"
        type="email"
        :label="label"
        placeholder="Enter your email"
        icon="email"
        :showIcon="true"
        :showError="showError"
        :showSuccess="showSuccess"
        v-model="email"
        @update="onUpdate"
        required
      />
      <span v-if="showError" class="text--error">please enter an email address</span>
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
    label: {
      type: String,
      required: true
    },
    showSuccess: {
      type: Boolean,
      required: false,
      default: () => false
    },
    showError: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  model: {
    data: "value",
    event: "update"
  },
  data () {
    return {
      //
      email: ''
    }
  },
  methods: {
    onSubmit () {
      // validate on submit
      if (this.email === null || this.email === '') {
        this.showError = true
      }
      this.$emit('onSubmit', this.email)
      // TODO send to mailchimp firebase function
    },
    onUpdate(value) {
      this.$emit('onUpdate', value)
    },
    // FIXME outside or inside the component?
    async subscribeToList (email) {
      // https://mailchimp.com/developer/guides/marketing-api-quick-start/#install-the-client-library-for-your-language
      await this.axios.post('/api/mailchimp/', email, {
       headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
      })
      .then((response) => {
        console.log(response.data)
      })
    }
  },
  computed: {
    // use computed values to map form data to an object.
    // updateForm () {
    //   return {
    //       email: this.email,
    //   }
    // }
    //  dynamic icons only work with class strings, doesn't work with props.
    // returns an object with props, returns the string value with classes
    // icons () {
    //   return {
    //       'email': !this.showError,
    //       'error': this.showError
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
@import './Form.scss';
</style>