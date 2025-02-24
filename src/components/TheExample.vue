<script setup>
import { watch } from "vue"
import { useScreenStore } from "../stores/screen.js"
import { debounce } from "../utils/screen/debounce.js"

const screen = useScreenStore()

// Handle screen resizing
watch(
  () => screen.width,
  () => {
    debouncedRecreate()
  },
)

const debouncedRecreate = debounce(() => {
  console.log("Screen size has changed")
}, 200)
</script>

<template>
  <div>
    <p>Screen width is: {{ screen.width }}</p>
    <p>Screen size is mobile: {{ screen.isMobile }}</p>
  </div>
</template>
