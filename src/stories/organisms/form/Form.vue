<template>
  <div class="form">
    <form @submit.prevent="onSubmit">
      <FormInput 
        name="name"
        type="text"
        :placeholder="placeholder"
        :label="label"
        :icon="icon"
        :showIcon="showIcon"
        :showError="false"
        v-model="InputName"
        @update="updateValue"
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
    showIcon: {
      type: Boolean,
      required: false,
      default: () => false
    },
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      //
      InputName: '',
      showError: false
    }
  },
  methods: {
    onSubmit () {
      this.$emit('onSubmit', this.updateForm)
    },
    updateValue(value) {
      console.log(value)
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
          InputName: this.InputName,
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