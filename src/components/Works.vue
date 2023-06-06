<script>
import exps from "../data/experiences";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import Work from '@/components/Work.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

gsap.registerPlugin(ScrollTrigger);

export default{
  data() {
		return {
      target: null,
      dropwdown: null,
      grid: null,
      expFiltered: exps,
      isOpened: false,
      currFilter: 'All'
		};
	},
  mounted() {
    this.animateListItems();

    this.target = this.$refs.target;
    this.dropwdown = this.$refs.dropwdown;
    document.addEventListener('click', this.handleOutsideClick);
    this.grid = this.$refs.grid;
  },
  components: { Work },
	methods: {
    animateListItems() {
      setTimeout(() => {
        const listItems = gsap.utils.toArray('#singleWork');

        listItems.forEach((item, index) => {
          gsap.fromTo(
            item,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              delay: (index * 0.1),
              scrollTrigger: {
                trigger: this.$refs.grid,
                toggleActions: 'play none none reverse',
              }
            }
          );
        });
      }, 100)
    },
		toggle() {
			this.isOpened = !this.isOpened;
      if (this.isOpened) {
        gsap.set(this.dropwdown, { height: 'auto' });
        gsap.from(this.dropwdown, { height: 0, duration: 0.3 });
      } else {
        gsap.to(this.dropwdown, { height: 0, duration: 0.3 });
      }
		},
    toggleClose(){
      this.isOpened = false;
      gsap.to(this.dropwdown, { height: 0, duration: 0.3 });
    },
    handleOutsideClick(event) {
      if (this.target && !this.target.contains(event.target)) {
        this.toggleClose();
      }
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
	},
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
}
</script>

<template>
  <div class="worksContainer">
    <h1 id="titleName" class="worksTitle">My Experiences</h1>

    <div class="flex justify-center lg:justify-end mt-8">
      <button class="flex flex-row justify-between rounded-lg p-2 w-48 bg-customJet" @click.prevent="toggle()" aria-label="FilterWorks" ref="target">
        <p class="select-none text-white ml-1">Filter: {{currFilter}}</p>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg></div>
      </button>
    </div>
    
    <div class="absolute -lg:centerAbsItem lg:right-10 mx-auto w-48 mt-2 rounded-lg bg-customJet z-20 overflow-hidden h-0" ref="dropwdown">
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

    <div class="workGridContainer" ref="grid">
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
