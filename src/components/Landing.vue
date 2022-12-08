<script>

import spotify from "../data/spotify";

export default{
  data() {
    return{
      index: 0,
      artists: spotify[0]
    }
  },
  methods: {
    nextArtist: function(){
      if(this.index == 4)
        this.index = 0
      else
        this.index += 1

      this.artists = spotify[this.index]
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
    
      <div class="aspect-square max-h-80 mx-auto lg:mx-0 mt-5">
        <h1 id="titleName" class="m-auto font-bold text-center w-full text-3xl">Top Artists on Spotify</h1>
        <div class="bg-customBeigeDark aspect-square max-h-80 mx-auto lg:mx-0 mt-5 text-center">
          <img :src="`../../images/${artists.img}`" class="px-4 pt-4" @click.prevent="nextArtist()">
          <a class="text-xl font-normal py-5 inline-block" :href="artists.link" target="_blank">{{artists.name}}</a>
        </div>
      </div>

    </div>
    <div class="h-[650px] mt-24 w-[513px] mx-auto lg:mx-0 bg-Grad bg-contain"></div>

  </div>
</template>

<style scoped>
#titleName{
  font-family: "Butler";
}
</style>
