<template>
  <the-content>
    <lazy-load-button/>
    <lazy-dimensioned-placeholder-image alt="alt text" />
    <template v-slot:storyImage>
      <lazy-dimensioned-placeholder-image alt="alt text" />
    </template>
  </the-content>
</template>

<script>
import LazyDimensionedPlaceholderImage from '~/components/lazy/dimensioned-image-placeholder.vue'
import theContent from '~/components/the-content.vue'
import LazyLoadButton from '~/components/lazy-load-button.vue'
export default {
  components: { theContent, LazyDimensionedPlaceholderImage, LazyLoadButton },
}
</script>
