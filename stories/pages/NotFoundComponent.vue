<template>
  <div class="notfound pb--4" :class="classes">
    <h1>404</h1>
    <h2>HELLO, IS IT ME YOUR LOOKING FOR?</h2>
    <div class="img-wrapper">
      <img :src="imgSrc" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundComponent",
  props: {
    imgSrc: {
      type: String,
      required: true
    }
  },
  computed: {
    classes() {
      return {
        "--notfound": true
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.img-wrapper,
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  max-width: 500px;
  max-height: 500px;
}
.notfound {
  max-width: 900px;
  margin: auto;
  width: 90%;
  min-height: 70vh;
}
</style>
