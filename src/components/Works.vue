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
    <h1 class="worksTitle mt-2">My Experience</h1>

    <div class="workGridContainer">
      <div class="workGrid">
        <div v-for="item in exps" :key="item">
          <Work :aWork="item"></Work>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
</style>
