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
        v-model="field1"
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
      // FIXME field1 input data not working.
      field1: '',
      formData: {
        //
        field: this.field1,
        name: 'james',
        last: 'd',
        age: 34
      }
    }
  },
  methods: {
    onSubmit () {
      // should be kebab-case but storybook wont work with it.
      // TODO form data
      this.$emit('onSubmit', this.formData)
    },
    updateValue(value) {
      console.log(value)
    }
  },
  // computed: {
  //   classes() {
  //     return {
  //       'btn--left': this.left,
  //     }
  //   },
  // }
}
</script>

<style lang="scss" scoped>
@import './Form.scss';
</style>