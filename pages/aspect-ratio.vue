<template>
  <the-content>
    <aspect-ratio-image />
    <template v-slot:storyImage>
      <aspect-ratio-image />
    </template>
  </the-content>
</template>

<script>
import AspectRatioImage from '~/components/images/aspect-ratio-image.vue'
import theContent from '~/components/the-content.vue'
export default {
  components: { theContent, AspectRatioImage },
}
</script>
