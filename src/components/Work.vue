<script>
export default{
    props: ['aWork']
}
</script>

<template>
    <div class="h-full p-2">
        <router-link :to="{name:'Experience', params:{title:aWork.idName}}">
            <img :src="`../../images/${this.aWork.preview}`" class="aspect-video cursor-pointer rounded-t-2xl hover:scale-105 transition-transform">
        </router-link>
        <div class="workInfo">
            <p class="font-bold text-black">{{aWork.title}}</p>
            <p class="text-black">{{aWork.year}}</p>
        </div>
        <ul class="techItemsContainerWork">
            <li class="techItemsWork" v-for="item in aWork.techs" :key="item">
              <p>{{item}}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>