<template>
  <section class="hero flex flex-col justify-center items-center gap-[333px]">
    <h2
      class="hero__top-title text-[32px] font-bold leading-normal w-max-[236px] text-center text-white mt-[276px] md:text-[45px] md:mt-[140px] md:w-[350px]"
    >
      Study
      <span
        class="hero__span text-yellow text-[32px] font-bold leading-normal md:text-[45px]"
      >
        ABROAD
      </span>
      with us
    </h2>
    <div
      class="hero__bottom-box flex flex-col justify-center items-center md:hidden"
    >
      <img
        class="hero__border mb-[45px] w-[54px] h-[84px]"
        src="@/assets/icons/border.svg"
        alt="border"
      />
      <img
        class="hero__cursor absolute z-[2] cursor-pointer w-[26px] h-[51px]"
        src="@/assets/icons/arrow__bottom.svg"
        alt="arrow__down"
      />
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media (max-width: 1023px) {
  .hero {
    &__top-title {
      font-family: "Josefin Slab";
    }

    &__span {
      font-family: "Josefin Slab";
    }

    &__bottom-box {
    }

    &__border {
    }

    &__cursor {
      animation: animate 2s infinite;
    }
    @keyframes animate {
      0% {
        margin-top: 0;
      }
      50% {
        margin-bottom: 30px;
      }
      100% {
        margin-top: 0;
      }
    }
  }
}
@media (max-width: 767px) {
  .hero {
    &__top-title {
      font-family: "Josefin Slab";
    }

    &__span {
      font-family: "Josefin Slab";
    }

    &__bottom-box {
    }

    &__border {
    }

    &__cursor {
      animation: animate 2s infinite;
    }
    @keyframes animate {
      0% {
        margin-top: 0;
      }
      50% {
        margin-bottom: 30px;
      }
      100% {
        margin-top: 0;
      }
    }
  }
}
</style>
