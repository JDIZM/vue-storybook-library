<template>
  <div :class="classes" class="form__field">
    <label :for="name">{{ label }}</label>
    <span v-if="showIcon" class="material-icons">{{ icon }}</span>
    <input 
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
    // https://vuejs.org/v2/guide/components-custom-events.html
    // default prop = value
    value: {
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
      required: true
    }
  },
  // can customise the prop value that is emitted and the name of the event.
  model: {
    data: "value",
    event: "update"
  },
  data() {
    return {
      //
      // input: true,
      // value: ''
    }
  },
  // methods: {
  //   change (value) {
  //    this.$emit('change', value);
  //   }
  // },
  computed: {
    classes() {
      return {
        '--error': this.showError,
      }
    },
    // innerModel: {
    //   get() { return this.value },
    //   set(v) { this.$emit('change', v) }
    // }
  }
}
</script>

<style lang="scss">
@import './Input.scss';
</style>