<template>
  <div class="form__field">
    <label v-if="!hideLabel" :for="value">{{ label }}</label>
    <span class="material-icons">{{ icon }}</span>
    <input v-if="input" :type="type" :name="name" :value="value">
    <textarea v-else :id="value" v-model="value" :type="type" :name="value" rows="4" cols="50" />
  </div>
</template>

<script>
export default {
  name: 'FormField',
  props: {
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
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    input: {
      type: Boolean,
      required: true
    },
    hideLabel: {
      type: Boolean,
      required: true
    },
  },
  data() {
    return {
      //
      // input: true,
    }
  }
}
</script>

<style lang="scss">
@import './FormField.scss';
</style>