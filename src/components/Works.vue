<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<template>
  <!-- <div class="sectionContainer bg-red-400 justify-center"> -->
  <swiper
      :slidesPerView="1"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="sectionContainer bg-customBeigeDark sm:justify-center">
          <div class="w-full h-2/3 flex flex-col justify-between sm:flex-row">
            <img src="../../public/images/ID.JPG" class="rounded-full aspect-square h-2/3 object-cover m-auto"/>
            <p class="font-bold align-middle text-center m-auto w-1/2">A graduate of De La Salle University with a Bachelor's Degree in Computer Science, Major in Software Technology. I am hoping to gain much experience in the professional industry, especially in the field of Front-end or Full-Stack Engineering.</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sectionContainer bg-red-400 justify-center">
          <div class="w-full h-2/3 flex flex-col justify-between sm:flex-row">
            <img src="../../public/images/ID.JPG" class="rounded-full aspect-square h-2/3 object-cover m-auto"/>
            <p class="font-bold align-middle text-center m-auto w-1/2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe veritatis reiciendis eveniet suscipit, sunt magni quam, quaerat nobis natus consequuntur velit voluptatem culpa maxime iusto quos odit totam amet officia!</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="sectionContainer bg-red-400 justify-center">
          <div class="w-full h-2/3 flex flex-col justify-between sm:flex-row">
            <img src="../../public/images/ID.JPG" class="rounded-full aspect-square h-2/3 object-cover m-auto"/>
            <p class="font-bold align-middle text-center m-auto w-1/2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe veritatis reiciendis eveniet suscipit, sunt magni quam, quaerat nobis natus consequuntur velit voluptatem culpa maxime iusto quos odit totam amet officia!</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- </div> -->
</template>

<style scoped>
#titleName{
  font-size: 15vh;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
