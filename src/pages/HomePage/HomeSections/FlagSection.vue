<template>
  <section class="flag lg:mt-[66px] hidden lg:block">
    <div
      class="container flag__container lg:flex lg:flex-col lg:justify-center lg:items-start gap-[40px]"
    >
      <h4 class="flag__title lg:text-[26px] lg:font-semibold lg:leading-normal">
        Countries
      </h4>
      <div
        class="flag__bottom-box w-full lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-[30px]"
      >
        <div
          class="flag__bottom-boxes w-full bg-white lg:rounded-[15px] border-yellow border-[1px]"
        >
          <img
            class="flag__images object-cover w-full lg:rounded-t-[15px] cursor-pointer"
            src="@/assets/images/berlin.jpg"
            alt="berlin"
          />
          <img
            class="flag__second-images object-cover w-full lg:rounded-t-[15px] cursor-pointer"
            src="@/assets/images/germany.gif"
            alt="flag__germany"
          />
          <div
            class="flag__bottom-mini-box lg:flex lg:flex-col lg:justify-center lg:items-start lg:py-[20px] lg:px-[20px] bg-[#FEF6DE] lg:rounded-b-[15px]"
          >
            <h5
              class="flag__bottom-titles text-black lg:text-[24px] lg:font-bold lg:leading-normal lg:mb-[15px]"
            >
              Germany
            </h5>
            <p class="flag__bottom-texts lg:pb-[20px] lg:w-max-[260px]">
              Lorem ipsum dolor sit amet consectetur. Quis turpis aenean tellus
              tellus venenatis quis congue. Imperdiet nibh massa dictum eu
              blandit pretium interdum faucibus condimentum.
            </p>
            <button
              type="button"
              @click="openModalGe"
              class="fla__main-link text-yellow text-[18px] font-medium leading-normal flex flex-row justify-center items-center gap-[15px] lg:active:opacity-60 duration-300"
            >
              Know more
            </button>
          </div>
        </div>
        <div
          class="flag__bottom-boxes w-full bg-white lg:rounded-[15px] border-yellow border-[1px]"
        >
          <img
            class="flag__images object-cover w-full lg:rounded-t-[15px] cursor-pointer"
            src="@/assets/images/london.jpg"
            alt="london"
          />
          <img
            class="flag__second-images object-cover w-full lg:rounded-t-[15px] cursor-pointer"
            src="@/assets/images/uk.gif"
            alt="flag__uk"
          />
          <div
            class="flag__bottom-mini-box lg:flex lg:flex-col lg:justify-center lg:items-start lg:py-[20px] lg:px-[20px] bg-[#FEF6DE] lg:rounded-b-[15px]"
          >
            <h5
              class="flag__bottom-titles text-black lg:text-[24px] lg:font-bold lg:leading-normal lg:mb-[15px]"
            >
              UK
            </h5>
            <p class="flag__bottom-texts lg:pb-[20px] lg:w-max-[260px]">
              Lorem ipsum dolor sit amet consectetur. Quis turpis aenean tellus
              tellus venenatis quis congue. Imperdiet nibh massa dictum eu
              blandit pretium interdum faucibus condimentum.
            </p>
            <button
              type="button"
              @click="openModalUk"
              class="fla__main-link text-yellow text-[18px] font-medium leading-normal flex flex-row justify-center items-center gap-[15px] lg:active:opacity-60 duration-300"
            >
              Know more
            </button>
          </div>
        </div>
        <div
          class="flag__bottom-boxes w-full bg-white lg:rounded-[15px] border-yellow border-[1px]"
        >
          <img
            class="flag__images object-cover w-full lg:rounded-t-[15px] cursor-pointer"
            src="@/assets/images/seoul.jpeg"
            alt="france__flag"
          />
          <img
            class="flag__second-images object-cover w-full lg:rounded-t-[15px] cursor-pointer"
            src="@/assets/images/south__korea.gif"
            alt="flag__france"
          />
          <div
            class="flag__bottom-mini-box lg:flex lg:flex-col lg:justify-center lg:items-start lg:py-[20px] lg:px-[20px] bg-[#FEF6DE] lg:rounded-b-[15px]"
          >
            <h5
              class="flag__bottom-titles text-black lg:text-[24px] lg:font-bold lg:leading-normal lg:mb-[15px]"
            >
              South Korea
            </h5>
            <p class="flag__bottom-texts lg:pb-[20px] lg:w-max-[260px]">
              Lorem ipsum dolor sit amet consectetur. Quis turpis aenean tellus
              tellus venenatis quis congue. Imperdiet nibh massa dictum eu
              blandit pretium interdum faucibus condimentum.
            </p>
            <button
              type="button"
              @click="openModalKo"
              class="fla__main-link text-yellow text-[18px] font-medium leading-normal flex flex-row justify-center items-center gap-[15px] lg:active:opacity-60 duration-300"
            >
              Know more
            </button>
          </div>
        </div>
        <div
          class="flag__bottom-boxes w-full bg-white lg:rounded-[15px] border-yellow border-[1px]"
        >
          <img
            class="flag__images object-cover w-full lg:rounded-t-[15px] cursor-pointer"
            src="@/assets/images/usa.jpg"
            alt="france__flag"
          />
          <img
            class="flag__second-images object-cover w-full lg:rounded-t-[15px] cursor-pointer"
            src="@/assets/images/usa.gif"
            alt="flag__usa"
          />
          <div
            class="flag__bottom-mini-box lg:flex lg:flex-col lg:justify-center lg:items-start lg:py-[20px] lg:px-[20px] bg-[#FEF6DE] lg:rounded-b-[15px]"
          >
            <h5
              class="flag__bottom-titles text-black lg:text-[24px] lg:font-bold lg:leading-normal lg:mb-[15px]"
            >
              USA
            </h5>
            <p class="flag__bottom-texts lg:pb-[20px] lg:w-max-[260px]">
              Lorem ipsum dolor sit amet consectetur. Quis turpis aenean tellus
              tellus venenatis quis congue. Imperdiet nibh massa dictum eu
              blandit pretium interdum faucibus condimentum.
            </p>
            <button
              type="button"
              @click="openModalUs"
              class="fla__main-link text-yellow text-[18px] font-medium leading-normal flex flex-row justify-center items-center gap-[15px] lg:active:opacity-60 duration-300"
            >
              Know more
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Modal -->
  <Transition name="modal" class="relative z-[1111]">
    <div class="easy__main-modal" v-if="isModalOpenedGe">
      <GermanyComponent @closeModalGe="closeModalGe" />
    </div>
  </Transition>
  <Transition name="modal" class="relative z-[1111]">
    <div class="easy__main-modal" v-if="isModalOpenedUk">
      <UkComponent @closeModalUk="closeModalUk" />
    </div>
  </Transition>
  <Transition name="modal" class="relative z-[1111]">
    <div class="easy__main-modal" v-if="isModalOpenedKo">
      <KoreaComponent @closeModalKo="closeModalKo" />
    </div>
  </Transition>
  <Transition name="modal" class="relative z-[1111]">
    <div class="easy__main-modal" v-if="isModalOpenedUs">
      <UsaComponent @closeModalUs="closeModalUs" />
    </div>
  </Transition>
