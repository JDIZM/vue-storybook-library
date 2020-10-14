<template>
  <div :class="isPrimary" @click="onClick">
    button test
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
    }
  },
  data () {
    return {
      //
      styles: ['btn', 'btn--primary']
    }
  },
  methods: {
    onClick () {
      // TODO click actions
     this.$emit('onClick');
    }
  },
  computed: {
    isPrimary() {
      if(this.primary){
        return ['btn', 'btn--primary']
      } else return ['btn', 'btn--secondary']
    }
  }
}
</script>

<style lang="scss" scoped>
// 
@import './Button.scss'
</style>