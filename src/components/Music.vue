<script>
import spotify from "../data/spotify";
export default{
    data: () => {
        return{
            myData: spotify,
            currIndex: 0,
            loading: false,
            time: 0
        }
    },
    methods: {
        toggleSong: function() {
            if(this.myData[this.currIndex].isPlaying){
                document.getElementById('track').pause()
                this.myData[this.currIndex].isPlaying = false
            }else{
                document.getElementById('track').play()
                this.myData[this.currIndex].isPlaying = true
            }
        },
        updateTime: function(){
            this.time = Math.floor(document.getElementById('track').currentTime)
            if(this.time == 30)
                this.myData[this.currIndex].isPlaying = false
        },
        nextArtist: function() {
            this.loading = true
            this.myData[this.currIndex].isPlaying = false

            if(this.currIndex == 4)
                this.currIndex = 0
            else
                this.currIndex += 1

            let temp = new Image(200, 200)
            temp.src = `/images/spotify/${this.myData[this.currIndex].img}`
            setTimeout(() => this.loading = false, 650);
        },
        prevArtist: function() {
            this.loading = true
            this.myData[this.currIndex].isPlaying = false

            if(this.currIndex == 0)
                this.currIndex = 4
            else
                this.currIndex -= 1

            let temp = new Image(200, 200)
            temp.src = `/images/spotify/${this.myData[this.currIndex].img}`
            setTimeout(() => this.loading = false, 650);
        }
    }
}
</script>

<template>
    <p v-if="myData.length == 0">{{error}}</p>
    <div v-else class="h-full w-2/3 mt-20 mx-auto flex flex-row">

        <audio id="track" :src="`/songs/${myData[currIndex].preview}`"
            @timeupdate="updateTime()">
        </audio>

        <div class="hidden lg:block h-52 aspect-square rounded-2xl relative">
            <img v-if="loading" src="/images/static.gif" class="rounded-2xl h-full w-full">
            <button class="rounded-2xl h-full w-full relative" v-else @click="toggleSong()">
                <p class="linkOverImage bg-opacity-70 rounded-2xl">
                    <svg v-if="myData[currIndex].isPlaying" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" /></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" /></svg>
                </p>
                <img :src="`/images/spotify/${myData[currIndex].img}`" class="rounded-2xl h-full w-full">
            </button>
        </div>

        <div class="flex flex-col items-center lg:items-end">
            <h2 id="butler" class="text-3xl font-bold text-customRaisin">Need Something New to Listen to?</h2>
            <h3 id="butler" class="text-lg w-5/6 text-justify lg:text-right tracking-wide mt-5">Some things in life are more enjoyable with a song to fill the silence. Here are the top 5 artists/bands I listen to on Spotify. You may click the link below to listen to the full song on Spotify, or the image for just the preview.</h3>
            <div class="block lg:hidden h-52 aspect-square rounded-2xl mt-10">
                <img v-if="loading" src="/images/static.gif" class="rounded-2xl h-full w-full">
                <button class="rounded-2xl h-full w-full relative" v-else @click="toggleSong()">
                    <p class="linkOverImage bg-opacity-70 rounded-2xl">
                        <svg v-if="myData[currIndex].isPlaying" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" /></svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" /></svg>
                    </p>
                    <img :src="`/images/spotify/${myData[currIndex].img}`" class="rounded-2xl h-full w-full">
                </button>
            </div>
            <div class="flex flex-row justify-between my-auto mt-10 lg:mt-5 w-full lg:w-5/6">
                <button class="w-32 h-8 bg-customJet rounded-full transition-all" @click.prevent="prevArtist()" :disabled="loading" :class="[loading ? 'bg-slate-500' : 'hover:scale-125']">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mx-auto text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg>
                </button>
                <a id="neuzeit" class="text-2xl tracking-wider px-5 after:underlineInvert after:hover:scale-x-0 after:hover:origin-right relative text-center" :class="[loading ? 'opacity-0' : 'opacity-100']" :href="myData[currIndex].link" target="_blank">{{myData[currIndex].name}}</a>
                <button class="w-32 h-8 bg-customJet rounded-full transition-all" @click.prevent="nextArtist()" :disabled="loading" :class="[loading ? 'bg-slate-500' : 'hover:scale-125']">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mx-auto text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg>
                </button>
            </div>
        </div>
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