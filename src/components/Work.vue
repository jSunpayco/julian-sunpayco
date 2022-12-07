<script>
export default{
    props: ['aWork']
}
</script>

<template>
    <div class="rounded-lg h-full p-4">
        <img :src="`../../images/${this.aWork.preview}`" class="aspect-video"/>
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