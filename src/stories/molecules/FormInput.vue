<template>
  <div :class="classes" class="form__field">
    <label :for="name">{{ label }}</label>
    <span v-if="showIcon" class="material-icons">{{ icon }}</span>
    <input class="bg--primary-100" v-model="value" @input="$emit('update', $event.target.value)" :id="name" :type="type" :name="name" :placeholder="placeholder">
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
    // value: {
    //   type: String,
    //   required: true
    // },
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
    onSubmit () {
     this.$emit('onSubmit');
    }
  },
  computed: {
    classes() {
      return {
        '--error': this.showError,
      }
    }
  }
}
</script>

<style lang="scss">
@import './FormInput.scss';
</style>