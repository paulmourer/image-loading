<template>
  <div class="container mx-auto pt-20 summary">
    <Nav />
    <h2 class="text-4xl mb-8">Possible layout shift prevention strategies</h2>
    <ul>
      <li>
        <p>nothing</p>
        <ul>
          <li>image takes up no space while loading</li>
          <li>
            aspect ratio is not necessarily preserved (height auto can solve
            many issues)
          </li>
        </ul>
      </li>
      <li>
        <p>padding</p>
        <ul>
          <li>creates additional markup</li>
          <li>image & wrapper do not have an implied width (flexbox issue)</li>
        </ul>
      </li>
      <li>
        <p>placeholder</p>
        <ul>
          <li>placeholder needs to have the same dimensions as image, otherwise causes shift</li>
        </ul>
      </li>
      <li>
        <p> CSS aspect ratio </p>
        <ul>
          <li>aspect ratio is not applied if src attribute is invalid (lazy loading)</li>
        </ul>
        </li>
      <li>
        <p>image dimensions</p>
        <ul>
          <li>will break if there's an alt provided AND an invalid src attribute (lazy loading)</li>
        </ul>
      </li>
      <li>
        <p>native lazyloading with dimensions</p>
        <ul>
          <li>convenient, zero config, zero dependency</li>
          <li>inconsistent browser behavior</li>
          <li>not 100% support</li>
          <li>no control over loading experience*</li>
        </ul>
      </li>
      <li>
        <p>image dimensions with proper aspect ratio placeholder</p>
        <ul>
          <li>you win</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Nav from '@/components/nav.vue'

export default {
  components: { Nav }
}
</script>

<style>
.summary ul {
  @apply ml-4 pb-10;
}
.summary p {
  @apply text-xl font-bold;
}
</style>
