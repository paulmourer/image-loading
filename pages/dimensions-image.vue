<template>
  <the-content>
    <dimensioned-image alt="alt text" />
    <template v-slot:storyImage>
      <dimensioned-image alt="alt text" />
    </template>
  </the-content>
</template>

<script>
import DimensionedImage from '~/components/images/dimensioned-image.vue'
import theContent from '~/components/the-content.vue'
export default {
  components: { theContent, DimensionedImage },
}
</script>
