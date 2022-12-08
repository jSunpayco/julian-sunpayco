<script setup>
import { useRoute } from 'vue-router'

import exps from "../data/experiences";

const route = useRoute()
const myWork = exps.find(work => work.idName == route.params.title)
</script>

<template>
    <div class="min-w-screen min-h-screen">
        <div class="worksContainer">
            <div class="border-b-2 w-2/3 border-black mx-auto">
                <h1 class="worksTitle">
                {{myWork.title}}
                </h1>
                <h2 class="worksTitle text-xl mt-2">{{myWork.type}}</h2>
            </div>

            <div class="mt-10 w-2/3 mx-auto relative">
                <div class="md:h-[300px] max-h-[300px] w-full relative">
                    <a class="absolute bg-customBeigeDark h-full w-full items-center flex justify-center opacity-0 hover:opacity-90 transition-opacity select-none cursor-pointer font-bold" :href="myWork.link" target="_blank">View More</a>
                    <img :src="`../../images/${myWork.preview}`" class="object-cover object-top h-full w-full top-0">
                </div>

                <div class="flex flex-col xl:flex-row justify-around w-full xl:py-10 items-center">
                    <h3 class="text-xl font-bold py-7 xl:py-0">About the experience</h3>
                    <p class="mb-0 text-justify px-5">{{myWork.description}}</p>
                    <a class="h-14 w-14 my-7 xl:my-0 font-bold rounded-full bg-customJet flex items-center justify-center p-3 cursor-pointer
                    hover:scale-125 transition-all" :href="myWork.link" target="_blank">
                        <span class="select-none text-white">View</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>