<template>
  <the-content>
    <lazy-load-button/>
    <lazy-dimensioned-image />
    <template v-slot:storyImage>
      <lazy-dimensioned-image />
    </template>
  </the-content>
</template>

<script>
import LazyDimensionedImage from '~/components/lazy/dimensioned-image.vue'
import theContent from '~/components/the-content.vue'
import LazyLoadButton from '~/components/lazy-load-button.vue'
export default {
  components: { theContent, LazyDimensionedImage, LazyLoadButton },
}
</script>
