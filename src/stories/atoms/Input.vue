<template>
  <div :class="classes" class="form__field">
    <label :for="name">{{ label }}</label>
    <span v-if="showIcon" class="material-icons">{{ icon }}</span>
    <input class="bg--primary-100" v-on="$listeners" :id="name" :type="type" :name="name" :value="value" :placeholder="placeholder" @input="$emit('update', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'FormField',
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
    value: {
      type: String,
      required: false,
      default: () => {
        return ''
      }
    },
    icon: {
      type: String,
      required: true
    },
    // showInput: {
    //   type: Boolean,
    //   required: true
    // },
    // hideLabel: {
    //   type: Boolean,
    //   required: true
    // },
    showIcon: {
      type: Boolean,
      required: true
    },
    showError: {
      type: Boolean,
      required: true
    },
  },
  model: {
    prop: "value",
    event: "update"
  },
  data() {
    return {
      //
      // input: true,
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
@import './Input.scss';
</style>