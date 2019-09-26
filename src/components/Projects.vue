<template>
  <div class="container is-fluid">
    <span
      v-if="inFlight"
      class="icon is-large-center-block"
    >
      <b-icon
        pack="fas"
        icon="spinner"
      />
    </span>
    <div
      v-else
      class="project-area has-text-centered"
    >
      <div class="level">
        <div class="level-item has-text-centered">
          <div class="content">
            <p class="heading">GitHub Profile</p>
            <p class="title">
              <a :href="profile.html_url">
                <span>{{ profile.login }}</span>
                <img
                  class="image is-24x24 github-image"
                  :src="profile.avatar_url"
                />
              </a>
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div class="content">
            <p class="heading">Repositories</p>
            <p class="title">{{ profile.public_repos }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div class="content">
            <p class="heading">Followers</p>
            <p class="title">{{ profile.followers }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div class="content">
            <p class="heading">Following</p>
            <p class="title">{{ profile.following }}</p>
          </div>
        </div>
      </div>
      <hr />
      <h1 class="title is-2 has-text-centered is-spaced">{{ profile.bio }}</h1>
      <h1 class="subtitle is-4 has-text-centered">
        Here are some personal projects I have worked on
      </h1>
      <hr />
      <div class="columns">
        <div
          class="column has-text-centered repository-items"
          v-for="(repo, index) in repos"
          :key="index"
        >
          <p class="title is-3">
            <a :href="repo.html_url">{{ repo.name }}</a>
          </p>
          <p class="subtitle is-5">{{ repo.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'

export default {
  props: {
    profile: {
      required: true,
      type: Object
    },

    repos: {
      required: true,
      type: Array
    },

    inFlight: {
      required: true,
      type: Boolean
    }
  },

  mounted () {
    ScrollReveal().reveal('.project-area', { easing: 'ease-in' })
    ScrollReveal().reveal('.repository-items', { easing: 'ease-in', delay: 200, interval: 200 })
  }
}
</script>

<style>
.github-image {
  vertical-align: middle !important;
  margin-left: .5rem;
}

.project-area, .repository-items {
  visibility: hidden;
}
</style>