</template>
<script>
import GermanyComponent from "../components/GermanyComponent.vue";
import UkComponent from "../components/UkComponent.vue";
import KoreaComponent from "../components/KoreaComponent.vue";
import UsaComponent from "../components/UsaComponent.vue";
export default {
  data() {
    return {
      isModalOpenedGe: false,
      isModalOpenedUk: false,
      isModalOpenedKo: false,
      isModalOpenedUs: false,
    };
  },
  methods: {
    openModalGe() {
      this.isModalOpenedGe = true;
      document.body.style.overflow = "hidden";
    },
    closeModalGe() {
      this.isModalOpenedGe = false;
      document.body.style.overflow = "auto";
    },
    openModalUk() {
      this.isModalOpenedUk = true;
      document.body.style.overflow = "hidden";
    },
    closeModalUk() {
      this.isModalOpenedUk = false;
      document.body.style.overflow = "auto";
    },
    openModalKo() {
      this.isModalOpenedKo = true;
      document.body.style.overflow = "hidden";
    },
    closeModalKo() {
      this.isModalOpenedKo = false;
      document.body.style.overflow = "auto";
    },
    openModalUs() {
      this.isModalOpenedUs = true;
      document.body.style.overflow = "hidden";
    },
    closeModalUs() {
      this.isModalOpenedUs = false;
      document.body.style.overflow = "auto";
    },
  },
  components: { GermanyComponent, UkComponent, KoreaComponent, UsaComponent },
};
</script>
<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: 0.4s ease-in-out;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.flag {
  &__container {
    position: relative;
  }
  &__title {
    font-family: "Inter";
  }
  &__bottom-box {
  }
  &__bottom-boxes {
  }
  &__images {
    width: 100%;
    max-width: 286px;
    height: 178px;
  }
  &__second-images {
    width: 100% !important;
    max-width: 286px !important;
    height: 178px;
    position: absolute;
    top: 80px;
    opacity: 0;
    transition: all 0.8s ease;
    &:hover {
      opacity: 0.5;
      transition: all 0.8s ease;
    }
  }
  &__bottom-mini-box {
  }
  &__bottom-titles {
    font-family: "Inter";
  }
  &__bottom-texts {
    font-family: "Inter";
  }
}
@media (max-width: 1279px) {
  .flag {
    &__container {
      position: relative;
    }
    &__title {
      font-family: "Inter";
    }
    &__bottom-box {
    }
    &__bottom-boxes {
    }
    &__images {
      width: 100%;
      max-width: 286px;
      height: 178px;
    }
    &__second-images {
      width: 222px !important;
      height: 178px;
      position: absolute;
      top: 81px;
      opacity: 0;
      transition: all 0.8s ease;
      &:hover {
        opacity: 0.5;
        transition: all 0.8s ease;
      }
    }
    &__bottom-mini-box {
    }
    &__bottom-titles {
      font-family: "Inter";
    }
    &__bottom-texts {
      font-family: "Inter";
    }
  }
}
</style>
