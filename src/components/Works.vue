<script>
import exps from "../data/experiences";

import Work from '@/components/Work.vue'

export default{
  data() {
		return {
      myWorks: ['SWE Internship', 'DOTA', 'Pasakay', 'Tableau'],
      exps: exps
		};
	},
  components: { Work }
}
</script>

<template>
  <div class="worksContainer">
    <h1 id="titleName" class="worksTitle">My Experience</h1>

    <div class="workGridContainer">
      <div class="workGrid">
        <div v-for="item in exps.slice().reverse()" :key="item">
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
