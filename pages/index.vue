<template>
  <the-content>
    <plain-image />
    <template v-slot:storyImage>
      <plain-image />
    </template>
  </the-content>
</template>

<script>
import TheContent from "~/components/the-content.vue";
import PlainImage from "~/components/images/plain-image.vue";

export default {
  components: {
    PlainImage,
    TheContent
  }
}
</script>
