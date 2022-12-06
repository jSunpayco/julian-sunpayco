<script>
export default{
    props: ['aWork']
}
</script>

<template>
    <div class="rounded-lg h-full">
        <div class="relative">
            <div class="workDescription">
                <p class="font-normal pointer-events-none text-justify">
                    {{aWork.description}}
                </p>
            </div>
            <img :src="`../../images/${this.aWork.preview}`" class="aspect-video rounded-t-lg"/>
        </div>
        <div class="workInfo">
            <p class="font-bold text-white xl:text-black">{{aWork.title}} @ <a :href="aWork.link" class="linkStyle" target="_blank">{{aWork.linkName}}</a></p>
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