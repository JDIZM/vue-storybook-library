<template>
  <div :class="classes" @click="onClick" :style="style">
    {{ label }}
  </div>
</template>

<script>
// TODO ToggleButton 
export default {
  name: 'ToggleButton',
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
    }
  },
  data () {
    return {
      //
      // styles: ['btn', 'btn--primary']
    }
  },
  methods: {
    onClick () {
      // TODO click actions
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
        'btn--destruct bg--destruct text--light': this.destruct
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
@import './ToggleButton.scss';
</style>