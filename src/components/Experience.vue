<template>
  <div class="box">
    <b-tabs
      v-model="currentView"
      type="is-boxed"
      expanded
      :animated="false"
    >
      <b-tab-item
        v-for="(tab, index) in tabs"
        :icon="tab.icon"
        :key="index"
        :label="tab.name"
        @click="setView(index)"
      >
        <component
          v-if="currentView == index"
          keep-alive
          :is="tabs[currentView].name"
          :profile="githubProfile"
          :repos="repositories"
          :in-flight="inFlight"
        />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import { getGithubProfile, getFeaturedRepos } from '../utils/api.js'
import Work from './Work.vue'
import Projects from './Projects.vue'

export default {
  components: {
    Work,
    Projects
  },

  data () {
    return {
      currentView: '',
      tabs: [
        {
          name: 'Work',
          icon: 'briefcase'
        },
        {
          name: 'Projects',
          icon: 'code'
        }
      ],
      githubProfile: {},
      repositories: [],
      inFlight: false
    }
  },

  async created () {
    this.setView(0)
    this.inFlight = true
    this.githubProfile = await getGithubProfile()
    this.repositories = await getFeaturedRepos()
    this.inFlight = false
  },

  methods: {
    setView (tab) {
      this.currentView = tab
    }
  }
}
</script>

<style>
.tabs.is-boxed li.is-active a {
  background-color: #2196f3 !important;
}
</style>
