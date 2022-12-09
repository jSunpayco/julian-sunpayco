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

            <div class="detailsContainer">
                <div class="detailImageContainer">
                    <a class="linkOverImage" :href="myWork.link" target="_blank">Visit</a>
                    <img :src="`../../images/${myWork.preview}`" class="workDetailImage">
                </div>

                <div class="detailInfoContainer">
                    <h3 class="detailInfoTitle">About the experience</h3>
                    <p class="mb-0 text-justify px-5">{{myWork.description}}</p>
                    <a class="detailInfoLink" :href="myWork.link" target="_blank">
                        <span class="select-none text-white">Visit</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>