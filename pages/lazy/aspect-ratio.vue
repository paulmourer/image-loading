<template>
  <the-content>
    <lazy-load-button />
    <lazy-aspect-ratio-image />
    <template v-slot:storyImage>
      <lazy-aspect-ratio-image />
    </template>
  </the-content>
</template>

<script>
import LazyAspectRatioImage from '~/components/lazy/aspect-ratio-image.vue'
import theContent from '~/components/the-content.vue'
import LazyLoadButton from '~/components/lazy-load-button.vue'

export default {
  components: { theContent, LazyAspectRatioImage, LazyLoadButton },
}
</script>
