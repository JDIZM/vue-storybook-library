<template>
  <div class="form__field">
    <label v-if="!hideLabel" :for="name">{{ label }}</label>
    <span class="material-icons">{{ icon }}</span>
    <input v-on="$listeners" v-if="showInput" :id="name" :type="type" :name="name" :value="value" :placeholder="placeholder" @input="$emit('update', $event.target.value)">
    <textarea v-else :id="name" :type="type" :name="name" :value="value" :placeholder="placeholder" rows="4" cols="50" />
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
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    showInput: {
      type: Boolean,
      required: true
    },
    hideLabel: {
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
  }
}
</script>

<style lang="scss">
@import './FormField.scss';
</style>