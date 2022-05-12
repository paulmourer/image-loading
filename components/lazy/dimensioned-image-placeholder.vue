<template>
  <img
    class="max-w-full h-auto"
    :src="getPlaceholderSVG({ width: 2400, height: 1350 })"
    data-src="https://images.prismic.io/blackdiamond-web/ece44f30-c901-4456-bd43-60ab9bc1ff07_lighting-2400x1350px.jpg?auto=compress,format"
    width="2400"
    height="1350"
    :alt="alt"
  >
</template>

<script>
import { placeholderSVG } from '~/mixins/placeholderSVG'
export default {
  mixins: [placeholderSVG],
  props: {
    alt: String
  }
}
</script>
