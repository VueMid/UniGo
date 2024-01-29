<template>
  <section class="carousel mt-[80px] lg:hidden">
    <div class="container carousel__container">
      <h2
        class="carousel__main-title text-black text-[22px] font-semibold leading-normal md:mb-[8px]"
      >
        Comments
      </h2>
      <SwiperSection class="flex flex-col justify-center items-center" />
    </div>
  </section>
</template>
<script>
import SwiperSection from "../components/SwiperSection.vue";
export default {
  components: { SwiperSection },
};
</script>
<style lang="scss" scoped>
@media (max-width: 767px) {
  .carousel {
    &__container {
    }

    &__top-title {
      font-family: "Inter";
    }

    &__box {
    }

    &__main-boxes {
    }

    &__mini-boxes {
      width: 100%;
      width: 390px !important;
    }
  }
}
</style>
