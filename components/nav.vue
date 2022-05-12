<template>
  <ul class="flex mb-8 pb-0 flex-wrap">
    <li v-for="(link, i) in links" :key="link.name" class="m-4">
      <a :href="link.href" :class="{ 'font-bold': activeLink === i }">{{ link.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'home',
          href: '/'
        },
        {
          name: 'padded',
          href: '/pad-image'
        },
        {
          name: 'padded (story)',
          href: '/story-image-broken'
        },
        {
          name: 'aspect ratio',
          href: '/aspect-ratio'
        },
        {
          name: 'dimensions',
          href: '/dimensions-image'
        },
        {
          name: 'lazy - aspect ratio',
          href: '/lazy/aspect-ratio'
        },
        {
          name: 'lazy - aspect ratio / alt',
          href: '/lazy/aspect-ratio-alt'
        },
        {
          name: 'lazy - dimensions',
          href: '/lazy/dimensions-image'
        },
        {
          name: 'lazy - dimensions / alt',
          href: '/lazy/dimensions-image-alt'
        },
        {
          name: '🥇 lazy - dimensions / alt / placeholder 🥇',
          href: '/lazy/dimensions-image-placeholder'
        },
        {
          name: 'native lazyload',
          href: '/lazy/native'
        },
        {
          name: 'summary',
          href: '/summary'
        }
      ],
      activeLink: null
    }
  },
  watch: {
    $route() {
      this.activeLink = this.links.findIndex(link => link.href === window.location.pathname)
    }
  },
  mounted() {
    this.activeLink = this.links.findIndex(link => link.href === window.location.pathname)
  },
}
</script>
