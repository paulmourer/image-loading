<template>
  <the-content>
    <padded-image />
    <template v-slot:storyImage>
      <padded-image />
    </template>
  </the-content>
</template>

<script>
import PaddedImage from '~/components/images/padded-image.vue'
import theContent from '~/components/the-content.vue'
export default {
  components: { theContent, PaddedImage },

}
</script>
