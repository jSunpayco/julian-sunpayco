<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1 id="titleName" class="font-bold text-center">Julian Sunpayco</h1>
</template>

<style scoped>
#titleName{
  font-size: 15vh;
}
</style>
