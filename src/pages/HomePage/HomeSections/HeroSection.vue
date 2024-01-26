<template>
  <section class="hero w-full lg:hidden">
    <div
      class="container hero__container flex flex-row justify-center items-center"
    >
      <video
        class="hero__background-video"
        autoplay="true"
        loop
        muted
        playsinline
        preload="auto"
      >
        <source src="@/assets/images/unigo.mp4" type="video/mp4" />
      </video>
      <HeaderComponent />
      <HeroComponent />
    </div>
  </section>
</template>
<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
export default {
  components: { HeaderComponent, HeroComponent },
};
</script>
<style lang="scss" scoped>
@media (max-width: 1023px) {
  .hero {
    &__background-video {
      margin: 0 auto !important;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 420px;
      object-fit: cover;
      background-position: center;
    }
    &__container {
    }
  }
}
@media (max-width: 767px) {
  .hero {
    &__background-video {
      margin: 0 auto !important;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 844px;
      object-fit: cover;
      background-position: center;
    }
    &__container {
    }
  }
}
</style>
