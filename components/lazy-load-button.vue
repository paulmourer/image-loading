<template>
  <button @click="loadEmAll" class="fixed top-4 right-4 bg-gray-300 p-8">Load images</button>
</template>

<script>
export default {
  methods: {
    // hey look, its a hack
    loadEmAll() {
      Array.from(document.querySelectorAll('[data-src]')).forEach(img => {
        img.src = img.dataset.src
      })
    }
  }
}
</script>
