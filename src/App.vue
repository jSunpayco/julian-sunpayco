<script>
import {RouterView} from 'vue-router'
</script>

<template>
  <!-- https://tailwindsites.com/templates/outofthebox -->
  <!-- https://supacode.dev/#contact -->
  <!-- https://nikitar.tech/#edu-exp -->
  <!-- https://stackoverflow.com/questions/70824120/scroll-to-section-from-child-component-in-vue-js -->
  <!-- https://vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state -->
  <!-- https://medium.com/ascentic-technology/sticky-scrollspy-table-of-contents-in-vue-js-73d2d6f0a1cd -->
  
  <div class="w-screen fixed z-10">
    <div id="naviBar" class="container px-4 mx-auto max-w-7xl">
        <nav class="flex justify-between items-center py-8">
            <a class="uppercase font-extrabold text-base py-2 rounded-full text-black" href="/#landing">
                My Portfolio
            </a>
            <ul class="hidden lg:flex ml-auto items-center w-auto space-x-12">
                <li><a class="naviLink" href="#landing">Home</a></li>
                <li><a class="naviLink" href="#about">About</a></li>
                <li><a class="naviLink" href="#works">Projects</a></li>
                <li><a class="naviLink" href="#contact">Contact</a></li>
            </ul>        
        </nav>
    </div>
  </div>

  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<style>
@import url("./style.css");
html {
  scroll-behavior: smooth;
}
body{
  background-color: #F0EBCE;
}
.naviLink:active{
  border-bottom: 2px solid rebeccapurple;
}
</style>
