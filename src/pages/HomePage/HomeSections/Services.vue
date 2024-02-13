<template>
  <section class="services lg:mt-[660px]">
    <div
      class="container services__container flex flex-col justify-center items-start gap-[20px] md:gap-[30px] lg:gap-[40px]"
    >
      <h3
        class="services__title text-[22px] font-semibold leading-normal text-black lg:text-[26px]"
      >
        Our services
      </h3>
      <div
        class="services__bottom w-full flex flex-col justify-center items-center gap-[15px] md:flex md:flex-row md:justify-between md:items-start md:gap-[15px]"
      >
        <div
          class="services__boxes border-yellow border-[2px] w-full pb-[68px] pt-[20px] pl-[14px] rounded-[5px] md:pt-[21px] md:pl-[16px] md:w-[355px] md:rounded-br-[40px] md:h-[210px] lg:w-[610px] lg:h-[300px] lg:pt-[40px] lg:pl-[40px]"
        >
          <h3
            class="services__bottom-titles text-[16px] font-semibold leading-normal text-[#2E2E2E] w-max-[260px] mb-[15px] md:text-[18px] lg:text-[20px] lg:mb-[20px]"
          >
            Free consulting about universities
          </h3>
          <p
            class="services__bottom-texts w-[157px] text-[13px] font-normal leading-normal text-[#5F5F5F] md:text-[12px] lg:w-max-[256px] lg:text-[16px]"
          >
            We help students choose the right university and major by providing
            them with several options.
          </p>
        </div>
        <div
          class="services__boxes-second border-yellow border-[2px] w-full pb-[68px] pt-[20px] pl-[14px] rounded-[5px] md:pt-[21px] md:pl-[16px] md:w-[355px] md:rounded-bl-[40px] md:h-[210px] lg:w-[610px] lg:h-[300px] lg:pt-[40px] lg:pl-[40px]"
        >
          <h3
            class="services__bottom-titles text-[16px] font-semibold leading-normal text-[#2E2E2E] w-max-[219px] mb-[15px] md:text-[18px] lg:text-[20px] lg:mb-[20px]"
          >
            Application Process Support
          </h3>
          <p
            class="services__bottom-texts w-[140px] text-[13px] font-normal leading-normal text-[#5F5F5F] md:text-[12px] lg:w-max-[256px] lg:text-[16px]"
          >
            We help you gain admission to your dream university.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.services {
  &__container {
  }
  &__title {
    font-family: "Inter";
  }
  &__bottom {
  }
  &__boxes {
    position: relative;
    &::after {
      z-index: 2;
      position: absolute;
      display: inline-block;
      content: "";
      width: 260px;
      height: 180px;
      bottom: -11px;
      right: 45px;
      background-image: url("@/assets/icons/icon__first.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  &__boxes-second {
    position: relative;
    &::after {
      z-index: 2;
      position: absolute;
      display: inline-block;
      content: "";
      width: 260px;
      height: 190px;
      bottom: -1.4px;
      right: 45px;
      background-image: url("@/assets/icons/icon__second.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  &__bottom-titles {
    font-family: "Inter";
  }
  &__bottom-texts {
    width: 100%;
    max-width: 256px;
    font-family: "Inter";
  }
  &__boxes-second {
  }
}
@media (max-width: 1279px) {
  .services {
    &__container {
    }
    &__title {
      font-family: "Inter";
    }
    &__bottom {
    }
    &__boxes {
      position: relative;
      &::after {
        z-index: 2;
        position: absolute;
        display: inline-block;
        content: "";
        width: 130px;
        height: 85px;
        bottom: -1.4px;
        right: 25px;
        background-image: url("@/assets/icons/icon__first.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    &__boxes-second {
      position: relative;
      &::after {
        z-index: 2;
        position: absolute;
        display: inline-block;
        content: "";
        width: 137px;
        height: 100px;
        bottom: -1.4px;
        right: 25px;
        background-image: url("@/assets/icons/icon__second.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    &__bottom-titles {
      font-family: "Inter";
    }
    &__bottom-texts {
      font-family: "Inter";
    }
    &__boxes-second {
    }
  }
}
@media (max-width: 1023px) {
  .services {
    margin-top: 190px;
    &__container {
    }
    &__title {
      font-family: "Inter";
    }
    &__bottom {
    }
    &__boxes {
      position: relative;
      &::after {
        z-index: 2;
        position: absolute;
        display: inline-block;
        content: "";
        width: 130px;
        height: 85px;
        bottom: -1.4px;
        right: 22px;
        background-image: url("@/assets/icons/icon__first.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    &__boxes-second {
      position: relative;
      &::after {
        z-index: 2;
        position: absolute;
        display: inline-block;
        content: "";
        width: 137px;
        height: 100px;
        bottom: -1.4px;
        right: 22px;
        background-image: url("@/assets/icons/icon__second.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    &__bottom-titles {
      font-family: "Inter";
    }
    &__bottom-texts {
      font-family: "Inter";
    }
    &__boxes-second {
    }
  }
}
@media (max-width: 820px) {
  .services {
    margin-top: 190px;
    &__container {
    }
    &__title {
      font-family: "Inter";
    }
    &__bottom {
    }
    &__boxes {
      width: 380px;
      position: relative;
      &::after {
        z-index: 2;
        position: absolute;
        display: inline-block;
        content: "";
        width: 130px;
        height: 85px;
        bottom: -1.4px;
        right: 22px;
        background-image: url("@/assets/icons/icon__first.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    &__boxes-second {
      width: 380px;
      position: relative;
      &::after {
        z-index: 2;
        position: absolute;
        display: inline-block;
        content: "";
        width: 137px;
        height: 100px;
        bottom: -1.4px;
        right: 22px;
        background-image: url("@/assets/icons/icon__second.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    &__bottom-titles {
      font-family: "Inter";
    }
    &__bottom-texts {
      font-family: "Inter";
    }
    &__boxes-second {
    }
  }
}
@media (max-width: 767px) {
  .services {
    margin-top: 100px;
    &__container {
    }
    &__title {
    }
    &__bottom {
    }
    &__boxes {
      width: 100%;
      max-width: 400px;
      position: relative;
      &::after {
        z-index: 2;
        position: absolute;
        display: inline-block;
        content: "";
        width: 130px;
        height: 85px;
        bottom: -1.4px;
        right: 22px;
        background-image: url("@/assets/icons/icon__first.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    &__boxes-second {
      width: 100%;
      max-width: 400px;
      position: relative;
      &::after {
        z-index: 2;
        position: absolute;
        display: inline-block;
        content: "";
        width: 137px;
        height: 100px;
        bottom: -1.4px;
        right: 22px;
        background-image: url("@/assets/icons/icon__second.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    &__bottom-titles {
    }
    &__bottom-texts {
    }
    &__boxes-second {
    }
  }
}
</style>
