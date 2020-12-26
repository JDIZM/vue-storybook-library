<template>
  <div class="notfound pb--4" :class="classes">
    <h1>404</h1>
    <h2>HELLO, IS IT ME YOUR LOOKING FOR?</h2>
    <!-- :style="{ backgroundImage: 'url(' + imgSrc + ')' }" -->
    <!-- image method one -->
    <!-- <div class="img-wrapper">
      <img :src="bgImg">
    </div> -->
    <!-- image method two -->
    <!-- <div class="img-wrapper">
      <img src="../assets/lionel-richie.jpg">
    </div> -->
    <!-- image method three -->
    <div class="img-wrapper">
      <img :src="imgSrc">
    </div>
  </div>
</template>

<script>
// import the image
// import bgImg from '../assets/lionel-richie.jpg'
export default {
  name: 'NotFoundComponent',
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      // 
      // img: 'lionel-richie.jpg',
      // bgImg, // using the imported image
      // imgSrc: require('@/assets/' + this.img) // using required image
    }
  },
  computed: {
    classes() {
      return {
        '--notfound': true
      }
    }
    // imgSrc() {
    //  return require('@/assets/' + this.img)
    // }
  }
}
</script>

<style lang="scss">
.img-wrapper, img {
  width: 100%;
  height: 100%;
  border-radius: 50%
}
.notfound {
  max-width: 900px;
  margin: auto;
  width: 90%;
  min-height: 70vh;
}
</style>
