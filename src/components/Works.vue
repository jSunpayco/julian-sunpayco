<script>
import exps from "../data/experiences";
import gsap from 'gsap'
import Work from '@/components/Work.vue'

export default{
  data() {
		return {
      expFiltered: exps,
      isOpened: false,
      currFilter: 'All'
		};
	},
  mounted() {
    this.tl = gsap.timeline({ 
        paused: true
      })
      .from("#singleWork", {opacity: 0, stagger: 0.3})
      .to("#singleWork", {opacity: 100, duration: 0.3})
    
    this.tl.restart();
  },
  components: { Work },
	methods: {
		toggle() {
			this.isOpened = !this.isOpened;
		},
    filterWorks(type) {

      if(type == 'All')
        this.expFiltered = exps
      else
        this.expFiltered = exps.filter(aWork => aWork.type.startsWith(type))
      
      this.currFilter = type
      this.toggle()  
      return
    }
	}
}
</script>

<template>
  <div class="worksContainer">
    <h1 id="titleName" class="worksTitle">My Experiences</h1>

    <div class="flex justify-center lg:justify-end mt-8">
      <button class="flex flex-row justify-between border-2 border-customRose rounded-lg p-2 w-48 bg-customJet" @click.prevent="toggle()" aria-label="FilterWorks">
        <p class="select-none text-white">Filter: {{currFilter}}</p>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg></div>
      </button>
    </div>

    
    <div class="absolute -lg:centerAbsItem lg:right-10 mx-auto w-48 mt-5 rounded-lg bg-customJet z-20" :class="[isOpened ? 'visible' : 'invisible']">
      <ul>
        <li class="p-3 hover:bg-customGreenDark rounded-t-lg cursor-pointer" @click.prevent="filterWorks('All')" :class="[currFilter == 'All' ? 'bg-customGreenDark' : 'bg-transparent']">
          <p class="select-none text-white">All</p>
        </li>
        <li class="p-3 hover:bg-customGreenDark cursor-pointer" @click.prevent="filterWorks('Academic')" :class="[currFilter == 'Academic' ? 'bg-customGreenDark' : 'bg-transparent']">
          <p class="select-none text-white">Academic</p>
        </li>
        <li class="p-3 hover:bg-customGreenDark cursor-pointer" @click.prevent="filterWorks('Personal')" :class="[currFilter == 'Personal' ? 'bg-customGreenDark' : 'bg-transparent']">
          <p class="select-none text-white">Personal</p>
        </li>
        <li class="p-3 hover:bg-customGreenDark rounded-b-lg cursor-pointer" @click.prevent="filterWorks('Professional')" :class="[currFilter == 'Professional' ? 'bg-customGreenDark' : 'bg-transparent']">
          <p class="select-none text-white">Professional</p>
        </li>
      </ul>
    </div>

    <div class="workGridContainer">
      <div class="workGrid">
        <div v-for="item in expFiltered.slice().reverse()" :key="item">
          <Work :aWork="item" id="singleWork"></Work>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
#titleName{
  font-family: "Butler";
}
</style>
