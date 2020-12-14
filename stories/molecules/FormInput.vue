<template>
  <div :class="classes" class="form__field">
    <label :for="name">{{ label }}</label>
    <span v-if="showSuccess" class="material-icons">check</span>
    <span v-if="showError" class="material-icons text--error">error</span>
    <span v-else-if="showIcon && !showSuccess" class="material-icons">{{ icon }}</span>   
    <textarea
      v-if="type === 'textarea'"
      @input="$emit('update', $event.target.value)" 
      rows="4" 
      cols="50"
      class="bg--primary-100" 
      :value="value" 
      :id="name" 
      :type="type" 
      :name="name" 
      :placeholder="placeholder"
    />
    <input
      v-else
      class="bg--primary-100" 
      :value="value" 
      @input="$emit('update', $event.target.value)" 
      :id="name" 
      :type="type" 
      :name="name" 
      :placeholder="placeholder"
    >
    <!-- <input class="bg--primary-100" v-on="$listeners" :id="name" :type="type" :name="name" :value="value" :placeholder="placeholder" @input="$emit('update', $event.target.value)"> -->
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    showIcon: {
      type: Boolean,
      required: true
    },
    showError: {
      type: Boolean,
      required: false,
      default: false
    },
    showSuccess: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  model: {
    data: "value",
    event: "update"
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSubmit () {
     this.$emit('onSubmit');
    }
  },
  computed: {
    classes() {
      return {
        '--error': this.showError,
        '--success': this.showSuccess,
      }
    }
  }
}
</script>

<style lang="scss">
@import './FormInput.scss';
</style>