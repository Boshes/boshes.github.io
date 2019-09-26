<template>
  <div id="app">
    <div class="container is-fluid">
      <main>
        <topic-summary />
        <about />
        <experience />
      </main>
    </div>
  </div>
</template>

<script>
import TopicSummary from './components/TopicSummary.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'

export default {
  name: 'app',
  components: {
    TopicSummary,
    About,
    Experience
  }
}
</script>

<style>
html, body, #app {
  min-height: 100vh;
  height: 100%;
  background-color: #f8f8f8;
  color: #8b8b8b;
}

main {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

a {
  color: #428bca !important;
}

.is-active > a {
  color: #fff !important;
}

@media only screen and (max-width: 767px), (min-device-width: 320px) and (max-device-width: 767px) {
  main {
    padding-left: .5rem;
    padding-right: .5rem;
  }
}
</style>
