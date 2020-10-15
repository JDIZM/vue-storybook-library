<template>
  <div :class="classes" @click="onClick" :style="style">
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    //
    primary: {
      type: Boolean,
      required: true
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
        'btn--secondary': !this.primary
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