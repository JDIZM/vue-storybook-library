<template>
  <div class="slider">
    <div
      v-for="(slide, i) in slides"
      :key="i"
      class="slider__item"
      :class="{ 'slider__item--active': currentSlide === i }"
    >
      <img :src="slide.src" :alt="slide.title" draggable="false" />
    </div>
    <div class="slider__btns">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="slider__btns__btn"
        :class="{ 'slider__btns__btn--active': currentSlide === i }"
        @click.prevent="selectSlide(i)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    selectSlide(i) {
      this.currentSlide = i;
      this.$emit("slide", i);
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  height: 500px;
  width: 500px;
  margin: auto;
}
.slider__item {
  display: none;
  height: 100%;
  padding: 0.5rem 0;
}
.slider__btns {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.slider__btns__btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0.25rem;
  cursor: pointer;
  background-color: var(--blue);
  &.slider__btns__btn--active {
    background-color: var(--secondary);
  }
}
.slider__item--active {
  display: block;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
