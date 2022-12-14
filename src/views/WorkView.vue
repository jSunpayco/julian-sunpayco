<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'
import exps from "../data/experiences";

const route = useRoute()
const myWork = exps.find(work => work.idName == route.params.title)
const router = useRouter();
    
onMounted(async () => {
    await router.isReady();
});

function getPrev(){
    if(myWork.id == 1){
        return exps[exps.length-1].idName
    }
    else{
        return exps[myWork.id-2].idName
    }
}
const prevArtist = getPrev()

function getNext(){
    if(myWork.id == 5){
        return exps[0].idName
    }
    else{
        return exps[myWork.id].idName
    }
}
const nextArtist = getNext()
</script>

<template>
    <div class="min-w-screen min-h-screen">

        <div class="worksContainer">
            <div class="border-b-2 w-2/3 border-black mx-auto">
                <h1 class="worksTitle">
                    {{myWork.title}}
                </h1>
                <div class="flex flex-row justify-center px-2 py-2 items-end">
                    <router-link :to="{name:'Experience', params:{title:prevArtist}, query:{page:'prev'}}">
                        <button class="w-8 h-8 bg-customJet mr-3 rounded-full hover:scale-125 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mx-auto text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg>
                        </button>
                    </router-link>
                    <h2 class="worksTitle text-xl mt-2 w-1/2">{{myWork.type}}</h2>
                    <router-link :to="{name:'Experience', params:{title:nextArtist}, query:{page:'next'}}">
                        <button class="w-8 h-8 bg-customJet rounded-full hover:scale-125 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mx-auto text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg>
                        </button>
                    </router-link>
                </div>
            </div>

            <div class="detailsContainer">
                <div class="detailImageContainer">
                    <a class="linkOverImage" :href="myWork.link" target="_blank">Visit</a>
                    <img :src="`/images/works/${myWork.preview}`" class="workDetailImage">
                </div>
                
                <h3 id="neuzeit" class="detailInfoTitle text-center mt-5 hidden xl:block">About the experience</h3>

                <div class="detailInfoContainer">
                    <h3 class="detailInfoTitle block xl:hidden">About the experience</h3>
                    <p id="butler" class="mb-0 text-justify px-5">{{myWork.description}}</p>
                    <a class="detailInfoLink" :href="myWork.link" target="_blank">
                        <span class="select-none text-white">Visit</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.worksTitle{
    font-family: "Butler";
}
#butler{
    font-family: "Butler";
}
#neuzeit{
  font-family: "Neuzeit";
}
</style>