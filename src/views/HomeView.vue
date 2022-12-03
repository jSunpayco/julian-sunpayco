<script>
import Landing from '@/components/Landing.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: "App",
  components: { Landing, About, Contact }
};
</script>

<template>

    <section id="landing">
        <Landing />
        <!-- <button @click="count++">Add</button> -->
    </section>

    <section id="about">
        <About/>
    </section>

    <section id="works">
        <Landing msg="Vite + Vue" />
    </section>

    <section id="contact">
        <Contact/>
    </section>

    <div class="one"></div>
    <div class="two"></div>
    <div class="thr"></div>
    <div class="fou"></div>
</template>

<style>
.one{
  background-color: #395144;
  height: 20px;
  width: 100%;
  /* margin-bottom: 10px; */
}

.two{
  background-color: #4E6C50;
  height: 20px;
  width: 100%;
}

.thr{
  background-color: #AA8B56;
  height: 20px;
  width: 100%;
}
</style>