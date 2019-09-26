<template>
  <div class="container is-fluid">
    <div class="columns">
      <work-item
        class="current-work"
        :item="currentWork"
      />
    </div>
    <hr />
    <div class="columns">
      <work-item
        class="past-work"
        v-for="(item, index) in pastWork"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { information } from '../fixtures/information.js'

import ScrollReveal from 'scrollreveal'
import WorkItem from './WorkItem.vue'

export default {
  components: {
    WorkItem
  },

  data () {
    return {
      currentWork: information.work[0],
      pastWork: information.work.slice(1)
    }
  },

  mounted () {
    ScrollReveal().reveal('.current-work', { easing: 'ease-in' })
    ScrollReveal().reveal('.past-work', { easing: 'ease-in', delay: 200, interval: 200 })
  }
}
</script>

<style>
.current-work, .past-work {
  visibility: hidden;
  padding-top: 1.5rem !important;
}
</style>
