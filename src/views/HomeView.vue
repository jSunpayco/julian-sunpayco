<script>
import Landing from '@/components/Landing.vue';
import About from '@/components/About.vue';
import Works from '@/components/Works.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: "App",
  components: { Landing, About, Works, Contact }
};
</script>

<template>
    <div>
      <section id="landing">
        <Landing />
      </section>

      <!-- <div class="one"></div>
      <div class="two"></div>
      <div class="thr"></div>
      <div class="fou"></div> -->

      <!-- <section id="about">
          <About/>
      </section> -->

      <section id="works">
          <Works/>
      </section>

      <!-- <section id="contact">
          <Contact/>
      </section> -->
    </div>
</template>

<style>
.one{
  background-color: #395144;
  margin-top: 1;
  height: 20px;
  width: 100%;
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