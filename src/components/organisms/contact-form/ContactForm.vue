<template>
  <div class="form">
    <form @submit.prevent="onSubmit">
      <!-- TODO built a multiple contact form -->
      <FormInput 
        name="name"
        type="text"
        placeholder="James"
        label="What's your name?"
        icon="person"
        :showIcon="true"
        :showError="false"
        v-model="name"
        @update="onUpdate"
      />
      <FormInput 
        name="phone"
        type="tel"
        placeholder="0161 123 4567"
        label="What's your phone number?"
        icon="phone"
        :showIcon="true"
        :showError="false"
        v-model="phone"
        @update="onUpdate"
      />
      <FormInput 
        name="email"
        type="email"
        placeholder="hello@jamesdonnelly.dev"
        label="What's your email?"
        icon="email"
        :showIcon="true"
        :showError="false"
        :showSuccess="validations.email"
        v-model="email"
        @update="onUpdate"
      />
      <div class="form__field">
      <label for="message">Leave us a message</label>
      <span class="material-icons">message</span>
      <textarea @input="onUpdate($event.target.value)" id="message" v-model="message" name="message" rows="4" cols="50"></textarea>
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
      name: null,
      phone: null,
      email: null,
      message: null,
      showError: false
    }
  },
  methods: {
    onSubmit () {
      // TODO validate form fields
      this.$emit('onSubmit', this.updateForm)
    },
    onUpdate(value) {
      // console.log(value)
      this.$emit('onUpdate', value)
      // TODO validate success / error on update?
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
          name: this.name,
          phone: this.phone,
          email: this.email,
          message: this.message
          // name: 'james',
          // last: 'd',
          // age: 34
      }
    },
    // TODO validate the form fields and change state
    // TODO icons when success / error
    validate (value) {
      if(value != null) {
        return true
      } else {
        return false
      }
    },
    validations () {
      return {
        email: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Form.scss';
textarea {
  margin-bottom: 8px;
}
</style>