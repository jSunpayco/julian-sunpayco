<script>
export default{
    props: ['aWork']
}
</script>

<template>
    <div class="rounded-lg h-full hover:scale-110 transition-transform cursor-pointer">
        <img :src="`../../images/${this.aWork.preview}`" class="aspect-video rounded-t-lg"/>
        <div class="workInfo">
            <p class="font-bold text-white xl:text-black">{{aWork.title}}</p>
            <p class="text-white xl:text-black">{{aWork.year}}</p>
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