<script>
import Music from '@/components/Music.vue';

export default{
  components:{Music}
}

</script>

<template>
  <div class="sectionContainer">
    <div class="mt-20 lg:my-auto md:px-10 lg:px-0 w-full lg:w-1/2">
      <h1 id="titleName" class="font-bold text-center lg:text-start text-customRaisin w-full text-[40px] xs:text-8xl">Welcome!</h1>
      <p id="titleName" class="font-light text-lg text-customRaisin text-justify tracking-wide mt-5 leading-loose">My name is <span class="font-bold">Julian Sunpayco</span>, and I hold a bachelor's degree in Computer Science. I look forward to gain more professional experience in <span class="font-bold">Software Development</span>. Feel free to contact me through one of these platforms.</p>
      
      <div class="flex justify-center lg:justify-start mt-5 flex-wrap">

        <a href="https://www.linkedin.com/in/julian-sunpayco-b4365222a/" class="iconAnchor" title="LinkedIn" target="_blank">
          <!-- Linkedin -->
          <img src="/images/lin.png" class="h-14" alt="LinkedIn"/>
        </a>

        <a href="https://github.com/jSunpayco" class="iconAnchor" title="GitHub" target="_blank">
          <!-- GitHub -->
          <img src="/images/git.png" class="h-14" alt="GitHub"/>
        </a>

        <a href="mailto:julian.sunpayco@gmail.com" class="iconAnchor" title="Email">
          <!-- Mail -->
          <img src="/images/download.png" class="h-14" alt="E-Mail"/>
        </a>

        <a href="https://docs.google.com/document/d/1EZ16z_8f27CigaGc-rS0BvDa1Y-1iiTk/edit?usp=sharing&ouid=108257889502087676299&rtpof=true&sd=true" class="iconAnchor" title="Resume" target="_blank">
          <!-- Resume -->
          <img src="/images/resume.png" class="h-14" alt="Resume"/>
        </a>

      </div>

    </div>

    <div class="h-96 sm:h-[680px] mt-24 w-full xs:w-4/6 sm:w-[480px] mx-auto lg:mx-0 bg-Grad bg-cover bg-no-repeat bg-right"></div>

  </div>
  <Music />
</template>

<style scoped>
#titleName{
  font-family: "Butler";
}
#paragraph{
  font-family: "Neuzeit";
}
</style>
