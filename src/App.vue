<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <Navigation/>
  <HelloWorld msg="Vite + Vue" />
  <div class="one"></div>
  <div class="two"></div>
  <div class="thr"></div>
  <div class="fou"></div>
</template>

<style>
@import url("./style.css");
body{
  background-color: #F0EBCE;
}

.one{
  background-color: #395144;
  height: 20px;
  width: 100%;
}

.two{
  background-color: #4E6C50;
  height: 20px;
  width: 100%;
}

.thr{
  background-color: #AA8B56;
  height: 20px;
  width: 100%;
}
</style>
