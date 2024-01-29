<template>
  <swiper
    ref="{swiperRef}"
    :initialSlides="true"
    :slidesPerView="1"
    :centeredSlides="true"
    :spaceBetween="20"
    :pagination="{
      type: 'none',
    }"
    :navigation="false"
    :modules="modules"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide
      class="carousel__swiper-slide cursor-grab py-[20px] duration-200"
      v-for="item in galleryArray"
      :key="item"
    >
      <img
        class="object-cover w-[71px] h-[71px] border-[1px] border-yellow rounded-[50px] absolute right-7 translate-y-[-19px]"
        :src="item.image"
        alt="carousel__images"
      />
      <div class="div bg-[#FEF6DE] px-[20px] rounded-[15px] py-[12px]">
        <h4
          class="carousel__swiper-name text-[18px] font-bold leading-normal text-darker-gray mb-4"
        >
          {{ item.name }}
        </h4>
        <h6
          class="carousel__swiper-university text-[20px] text-darker-gray opacity-65 font-medium leading-[120%] mb-3"
        >
          {{ item.university }}
        </h6>
        <q
          class="carousel__comments text-[16px] text-darker-gray leading-normal font-normal"
        >
          {{ item.comment }}
        </q>
        <img class="mt-2 h-[18px]" :src="item.svg" alt="svg__stars" />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import Abdulaziz from "@/assets/images/face-1.jpg";
import Behzod from "@/assets/images/face-2.jpg";
import Doston from "@/assets/images/face-3.jpg";
import Umidjon from "@/assets/images/face-4.jpg";
import fivestars from "@/assets/images/five__stars.png";
import fourstars from "@/assets/images/four__stars.png";
import threestars from "@/assets/images/three__stars.png";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      counter: 0,
      modules: [Pagination, Autoplay, Navigation],
      galleryArray: [
        {
          name: `Otaboyev Abdulaziz`,
          university: `Turin`,
          comment: `  I studied in the same course with Muhammadjon Tahirjanov and his
                projects caused many good comments by his Teacher. In this
                regard, I wish you success in your work and 5 stars from me
                Supporters`,
          image: Abdulaziz,
          svg: threestars,
        },
        {
          name: `Mo'minjonov Behzod`,
          university: `Turin`,
          comment: `  I studied in the same course with Muhammadjon Tahirjanov and his
                projects caused many good comments by his Teacher. In this
                regard, I wish you success in your work and 5 stars from me
                Supporters`,
          image: Behzod,
          svg: fourstars,
        },
        {
          name: `Sayyidov Doston`,
          university: `Turin`,
          comment: `  I studied in the same course with Muhammadjon Tahirjanov and his
                projects caused many good comments by his Teacher. In this
                regard, I wish you success in your work and 5 stars from me
                Supporters`,
          image: Doston,
          svg: fivestars,
        },
        {
          name: `Turabov Umidjon`,
          university: `Turin`,
          comment: `  I studied in the same course with Muhammadjon Tahirjanov and his
                projects caused many good comments by his Teacher. In this
                regard, I wish you success in your work and 5 stars from me
                Supporters`,
          image: Umidjon,
          svg: fourstars,
        },
      ],
    };
  },
};
</script>
<style scoped>
.carousel__swiper-slide {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: start;
}
.div {
  border: 1px solid #f4ca33;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: start;
}
.swiper-name {
  font-family: "Inter";
}

.swiper-university {
  font-family: "Inter";
}

.comments {
  font-family: "Inter";
  max-width: 200px !important;
}
</style>
