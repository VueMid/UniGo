<template>
  <section class="flag mt-[44px] lg:hidden">
    <div
      class="container flag__container flex flex-col justify-center items-start gap-[20px] md:flex md:flex-col md:justify-center md:items-start md:gap-[30px]"
    >
      <h4
        class="flag__title text-black text-[22px] font-semibold leading-normal"
      >
        Countries
      </h4>
      <div
        class="flag__bottom-box w-full flex flex-row justify-between items-center"
      >
        <div
          class="flag__bottom-boxes border-yellow border-[1px] rounded-[15px] hidden md:flex md:flex-col md:justify-center md:item-center md:w-[223px]"
        >
          <img
            class="flag__images object-cover rounded-t-[15px] w-[183px] h-[132px] md:w-[223px]"
            src="@/assets/images/berlin.jpg"
            alt="berlin"
          />
          <img
            class="flag__second-images object-cover rounded-t-[15px] w-[183px] h-[132px] md:w-[223px]"
            src="@/assets/images/germany.gif"
            alt="flag__germany"
          />
          <div
            class="flag__bottom-mini-box flag__bottom-mini-box flex flex-col justify-center items-start py-[15px] px-[10px] bg-[#FEF6DE] md:flex md:flex-col md:justify-center md:items-start md:py-[15px] md:px-[10px] rounded-b-[15px]"
          >
            <h5
              class="flag__bottom-titles text-base font-bold leading-normal mb-[10px]"
            >
              Germany
            </h5>
            <p
              class="flag__bottom-texts text-[11px] font-normal leading-[15px] mb-[15px]"
            >
              Lorem ipsum dolor sit amet consectetur. Quis turpis aenean tellus
              tellus venenatis quis congue. Imperdiet nibh massa dictum eu
              blandit pretium interdum faucibus condimentum.
            </p>
            <div
              class="flag__bottom-texts flex flex-row justify-center items-center gap-[10px]"
            >
              <button
                type="button"
                @click="openModalGe"
                class="fla__main-link text-yellow text-[18px] font-medium leading-normal flex flex-row justify-center items-center gap-[15px] lg:active:opacity-60 duration-300"
              >
                Know more
              </button>
            </div>
          </div>
        </div>
        <div
          class="flag__bottom-boxes flex flex-col justify-center items-start border-yellow border-[1px] rounded-[15px] w-[183px] md:flex md:flex-col md:justify-center md:item-center md:w-[223px]"
        >
          <img
            class="flag__images object-cover rounded-t-[15px] w-[183px] h-[132px] md:w-[223px]"
            src="@/assets/images/london.jpg"
            alt="london"
          />
          <img
            class="flag__second-images object-cover rounded-t-[15px] w-[183px] h-[132px] md:w-[223px]"
            src="@/assets/images/uk.gif"
            alt="flag__uk"
          />
          <div
            class="flag__bottom-mini-box flex flex-col justify-center items-start py-[15px] px-[10px] bg-[#FEF6DE] rounded-b-[15px] md:flex md:flex-col md:justify-center md:items-start md:py-[15px] md:px-[10px]"
          >
            <h5
              class="flag__bottom-titles text-base font-bold leading-normal mb-[10px]"
            >
              UK
            </h5>
            <p
              class="flag__bottom-texts text-[11px] font-normal leading-[15px] mb-[15px]"
            >
              Lorem ipsum dolor sit amet consectetur. Quis turpis aenean tellus
              tellus venenatis quis congue. Imperdiet nibh massa dictum eu
              blandit pretium interdum faucibus condimentum.
            </p>
            <div
              class="flag__bottom-texts flex flex-row justify-center items-center gap-[10px]"
            >
              <button
                type="button"
                @click="openModalUk"
                class="fla__main-link text-yellow text-[18px] font-medium leading-normal flex flex-row justify-center items-center gap-[15px] lg:active:opacity-60 duration-300"
              >
                Know more
              </button>
            </div>
          </div>
        </div>
        <div
          class="flag__bottom-boxes-box flex flex-col justify-center items-start border-yellow border-[1px] rounded-[15px] w-[183px] md:flex md:flex-col md:justify-center md:item-center md:w-[223px]"
        >
          <img
            class="flag__images object-cover rounded-t-[15px] w-[183px] h-[132px] md:w-[223px]"
            src="@/assets/images/usa.jpg"
            alt="france__flag"
          />
          <img
            class="flag__second-images object-cover rounded-t-[15px] w-[183px] h-[132px] md:w-[223px]"
            src="@/assets/images/usa.gif"
            alt="flag__usa"
          />
          <div
            class="flag__bottom-mini-box flex flex-col justify-center items-start py-[15px] px-[10px] bg-[#FEF6DE] rounded-b-[15px] md:flex md:flex-col md:justify-center md:items-start md:py-[15px] md:px-[10px]"
          >
            <h5
              class="flag__bottom-titles text-base font-bold leading-normal mb-[10px]"
            >
              USA
            </h5>
            <p
              class="flag__bottom-texts text-[11px] font-normal leading-[15px] mb-[15px]"
            >
              Lorem ipsum dolor sit amet consectetur. Quis turpis aenean tellus
              tellus venenatis quis congue. Imperdiet nibh massa dictum eu
              blandit pretium interdum faucibus condimentum.
            </p>
            <div
              class="flag__bottom-texts flex flex-row justify-center items-center gap-[10px]"
            >
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
    </div>
  </section>
  <!-- Modal -->
  <Transition name="modal" class="relative z-[1111]">
    <div class="easy__main-modal" v-if="isModalOpenedGe">
      <GermanyMdComponent @closeModalGe="closeModalGe" />
    </div>
  </Transition>
  <Transition name="modal" class="relative z-[1111]">
    <div class="easy__main-modal" v-if="isModalOpenedUk">
      <UkMdComponent @closeModalUk="closeModalUk" />
    </div>
  </Transition>
  <Transition name="modal" class="relative z-[1111]">
    <div class="easy__main-modal" v-if="isModalOpenedUs">
      <UsaMdComponent @closeModalUs="closeModalUs" />
    </div>
  </Transition>
