<template>
  <the-content>
    <zr-image />
    <template v-slot:storyImage>
      <zr-image />
    </template>
  </the-content>
</template>

<script>
import theContent from '~/components/the-content.vue'
import ZrImage from '@/components/lazy/zr-image.vue'

export default {
  components: { theContent, ZrImage },
}
</script>

