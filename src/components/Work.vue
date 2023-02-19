<script>
export default{
    props: ['aWork']
}
</script>

<template>
    <div class="h-full p-2">
        <router-link :to="{name:'Experience', params:{title:aWork.idName}}">
            <div class="relative">
                <p class="linkOverImage rounded-t-2xl">Read More</p>
                <img :src="`/images/works/${this.aWork.preview}`" class="aspect-video cursor-pointer rounded-t-2xl transition-all" alt="Preview">
            </div>
        </router-link>
        <div class="workInfo">
            <p id="neuzeit" class="font-bold text-customJet">{{aWork.title}}</p>
            <p id="butler" class="text-customJet">{{aWork.year}}</p>
        </div>
        <ul class="techItemsContainerWork">
            <li class="techItemsWork" v-for="item in aWork.techs" :key="item">
              <p id="butler" class="tracking-wide">{{item}}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
#butler{
  font-family: "Butler";
}
#neuzeit{
  font-family: "Neuzeit";
}
</style>