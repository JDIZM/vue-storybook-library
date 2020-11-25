<template>
  <div class="form">
    <form @submit.prevent="onSubmit">
      <FormInput 
        name="email"
        type="email"
        label="Subscribe to our newsletter?"
        placeholder="Enter your email"
        icon="email"
        :showIcon="true"
        :showError="false"
        v-model="inputValue"
        @update="onUpdate"
        required
      />
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
      inputValue: '',
      showError: false
    }
  },
  methods: {
    onSubmit () {
      // TODO validate on submit
      this.$emit('onSubmit', this.updateForm)
      // TODO on successful submit, notify user
      // TODO on error notify user
    },
    onUpdate(value) {
      // console.log(value)
      // TODO validate as the field updates
      this.$emit('onUpdate', value)
    }
  },
  computed: {
    // classes() {
    //   return {
    //     'btn--left': this.left,
    //   }
    // },
    // use computed values to map form data to an object.
    updateForm () {
      return {
          inputValue: this.inputValue,
          // name: 'james',
          // last: 'd',
          // age: 34
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Form.scss';
</style>