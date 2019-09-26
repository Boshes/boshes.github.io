<template>
  <div class="box">
    <div class="type-area">
      <h1 class="title is-1 has-text-centered tag-area">
        <span class="type-writer">{{ generatedText }}</span>
      </h1>
    </div>
    <div class="level">
      <div class="level-left"></div>
      <div class="level-right">
        <div class="level-item">
          <a class="icon-button" :href="links.github" title="GitHub">
            <b-icon icon="github" pack="fab"/>
          </a>
          <a class="icon-button" :href="links.linkedin" title="LinkedIn">
            <b-icon icon="linkedin" pack="fab"/>
          </a>
          <a class="icon-button" :href="`mailto:${links.email}`" title="Email">
            <b-icon icon="envelope" pack="fas"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { information } from '../fixtures/information.js'

export default {
  data () {
    return {
      index: 0,
      isDeleting: false,
      generatedText: '',
      links: information.about.links
    }
  },

  created () {
    this.generateTag(information.about.tags)
  },

  methods: {
    generateTag (tags) {
      let randomTag = tags[this.index % tags.length]

      if (this.isDeleting) {
        this.generatedText = randomTag.substring(0, this.generatedText.length - 1)
      } else {
        this.generatedText = randomTag.substring(0, this.generatedText.length + 1)
      }

      let timing = 50
      if (this.isDeleting) timing /= 2

      if (!this.isDeleting && this.generatedText === randomTag) {
        timing = 3000
        this.isDeleting = true
      } else if (this.isDeleting && this.generatedText === '') {
        this.isDeleting = false
        timing = 500
        this.index = Math.floor(Math.random() * tags.length)
      }

      setTimeout(() => {
        this.generateTag(tags)
      }, timing)
    }
  }
}
</script>

<style>
.type-area {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.type-writer {
  -webkit-animation: blink .5s step-end infinite;
  animation: blink .5s step-end infinite;
  border-right: 2px solid #8b8b8b;
  display: inline-block;
  margin: 0 auto;
  opacity: 1;
  overflow: hidden;
  white-space: nowrap;
}

.tag-area {
  line-height: initial !important;
}

.icon-button {
  margin-right: 20px;
}

@keyframes blink {
  from { border-color: transparent; }
  50% { border-color: #8b8b8b; }
  to { border-color: transparent; }
}

@media only screen and (max-width: 767px), (min-device-width: 320px) and (max-device-width: 767px) {
  .tag-area {
    font-size: 1.5em !important;
  }
}
</style>
