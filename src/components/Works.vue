<script>
import exps from "../data/experiences";

import Work from '@/components/Work.vue'

export default{
  data() {
		return {
      expFiltered: exps,
      isOpened: false,
      currFilter: 'All'
		};
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
        this.expFiltered = exps.filter(aWork => aWork.type == type)
      
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

    <div class="flex justify-end mt-8">
      <button class="flex flex-row justify-between border-2 border-red-800 rounded-lg p-2 w-48 bg-white" @click.prevent="toggle()">
        <p class="select-none">Filter: {{currFilter}}</p>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg></div>
      </button>
    </div>

    
    <div class="absolute right-10 w-48 mt-5 rounded-lg bg-white" :class="[isOpened ? 'visible' : 'invisible']">
      <ul>
        <li class="p-3 hover:bg-customLavender rounded-t-lg cursor-pointer text-black" @click.prevent="filterWorks('All')">
          <p class="select-none">All</p>
        </li>
        <li class="p-3 hover:bg-customLavender rounded-t-lg cursor-pointer text-black" @click.prevent="filterWorks('Academic')">
          <p class="select-none">Academic</p>
        </li>
        <li class="p-3 hover:bg-customLavender cursor-pointer text-black" @click.prevent="filterWorks('Personal')">
          <p class="select-none">Personal</p>
        </li>
        <li class="p-3 hover:bg-customLavender rounded-b-lg cursor-pointer text-black" @click.prevent="filterWorks('Professional')">
          <p class="select-none">Professional</p>
        </li>
      </ul>
    </div>

    <div class="workGridContainer">
      <div class="workGrid">
        <div v-for="item in expFiltered.slice().reverse()" :key="item">
          <Work :aWork="item"></Work>
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
