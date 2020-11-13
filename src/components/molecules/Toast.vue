<template>
  <div v-if="show" class="toast bg--primary text--white active">
    <!-- <i class="material-icons modal-close">close</i> -->
    <!-- <h4>{{ title }}</h4> -->
    <span class="material-icons">{{ icon }}</span>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    show: Boolean,
    icon: {
      type: String,
      required: false,
      default: 'info'
    },
    msg: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      //
    }
  },
  mounted() {
    this.onShow()
  },
  updated () {
    this.onShow()
  },
  methods: {
    //
    onShow () {
      if(this.show){
        setTimeout(() => {
          this.$emit('onTimeout') // emit timeout event to parent
          console.log('timeout')
        }, this.duration) // after set duration
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Toast.scss'; // imported in main.scss for access to global vars
</style>