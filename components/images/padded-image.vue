<template>
  <div class="relative aspect-ratio">
    <PlainImage class="absolute top-0 left-0 right-0 bottom-0"/>
  </div>
</template>

<script>
import PlainImage from "./plain-image.vue";

export default {
  components: {
    PlainImage
  }
}
</script>

<style>
.aspect-ratio {
  padding-top: 56.25%;
}
</style>
