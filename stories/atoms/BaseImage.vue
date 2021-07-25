<template>
<div class="image">
    <picture >
      <source
        :src="src"
        :alt="alt"
        :srcSet="srcset"
        :sizes="sizes"
        type="image/webp"
      />
      <img :src="src" :alt="alt" :srcSet="srcset" :sizes="sizes" draggable="false" />
    </picture>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    srcset: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    sizes: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  height: 100%;
  width: 100%;
  margin: auto;
}
img {
  width: 100%;
  height: 100%;
}
</style>