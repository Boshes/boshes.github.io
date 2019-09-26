<template>
  <div class="column has-text-centered">
    <b-icon
      class="work-icon"
      :icon="item.icon"
      pack="fas"
    />
    <p class="title is-4">{{ item.position }}</p>
    <p class="subtitle is-4">
      <a :href="item.link">{{ item.employer }}</a>
    </p>
    <hr />
    <p class="subtitle is-5">{{ item.details }}</p>
    <div class="work-icon-bar">
      <div
        v-for="(language, index) in item.languages"
        :key="index"
      >
        <a :href="language.link">
          <img
            class="image is-48x48"
            :src="imagePath(language.image)"
            :title="language.text"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  },

  methods: {
    imagePath (image) {
      return require(`@/assets/${image}`)
    }
  }
}
</script>

<style>
.work-icon-bar {
  display: flex;
  justify-content: space-around;
}

.work-icon {
  transform: scale(2);
  margin-bottom: 1rem;
  margin-top: 1rem;
}
</style>
