<template>
  <div class="box">
		<div class="container is-fluid">
			<div
				v-html="details"
				class="has-text-centered">
			</div>
		</div>
  </div>
</template>

<script>
import { information } from '../fixtures/information.js'

export default {
  data () {
    return {
			details: information.about.details
    }
  }
}
</script>

<style>
.sub-text {
	margin-top: 1.5rem;
}
.about-paragraph {
	padding-bottom: 1rem;
}
</style>
