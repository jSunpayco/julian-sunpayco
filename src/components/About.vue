<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="sectionContainer bg-red-600">
    <h1 id="titleName" class="font-bold text-center">Julian Sunpayco</h1>
    <p class="font-bold text-center mt-10">Hi! I like to make stuff on the web. Here are a few things about me.</p>
  </div>
</template>

<style scoped>
#titleName{
  font-size: 15vh;
}
</style>
