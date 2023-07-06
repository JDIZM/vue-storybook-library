<template>
  <picture>
    <source :alt="alt" :srcSet="srcset" :sizes="sizes" type="image/webp" />
    <img :src="src" :alt="alt" :srcSet="srcset" :sizes="sizes" draggable="false" />
  </picture>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    srcset: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    sizes: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
