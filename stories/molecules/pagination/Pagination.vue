<template>
  <nav class="pagination" aria-label="page navigation">
    <button
      v-show="currentPage > 1"
      class="pagination__btn"
      @click="$emit('prev', currentPage - 1)"
    >
      prev
    </button>
    <ol class="pagination__list">
      <li
        v-for="(page, i) in calcRange"
        :key="i"
        :class="[
          styles,
          {
            '--active': currentPage === page,
          },
        ]"
      >
        <button @click.prevent="$emit('click', page)">{{ page }}</button>
      </li>
    </ol>
    <button
      v-show="currentPage < totalPages"
      class="pagination__btn"
      @click="$emit('next', currentPage + 1)"
    >
      next
    </button>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    rangeLength: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    styles() {
      return {
        pagination__list__item: true,
      };
    },
    calcRange() {
      const prevPages = Math.floor(this.rangeLength / 2);
      const nextPages = Math.ceil(this.rangeLength / 2) - 1;
      let start = this.currentPage - prevPages;
      let end = this.currentPage + nextPages;

      // start
      if (this.currentPage <= prevPages) {
        // from 1 to rangeLength
        let start = 1;
        let range = [...Array(this.rangeLength + 1 - start).keys()].map(
          (key) => start + key
        );
        return range;
      }

      // end
      if (end >= this.totalPages) {
        let start = this.currentPage - this.rangeLength + 1;
        let end = this.currentPage;
        let range = [...Array(end + 1 - start).keys()].map(
          (key) => start + key
        );
        return range;
      }

      // middle
      let range = [...Array(end + 1 - start).keys()].map((key) => start + key);
      return range;
    },
  },
};
</script>

<style lang="scss">
@use './Pagination.scss';
</style>