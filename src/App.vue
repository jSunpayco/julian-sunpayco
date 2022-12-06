<script>
import {RouterView} from 'vue-router'

export default {
	data() {
		return {
			open: false
		};
	},
	methods: {
		toggle() {
			this.open = !this.open;
		}
	}
};
</script>

<template>
  
  <div class="w-screen fixed z-10 bg-customBeigeDark">
    <div class="container px-4 mx-auto max-w-7xl">
        <nav class="flex justify-between items-center py-2">
            <a class="uppercase font-extrabold text-base py-2 rounded-full text-black" href="/#landing">
                Sunpayco
            </a>
            <ul class="hidden lg:flex ml-auto items-center w-auto space-x-12" v-scroll-spy-active="{ class: 'naviLinkActive' }" v-scroll-spy-link >
                <li class="w-14"><a class="naviLink" href="#landing">Home</a></li>
                <li class="w-14"><a class="naviLink" href="#about">About</a></li>
                <li class="w-14"><a class="naviLink" href="#works">Experience</a></li>
            </ul>
            <div class="mx-5">
              <button class="lg:hidden block text-black hover:text-customBeigeDarker" @click.prevent="toggle()">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
        </nav>
    </div>

  </div>

  <div class="sideNaviContainer" :class="[open ? 'max-w-full' : 'max-w-0']">
    <div class="fixed inset-0 bg-gray-800 opacity-25" :class="[open ? 'visible' : 'invisible']"></div>
    <nav class="sideNavi"
      :class="[open ? 'visible' : 'invisible']">
        <div class="flex items-center mb-12">
            <button class="navbar-close" @click.prevent="toggle()">
                <svg class="h-6 w-6 cursor-pointer hover:text-customGreenDarker" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        <div>
            <ul>
                <li class="mb-1"><a @click="toggle()" class="sideNaviText" href="#landing">Home</a></li>
                <li class="mb-1"><a @click="toggle()" class="sideNaviText" href="#about">About</a></li>
                <li class="mb-1"><a @click="toggle()" class="sideNaviText" href="#works">Experience</a></li>
            </ul>
        </div>
    </nav>
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
  background-color: #395144;
}
</style>
