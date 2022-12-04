<script>
import skills from "../data/skills";
import gsap from 'gsap'

export default {
	data() {
		return {
      mySkills: skills[0],
      currTech: 3
		};
	},
  mounted() {
    this.tl = gsap.timeline({ 
        paused: true
      })
      .from(this.$refs.myid, {opacity: 0, duration: 0.5})
      .to(this.$refs.myid, {opacity: 100, duration: 1})
  },  
	methods: {
		toggle(type) {
      this.currTech = type
			this.mySkills = skills[type]
      this.tl.restart();
		}
	}
};
</script>

<template>
  <div class="sectionContainer justify-center bg-customBeigeDark">
    <h1 class="aboutTitle">About Me</h1>
    <div class="aboutContent">
      <img src="../../images/ID.JPG" class="myPicture"/>
      <div class="aboutInfo">
        <p class="aboutParagraph">A graduate of De La Salle University with a Bachelor's Degree in Computer Science, Major in Software Technology. I am hoping to gain more experience in the professional industry, especially in the field of Front-end or Full-Stack Engineering.</p>
        <div class="flex justify-center mt-7">
          <button @click="toggle(0)" class="group iconAnchor" :class="[currTech == 0 ? 'iconAnchorActive' : '']"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg><p class="iconTip">Front-end</p></button>
          <button @click="toggle(1)" class="group iconAnchor" :class="[currTech == 1 ? 'iconAnchorActive' : '']"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg><p class="iconTip">Back-end</p></button>
          <button @click="toggle(2)" class="group iconAnchor" :class="[currTech == 2 ? 'iconAnchorActive' : '']"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg><p class="iconTip">Others</p></button>
        </div>

        <ul class="techItemsContainer" ref="myid">
            <li class="techItems" v-for="item in mySkills.techs" :key="item">
              <p>{{item}}</p>
            </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<style scoped>
#titleName{
  font-size: 15vh;
}
</style>
