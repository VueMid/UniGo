<template>
  <section class="servicesSecond lg:mt-[24px]">
    <div
      class="container servicesSecond__container flex flex-col justify-center items-center gap-[20px]"
    >
      <div
        class="servicesSecond__bottom w-full flex flex-col justify-center items-center gap-[15px] md:flex md:flex-row md:justify-between md:items-start md:gap-[15px]"
      >
        <div
          class="servicesSecond__boxes border-yellow border-[2px] w-full pb-[68px] pt-[20px] pl-[14px] rounded-[5px] md:pt-[21px] md:pl-[16px] md:w-[355px] md:rounded-tr-[40px] md:h-[210px] lg:w-[610px] lg:h-[300px] lg:pt-[40px] lg:pl-[40px]"
        >
          <h3
            class="servicesSecond__bottom-titles text-[16px] font-semibold leading-normal text-[#2E2E2E] w-max-[260px] mb-[15px] md:text-[18px] lg:text-[20px] lg:mb-[20px]"
          >
            Guidance on Finances
          </h3>
          <p
            class="servicesSecond__bottom-texts w-[143px] text-[13px] font-normal leading-normal text-[#5F5F5F] md:w-[138px] lg:w-[256px] lg:text-[16px]"
          >
            We help you obtain various scholarships ranging from 50% to 100%.
          </p>
        </div>
        <div
          class="servicesSecond__boxes-second border-yellow border-[2px] w-full pb-[68px] pt-[20px] pl-[14px] rounded-[5px] md:pt-[21px] md:pl-[16px] md:w-[355px] md:rounded-tl-[40px] md:h-[210px] lg:w-[610px] lg:h-[300px] lg:pt-[40px] lg:pl-[40px]"
        >
          <h3
            class="servicesSecond__bottom-titles text-[16px] font-semibold leading-normal text-[#2E2E2E] w-max-[219px] mb-[15px] md:text-[18px] lg:text-[20px] lg:mb-[20px]"
          >
            Visa Process
          </h3>
          <p
            class="servicesSecond__bottom-texts w-[149px] text-[13px] font-normal leading-normal text-[#5F5F5F] md:w-[140px] lg:w-[256px] lg:text-[16px]"
          >
            Our qualified visa representatives will help you with your visa
            application.
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
.servicesSecond {
  margin-top: 18px;
  &__container {
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
      width: 250px;
      height: 190px;
      bottom: -11px;
      right: 45px;
      background-image: url("@/assets/icons/icon__third.svg");
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
    position: relative;
    &::after {
      z-index: 2;
      position: absolute;
      display: inline-block;
      content: "";
      width: 244px;
      height: 180px;
      bottom: -1.5px;
      right: 45px;
      background-image: url("@/assets/icons/icon__fourth.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
@media (max-width: 1279px) {
  .servicesSecond {
    margin-top: 18px;
    &__container {
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
        width: 132px;
        height: 95px;
        bottom: -1.4px;
        right: 25px;
        background-image: url("@/assets/icons/icon__third.svg");
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
      position: relative;
      &::after {
        z-index: 2;
        position: absolute;
        display: inline-block;
        content: "";
        width: 136px;
        height: 100px;
        bottom: -1.4px;
        right: 25px;
        background-image: url("@/assets/icons/icon__fourth.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
}
@media (max-width: 1023px) {
  .servicesSecond {
    margin-top: 18px;
    &__container {
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
        width: 132px;
        height: 95px;
        bottom: -1.4px;
        right: 22px;
        background-image: url("@/assets/icons/icon__third.svg");
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
      position: relative;
      &::after {
        z-index: 2;
        position: absolute;
        display: inline-block;
        content: "";
        width: 136px;
        height: 100px;
        bottom: -1.4px;
        right: 22px;
        background-image: url("@/assets/icons/icon__fourth.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
}
@media (max-width: 820px) {
  .servicesSecond {
    margin-top: 18px;
    &__container {
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
        width: 132px;
        height: 95px;
        bottom: -1.4px;
        right: 22px;
        background-image: url("@/assets/icons/icon__third.svg");
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
      width: 380px;
      position: relative;
      &::after {
        z-index: 2;
        position: absolute;
        display: inline-block;
        content: "";
        width: 136px;
        height: 100px;
        bottom: -1.4px;
        right: 22px;
        background-image: url("@/assets/icons/icon__fourth.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
}
@media (max-width: 767px) {
  .servicesSecond {
    margin-top: 15px;
    &__container {
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
        width: 132px;
        height: 95px;
        bottom: -1.4px;
        right: 22px;
        background-image: url("@/assets/icons/icon__third.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    &__bottom-titles {
      font-family: "Inter";
    }
    &__bottom-texts {
      font-family: "Inter";
      width: 100%;
      max-width: 149px;
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
        width: 136px;
        height: 100px;
        bottom: -1.4px;
        right: 22px;
        background-image: url("@/assets/icons/icon__fourth.svg");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>
