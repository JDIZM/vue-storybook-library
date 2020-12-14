<template>
  <div class="dropdowns">
    <div v-for="dropdown in dropdowns" :key="dropdown.title" class="dropdown pb--2 pt--2">
      <div class="dropdown__trigger" :class="{ 'active': dropdown.isActive }" @click="activate(dropdown)">
        {{ dropdown.title }}
      </div>
      <div class="dropdown__content" :class="{ 'active': dropdown.isActive }">
        <p>
          {{ dropdown.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    dropdowns: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      //
      // dropdowns: [
      //   { title: 'ONE TITLE', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis non, dignissimos asperiores ipsum aliquam expedita porro enim ipsam sequi? Numquam esse incidunt quam nihil nam fugiat dignissimos dolorum reiciendis tempora', isActive: false },
      //   { title: 'TWO TITLE', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis non, dignissimos asperiores ipsum aliquam expedita porro enim ipsam sequi? Numquam esse incidunt quam nihil nam fugiat dignissimos dolorum reiciendis tempora', isActive: false }
      // ]
    }
  },
  methods: {
    activate (dropdown) {
      // console.log(dropdown)
      dropdown.isActive = !dropdown.isActive
      this.$emit('onClick', dropdown)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Dropdown.scss';
.dropdowns {
  width: 100%;
}
</style>
