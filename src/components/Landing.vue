<script>
import gsap from 'gsap'
import spotify from "../data/spotify";

export default{
  data() {
    return{
      index: 0,
      artists: spotify[0],
      show: false
    }
  },
  mounted() {
    this.tl = gsap.timeline({ 
        paused: true
      })
      .from(this.$refs.spotifyName, {opacity: 0, delay: .65})
      .to(this.$refs.spotifyName, {opacity: 100, duration: 0.5})
    
    this.tl.restart();
  },
  methods: {
    nextArtist: function(){
      this.tl.restart();

      this.show = true
      if(this.index == 4)
        this.index = 0
      else
        this.index += 1
      this.artists = spotify[this.index]

      setTimeout(() => this.show = false, 650);
    },
    prevArtist: function(){
      this.tl.restart();

      this.show = true
      if(this.index == 0)
        this.index = 4
      else
        this.index -= 1
      this.artists = spotify[this.index]

      setTimeout(() => this.show = false, 650);
    }
  }
}

</script>

<template>
  <div class="sectionContainer">
    <div class="mt-24 md:px-10 lg:px-0 w-full lg:w-1/2">
      <h1 id="titleName" class="font-bold text-center lg:text-start text-customRaisin w-full text-8xl">Welcome!</h1>
      <p class="font-normal text-lg text-black text-justify">My name is <span class="font-bold">Julian Sunpayco</span> and I hold a bachelor's degree in Computer Science. I look forward to gain more professional experience as a Junior / Entry-level / Intern in <span class="font-bold">Web Development</span>. Feel free to contact me through one of these platforms.</p>
      
      <div class="flex justify-center lg:justify-start mt-2">

        <a href="https://www.linkedin.com/in/julian-rafael-sunpayco-b4365222a/" class="iconAnchor" title="LinkedIn" target="_blank">
          <!-- Linkedin -->
          <img src="../../images/lin.png" class="h-14"/>
        </a>

        <a href="https://github.com/jSunpayco" class="iconAnchor" title="GitHub" target="_blank">
          <!-- GitHub -->
          <img src="../../images/git.png" class="h-14"/>
        </a>

        <a href="mailto:julian.sunpayco@gmail.com" class="iconAnchor" title="Email">
          <!-- Mail -->
          <img src="../../images/download.png" class="h-14"/>
        </a>

        <a href="https://docs.google.com/document/d/1EZ16z_8f27CigaGc-rS0BvDa1Y-1iiTk/edit?usp=sharing&ouid=108257889502087676299&rtpof=true&sd=true" class="iconAnchor" title="Resume" target="_blank">
          <!-- Resume -->
          <img src="../../images/resume.png" class="h-14"/>
        </a>

      </div>
    
      <div class="aspect-square max-h-72 mx-auto lg:mx-0 mt-2">
        <h1 id="titleName" class="m-auto font-bold text-center w-full text-3xl">Top Artists on Spotify</h1>

        <div class="flex flex-row justify-center my-2">
          <button class="w-8 h-8 bg-customJet mr-3 rounded-full hover:scale-125 transition-all" @click.prevent="prevArtist()" :disabled="show">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mx-auto text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg>
          </button>
          <button class="w-8 h-8 bg-customJet rounded-full hover:scale-125 transition-all" @click.prevent="nextArtist()" :disabled="show">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mx-auto text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>

        <div class="bg-customBeigeDark aspect-square max-h-80 mx-auto lg:mx-0 text-center">
          <img v-if="(show === false)" :src="`../../images/spotify/${artists.img}`" class="px-4 pt-4">
          <img v-else src="../../images/static.gif" class="px-4 pt-4">
          <a class="text-xl font-normal py-5 inline-block" :href="artists.link" target="_blank" ref="spotifyName">{{artists.name}}</a>
        </div>
      </div>

    </div>

    <div class="h-[680px] mt-24 w-[513px] mx-auto lg:mx-0 bg-Grad bg-cover bg-no-repeat"></div>

  </div>
</template>

<style scoped>
#titleName{
  font-family: "Butler";
}
</style>
