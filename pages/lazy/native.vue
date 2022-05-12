<template>
  <the-content>
    <Native alt="alt text" />
    <template v-slot:storyImage>
      <Native alt="alt text" />
    </template>
  </the-content>
</template>

<script>
import Native from '@/components/lazy/native.vue'
import theContent from '~/components/the-content.vue'
export default {
  components: { theContent, Native },
}
</script>
