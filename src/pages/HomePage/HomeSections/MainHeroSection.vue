<template>
  <section class="hero w-full py-[20px] hidden lg:block">
    <div class="container hero__container">
      <video
        class="hero__background-video border-[6px] border-yellow"
        autoplay="true"
        loop
        muted
        playsinline
        preload="auto"
      >
        <source src="@/assets/images/unigo.mp4" type="video/mp4" />
      </video>
      <div class="header__left-box" @click="$router.push('/')">
        <img
          class="header__logo w-[155px] h-[33px]"
          src="@/assets/icons/logo__image-second.svg"
          alt="logo__image"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
};
</script>
<style lang="scss" scoped>
.hero {
  &__background-video {
    background-attachment: fixed !important;
    margin: 0 auto !important;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 700px;
    object-fit: cover;
  }
  &__container {
  }
}
</style>
