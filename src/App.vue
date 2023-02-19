<script>
import {RouterView} from 'vue-router'
import gsap from 'gsap'

export default {
	data() {
		return {
			open: false
		};
	},
  mounted() {
    this.tl = gsap.timeline({ 
        paused: true
      })
      .from("#sideLink", {opacity: 0, stagger: 0.3})
      .to("#sideLink", {opacity: 100, duration: 0.3})
    
    this.tl.restart();
  },
	methods: {
		toggle() {
			this.open = !this.open;
      if(this.open == true){
        this.tl.restart();
      }
		}
	}
};
</script>

<template>
  
  <div class="w-screen fixed z-10 bg-customBeigeLight">
    <div class="container px-4 mx-auto max-w-7xl">
        <nav class="flex justify-between items-center py-2">
            <a class="uppercase font-extrabold text-base py-2 rounded-full text-customJet" href="/#landing">
                sunpayco
            </a>
            <ul class="hidden lg:flex ml-auto my-4 items-center space-x-12 text-customJet">
                <!-- <li class="w-14"><a class="naviLink" href="#landing">HOME</a></li> -->
                <li><a id="links" class="naviLink" href="/#landing">about</a></li>
                <li><a id="links" class="naviLink" href="/#works">experience</a></li>
                <li><a id="links" class="naviLink" href="/#footer">contact</a></li>
            </ul>
            <div class="mx-5">
              <button class="lg:hidden block text-black hover:text-customRose transition-colors" @click.prevent="toggle()" aria-label="SideMenu">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
        </nav>
    </div>
  </div>

  <div class="sideNaviContainer" :class="[open ? 'right-1/2' : 'right-full']">
    <!-- <div class="fixed inset-0 bg-gray-800 opacity-25" :class="[open ? 'visible' : 'invisible']"></div> -->
    <nav class="sideNavi">
      <div class="flex items-center mb-12">
          <button class="navbar-close" @click.prevent="toggle()" aria-label="CloseSideMenu">
              <svg class="h-6 w-6 cursor-pointer text-white hover:text-customRose" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"></path>
              </svg>
          </button>
      </div>
      <ul>
          <li id="sideLink" class="mb-1 tracking-widest"><a @click="toggle()" class="sideNaviText" href="/#landing">ABOUT</a></li>
          <li id="sideLink" class="mb-1 tracking-widest"><a @click="toggle()" class="sideNaviText" href="/#works">EXPERIENCE</a></li>
          <li id="sideLink" class="mb-1 tracking-widest"><a @click="toggle()" class="sideNaviText" href="/#footer">CONTACT</a></li>
      </ul>
    </nav>
  </div>

  <router-view v-slot="{ Component, route }">
    <transition :name="route.query.page">
      <component :is="Component" :key="$route.path"/>
    </transition>
  </router-view>
</template>

<style>
@import url("./style.css");
html {
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #AA8B56;
  -webkit-border-radius: 20px;
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #886F45;
}
body{
  background-color: #E6E4D7;
  /* background-color: #84DCCF; */
}
#links{
  font-family: "Neuzit";
}
#sideLink{
  font-family: "Neuzit";
}

.prev-enter-active{
  transition: all 0.75s ease-out;
  transition-delay: 0.75s;
}
.prev-leave-active {
  transition: all 0.75s ease-out;
}
.prev-enter-to {
  transform: translate(0);
}
.prev-enter-from {
  transform: translateX(100%);
}
.prev-leave-to {
  transform: translate(-100%);
}
.prev-leave-from {
  transform: translate(0);
}

.next-enter-active{
  transition: all 0.75s ease-out;
  transition-delay: 0.75s;
}
.next-leave-active {
  transition: all 0.75s ease-out;
}
.next-enter-to {
  transform: translate(0);
}
.next-enter-from {
  transform: translateX(-100%);
}
.next-leave-to {
  transform: translate(100%);
}
.next-leave-from {
  transform: translate(0);
}
</style>
