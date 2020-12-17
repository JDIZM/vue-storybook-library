<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    //
    primary: {
      type: Boolean,
      required: false,
      default: () => false
    },
    outline: {
      type: Boolean,
      required: false,
      default: () => false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: () => false
    },
    destruct: {
      type: Boolean,
      required: false,
      default: () => false
    },
    label: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
    },
    left: {
      type: Boolean,
      required: false,
      default: () => false
    },
  },
  data () {
    return {
      //
      // styles: ['btn', 'btn--primary']
    }
  },
  methods: {
    onClick () {
     this.$emit('onClick');
    }
  },
  computed: {
    // class binding method 1
    isPrimary() {
      if(this.primary){
        return ['btn', 'btn--primary']
      } else return ['btn', 'btn--secondary']
    },
    // class binding method 2
    classes() {
      return {
        'btn': true,
        'btn--primary': this.primary,
        'btn--outline': this.outline,
        'btn--disabled bg--disabled text--dark': this.disabled,
        'btn--destruct bg--destruct text--light': this.destruct,
        'btn--left': this.left
      }
    },
    // inline style binding
    style() {
      return {
        backgroundColor: this.backgroundColor,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Button.scss';
</style>