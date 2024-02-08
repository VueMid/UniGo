<template>
  <section class="flag mt-[44px] block md:hidden">
    <div
      class="container flag__container flex flex-col justify-center items-start gap-[20px]"
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
          class="flag__bottom-boxes rounded-[15px] bg-[#FEF6DE] flex flex-col justify-center items-start border-[1px] border-yellow"
        >
          <img
            class="flag__images object-cover h-[132px] rounded-t-[15px]"
            src="@/assets/images/london.jpg"
            alt="london"
          />
          <img
            class="flag__second-images object-cover h-[132px] rounded-t-[15px]"
            src="@/assets/images/uk.gif"
            alt="flag__uk"
          />
          <div
            class="flag__bottom-mini-box flex flex-col justify-center items-start px-[10px] py-[10px]"
          >
            <h5
              class="flag__bottom-titles text-base font-bold leading-normal mb-[10px]"
            >
              UK
            </h5>
            <p
              class="flag__bottom-texts text-[11px] font-normal leading-[15px] mb-[15px] opacity-60"
            >
              Lorem ipsum dolor sit amet consectetur. Quis turpis aenean tellus
              tellus venenatis quis congue. Imperdiet nibh massa dictum eu
              blandit pretium interdum faucibus condimentum.
            </p>
            <div class="flag__bottom-texts">
              <button
                type="button"
                @click="openModalUk"
                class="flag__main-link text-yellow text-[16px] font-medium leading-normal flex flex-row justify-center items-center gap-[15px] lg:active:opacity-60 duration-300"
              >
                Know more
              </button>
            </div>
          </div>
        </div>
        <div
          class="flag__bottom-boxes rounded-[15px] bg-[#FEF6DE] flex flex-col justify-center items-start border-[1px] border-yellow"
        >
          <img
            class="flag__images object-cover h-[132px] rounded-t-[15px]"
            src="@/assets/images/usa.jpg"
            alt="france__flag"
          />
          <img
            class="flag__second-images object-cover h-[132px] rounded-t-[15px]"
            src="@/assets/images/usa.gif"
            alt="flag__usa"
          />
          <div
            class="flag__bottom-mini-box flex flex-col justify-center items-start px-[10px] py-[10px]"
          >
            <h5
              class="flag__bottom-titles text-base font-bold leading-normal mb-[10px]"
            >
              USA
            </h5>
            <p
              class="flag__bottom-texts text-[11px] font-normal leading-[15px] mb-[15px] opacity-60"
            >
              Lorem ipsum dolor sit amet consectetur. Quis turpis aenean tellus
              tellus venenatis quis congue. Imperdiet nibh massa dictum eu
              blandit pretium interdum faucibus condimentum.
            </p>
            <div class="flag__bottom-texts">
              <button
                type="button"
                @click="openModalUk"
                class="flag__main-link text-yellow text-[16px] font-medium leading-normal flex flex-row justify-center items-center gap-[15px] lg:active:opacity-60 duration-300"
              >
                Know more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
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
@media (max-width: 767px) {
  .flag {
  }
  .flag__container {
  }
  .flag__title {
  }
  .flag__bottom-box {
  }
  .flag__bottom-boxes {
    width: 100%;
    max-width: 154px;
  }
  .flag__images {
    width: 100%;
    max-width: 154px;
  }
  .flag__second-images {
    position: absolute;
    top: 97px;
    opacity: 0.3;
    width: 100%;
    max-width: 154px;
  }
  .flag__bottom-mini-box {
  }
  .flag__bottom-titles {
  }
  .flag__bottom-texts {
  }
  .flag__main-link {
  }
  .flag__bottom-boxes-box {
  }
}
@media (max-width: 430px) {
  .flag {
  }
  .flag__container {
  }
  .flag__title {
  }
  .flag__bottom-box {
  }
  .flag__bottom-boxes {
    width: 100%;
    max-width: 180px;
  }
  .flag__images {
    width: 100%;
    max-width: 180px;
  }
  .flag__second-images {
    position: absolute;
    top: 97px;
    opacity: 0.3;
    width: 100%;
    max-width: 180px;
  }
  .flag__bottom-mini-box {
  }
  .flag__bottom-titles {
  }
  .flag__bottom-texts {
  }
  .flag__main-link {
  }
  .flag__bottom-boxes-box {
  }
}
@media (max-width: 410px) {
  .flag {
  }
  .flag__container {
  }
  .flag__title {
  }
  .flag__bottom-box {
  }
  .flag__bottom-boxes {
    width: 100%;
    max-width: 160px;
  }
  .flag__images {
    width: 100%;
    max-width: 160px;
  }
  .flag__second-images {
    position: absolute;
    top: 97px;
    opacity: 0.3;
    width: 100%;
    max-width: 160px;
  }
  .flag__bottom-mini-box {
  }
  .flag__bottom-titles {
  }
  .flag__bottom-texts {
  }
  .flag__main-link {
  }
  .flag__bottom-boxes-box {
  }
}
@media (max-width: 390px) {
  .flag {
  }
  .flag__container {
  }
  .flag__title {
  }
  .flag__bottom-box {
  }
  .flag__bottom-boxes {
    width: 100%;
    max-width: 160px;
  }
  .flag__images {
    width: 100%;
    max-width: 160px;
  }
  .flag__second-images {
    position: absolute;
    top: 97px;
    opacity: 0.3;
    width: 100%;
    max-width: 160px;
  }
  .flag__bottom-mini-box {
  }
  .flag__bottom-titles {
  }
  .flag__bottom-texts {
  }
  .flag__main-link {
  }
  .flag__bottom-boxes-box {
  }
}
@media (max-width: 365px) {
  .flag {
  }
  .flag__container {
  }
  .flag__title {
  }
  .flag__bottom-box {
  }
  .flag__bottom-boxes {
    width: 100%;
    max-width: 155px;
  }
  .flag__images {
    width: 100%;
    max-width: 155px;
  }
  .flag__second-images {
    position: absolute;
    top: 97px;
    opacity: 0.3;
    width: 100%;
    max-width: 155px;
  }
  .flag__bottom-mini-box {
  }
  .flag__bottom-titles {
  }
  .flag__bottom-texts {
  }
  .flag__main-link {
  }
  .flag__bottom-boxes-box {
  }
}
@media (max-width: 360px) {
  .flag {
  }
  .flag__container {
  }
  .flag__title {
  }
  .flag__bottom-box {
  }
  .flag__bottom-boxes {
    width: 100%;
    max-width: 150px;
  }
  .flag__images {
    width: 100%;
    max-width: 150px;
  }
  .flag__second-images {
    position: absolute;
    top: 97px;
    opacity: 0.3;
    width: 100%;
    max-width: 150px;
  }
  .flag__bottom-mini-box {
  }
  .flag__bottom-titles {
  }
  .flag__bottom-texts {
  }
  .flag__main-link {
  }
  .flag__bottom-boxes-box {
  }
}
@media (max-width: 350px) {
  .flag {
  }
  .flag__container {
  }
  .flag__title {
  }
  .flag__bottom-box {
  }
  .flag__bottom-boxes {
    width: 100%;
    max-width: 145px;
  }
  .flag__images {
    width: 100%;
    max-width: 145px;
  }
  .flag__second-images {
    position: absolute;
    top: 97px;
    opacity: 0.3;
    width: 100%;
    max-width: 145px;
  }
  .flag__bottom-mini-box {
  }
  .flag__bottom-titles {
  }
  .flag__bottom-texts {
  }
  .flag__main-link {
  }
  .flag__bottom-boxes-box {
  }
}
@media (max-width: 340px) {
  .flag {
  }
  .flag__container {
  }
  .flag__title {
  }
  .flag__bottom-box {
  }
  .flag__bottom-boxes {
    width: 100%;
    max-width: 140px;
  }
  .flag__images {
    width: 100%;
    max-width: 140px;
  }
  .flag__second-images {
    position: absolute;
    top: 97px;
    opacity: 0.3;
    width: 100%;
    max-width: 140px;
  }
  .flag__bottom-mini-box {
  }
  .flag__bottom-titles {
  }
  .flag__bottom-texts {
  }
  .flag__main-link {
  }
  .flag__bottom-boxes-box {
  }
}
@media (max-width: 330px) {
  .flag {
  }
  .flag__container {
  }
  .flag__title {
  }
  .flag__bottom-box {
  }
  .flag__bottom-boxes {
    width: 100%;
    max-width: 135px;
  }
  .flag__images {
    width: 100%;
    max-width: 135px;
  }
  .flag__second-images {
    position: absolute;
    top: 97px;
    opacity: 0.3;
    width: 100%;
    max-width: 135px;
  }
  .flag__bottom-mini-box {
  }
  .flag__bottom-titles {
  }
  .flag__bottom-texts {
  }
  .flag__main-link {
  }
  .flag__bottom-boxes-box {
  }
}
</style>
