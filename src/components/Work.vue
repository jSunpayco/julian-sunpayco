<script>
export default{
    props: ['aWork'],
    data() {
		return {
            mySkills: new URL(`../../images/${this.aWork.preview}`, import.meta.url).href
		};
	}
}
</script>

<template>
    <!-- <p class="techItems">{{mySkills}}</p> -->
    <div class="rounded-lg h-full">
        <div class="relative">
            <div class="absolute bg-customBeigeDark bg-opacity-95 h-full w-full opacity-0 hover:opacity-100 transition-opacity px-6 py-4">
                <p class="font-medium pointer-events-none">
                    {{aWork.description}}
                </p>
            </div>
            <img :src="`../../images/${this.aWork.preview}`" class="aspect-video rounded-t-lg"/>
        </div>
        <div class="workInfo">
            <p class="font-bold">{{aWork.title}} @ <a :href="aWork.link" class="font-normal text-blue-600 underline">{{aWork.linkName}}</a></p>
            <p>{{aWork.year}}</p>
        </div>
    </div>
</template>

<style scoped>
</style>