<template>
  <div>
    <div v-if="show" class="modal bg--white text--black">
      <div class="modal-content">
        <!-- <i class="material-icons modal-close">close</i> -->
        <h4>{{ title }}</h4>
        <p>{{ msg }}</p>
      </div>
      <div class="modal-footer">
        <Button
          @onClick="$emit('confirm')"
          left
          label="CONFIRM"
          outline
        />
        <Button
          @onClick="$emit('close')"
          left
          label="CLOSE"
          primary
        />
        <!-- <a class="btn btn--outline" @click="$emit('confirm'), $emit('close')">Continue</a>
        <a class="btn btn--primary" @click="$emit('close')">Cancel</a> -->
      </div>
    </div>
    <div v-if="show" class="modal-overlay" />
  </div>
</template>

<script>
import Button from '../atoms/Button.vue'
// requires a modal trigger which passes the show state as a prop
// emit events in this child component with $emit('event') to pass to the parent
// listen for events in the parent with @eventname="something" to do something.
// <button class="btn btn--primary" @click="showModal = true">
//    primary
// </button>
// <Modal :show="showModal" @close="showModal = false" />
export default {
  name: 'Modal',
  components: {
    Button
  },
  props: {
    show: Boolean, // receive value as props from parent using modal trigger,
    title: {
      type: String,
      required: true
    },
    msg: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      // use events to send the state from parent to child.
      // show: true, // show the modal, handle display state with v-if and @click
      // msg: 'some message', // message
      // title: 'MODAL TITLE' // title
    }
  }
  // TODO modal overlay
  // toggle () {
  //   // toggle modal state
  // },
  // close () {
  //   // close the modal
  // }
}
</script>

<style lang="scss" scoped>
@import './Modal.scss'; // imported in main.scss for access to global vars
</style>