</template>
<script>
import GermanyMdComponent from "../components/GermanyMdComponent.vue";
import UkMdComponent from "../components/UkMdComponent.vue";
import UsaMdComponent from "../components/UsaMdComponent.vue";
export default {
  data() {
    return {
      isModalOpenedGe: false,
      isModalOpenedUk: false,
      isModalOpenedUs: false,
    };
  },
  components: { GermanyMdComponent, UkMdComponent, UsaMdComponent },
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
    openModalUs() {
      this.isModalOpenedUs = true;
      document.body.style.overflow = "hidden";
    },
    closeModalUs() {
      this.isModalOpenedUs = false;
      document.body.style.overflow = "auto";
    },
  },
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
@media (max-width: 1023px) {
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
    }
    &__second-images {
      position: absolute;
      top: 65px;
      opacity: 0.3;
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
@media (max-width: 767px) {
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
    }
    &__second-images {
      position: absolute;
      top: 54px;
      opacity: 0.3;
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
@media (max-width: 420px) {
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
      width: 180px;
    }
    &__bottom-boxes-box {
      width: 180px;
    }
    &__images {
      width: 180px;
    }
    &__second-images {
      width: 180px;
      position: absolute;
      top: 54px;
      opacity: 0.3;
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
@media (max-width: 410px) {
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
      width: 170px;
    }
    &__bottom-boxes-box {
      width: 176px;
    }
    &__images {
      width: 176px;
    }
    &__second-images {
      width: 176px;
      position: absolute;
      top: 54px;
      opacity: 0.3;
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
@media (max-width: 390px) {
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
      width: 170px;
    }
    &__bottom-boxes-box {
      width: 170px;
    }
    &__images {
      width: 170px;
    }
    &__second-images {
      width: 170px;
      position: absolute;
      top: 54px;
      opacity: 0.3;
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
@media (max-width: 380px) {
  .flag {
    &__container {
      position: relative;
    }
    &__title {
      font-family: "Inter";
    }
    &__bottom-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    &__bottom-boxes {
      width: 162px;
    }
    &__bottom-boxes-box {
      width: 153px;
    }
    &__images {
      width: 153px;
    }
    &__second-images {
      width: 153px;
      position: absolute;
      top: 54px;
      opacity: 0.3;
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
@media (max-width: 375px) {
  .flag {
    &__container {
      position: relative;
    }
    &__title {
      font-family: "Inter";
    }
    &__bottom-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    &__bottom-boxes {
      width: 162px;
    }
    &__bottom-boxes-box {
      width: 162px;
    }
    &__images {
      width: 162px;
    }
    &__second-images {
      width: 162px;
      position: absolute;
      top: 54px;
      opacity: 0.3;
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
@media (max-width: 360px) {
  .flag {
    &__container {
      position: relative;
    }
    &__title {
      font-family: "Inter";
    }
    &__bottom-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    &__bottom-boxes {
      width: 155px;
    }
    &__bottom-boxes-box {
      width: 155px;
    }
    &__images {
      width: 155px;
    }
    &__second-images {
      width: 155px;
      position: absolute;
      top: 54px;
      opacity: 0.3;
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
