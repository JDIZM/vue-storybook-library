<template>
    <input 
      :class="classes" 
      :id="name" :type="type" 
      :name="name" 
      :placeholder="placeholder"
      class="bg--primary-100" 
      @input="update($event.target.value)"
      v-model="value" 
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
  // model: {
  //   data: "value",
  //   event: "update"
  // },
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
        '--error-input': this.showError,
      }
    }
  }
}
</script>

<style lang="scss">
@import './Input.scss';
</style>