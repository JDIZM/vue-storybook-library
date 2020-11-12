<template>
    <input
      class="bg--primary-100"
      :class="classes" 
      :id="name" :type="type" 
      :name="name" 
      :placeholder="placeholder"
      @input="update($event.target.value)"
      :value="value" 
    >
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
    // label: {
    //   type: String,
    //   required: true
    // },
    // value: {
    //   type: String,
    //   required: true
    // },
    // icon: {
    //   type: String,
    //   required: true
    // },
    // showIcon: {
    //   type: Boolean,
    //   required: true
    // },
    showError: {
      type: Boolean,
      required: true
    }
  },
  // custom v-model binding to event
  model: {
    data: "value",
    event: "update"
  },
  data() {
    return {
      //
      // input: true,
      value: ''
    }
  },
  methods: {
    update (value) {
     this.$emit('update', value);
    }
  },
  computed: {
    classes() {
      return {
        '--error-input bg--error-100': this.showError,
      }
    }
  }
}
</script>

<style lang="scss">
@import './Input.scss';
</style>