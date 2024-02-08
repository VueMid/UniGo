<template>
  <div
    id="staticModal"
    data-modal-backdrop="static"
    tabindex="-1"
    aria-hidden="true"
    class="korea fixed top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto h-full max-h-full backdrop-blur-sm bg-white/30 lg:flex lg:flex-row lg:justify-center lg:items-center"
  >
    <div
      class="korea__main-box z-[1111] lg:py-[30px] lg:px-[30px] relative lg:flex lg:flex-row lg:justify-start lg:items-start lg:w-[900px] border-[1px] border-yellow rounded-[15px]"
    >
      <button
        type="korea__button-x"
        class="text-[#283033] lg:w-[28px] lg:h-[28px] bg-[#FFF7E6] rounded-[50%] lg:flex lg:justify-center lg:items-center outline-none border-none absolute lg:right-[30px] lg:top-[30px]"
        data-modal-hide="staticModal"
        @click="$emit('closeModalKo')"
      >
        <svg
          class="lg:w-[12px] lg:h-[12px]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Close modal</span>
      </button>
      <div class="korea__left-box flex flex-col justify-start items-start">
        <h2 class="korea__title lg:text-[22px] font-semibold lg:mb-[20px]">
          South Korea
        </h2>
        <div
          class="korea__left-mini-boxes lg:flex lg:flex-row lg:justify-start lg:items-start lg:gap-[6px]"
        >
          <span class="korea__number-text">1.</span>
          <p class="korea__texts">Visa fee – 160 USD</p>
        </div>
        <div
          class="korea__left-mini-boxes lg:flex lg:flex-row lg:justify-start lg:items-start lg:gap-[6px]"
        >
          <span class="korea__number-text">2.</span>
          <p class="korea__texts">
            SEVIS fee – 350 USD (the fee that each student must pay every year
            to the government of USA)
          </p>
        </div>
        <div
          class="korea__left-mini-boxes lg:flex lg:flex-row lg:justify-start lg:items-start lg:gap-[6px]"
        >
          <span class="korea__number-text">3.</span>
          <p class="korea__texts">
            Application or Admission fee. This depends on a University you
            choose. Most Universities deduct this fee as you work with FINO. On
            average though the admission fee would cost at minimum 35 USD to up
            to 300 USD.
          </p>
        </div>
        <div
          class="korea__left-mini-boxes lg:flex lg:flex-row lg:justify-start lg:items-start lg:gap-[6px]"
        >
          <span class="korea__number-text">4.</span>
          <p class="korea__texts">
            Your living costs largely depend on location and the lifestyle you
            follow. We would say it could be around from 500 USD minimum to up
            to 1000 USD per month.
          </p>
        </div>
        <div
          class="korea__left-mini-boxes lg:flex lg:flex-row lg:justify-start lg:items-start lg:gap-[6px]"
        >
          <span class="korea__number-text">5.</span>
          <p class="korea__texts">
            Tuition fees you pay mostly after you are issued a visa or after you
            arrive to USA. For more details you must visit our office.
          </p>
        </div>
        <div
          class="korea__left-coment-box lg:flex lg:flex-row lg:justify-between lg:items-center lg:mt-[40px] lg:w-[390px]"
        >
          <div
            class="korea__left-coment-mini-box lg:flex lg:flex-row lg:justify-start lg:items-center lg:gap-[10px]"
          >
            <img
              class="korea__images w-[70px] h-[30px]"
              src="@/assets/images/circle__images.png"
              alt="circle__images"
            />
            <h5 class="korea__comment-texts">Our students: 47</h5>
          </div>
          <a
            class="korea__comment-link px-[30px] py-[8px] bg-darker-gray rounded-[41px] text-yellow border-yellow border-[2px] font-normal leading-normal active:opacity-70 duration-150 flex flex-row justify-center items-center gap-[10px]"
            href="tel:+998971626262"
          >
            <i
              class="fa-sharp fa-solid fa-phone-volume fa-shake"
              style="color: #ffd43b"
            >
            </i>
            Call us
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.korea {
}
.korea__main-box {
  width: 900px !important;
  background-image: url("@/assets/images/modal__south-korea.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.korea__button-x {
}
.korea__left-box {
}
.korea__title {
  font-family: "Inter";
}
.korea__left-mini-boxes {
}
.korea__number-text {
  font-family: "Inter";
}
.korea__texts {
  width: 100% !important;
  max-width: 370px !important;
  font-family: "Inter";
}
.korea__left-coment-box {
}
.korea__left-coment-mini-box {
}
.korea__images {
}
.korea__comment-texts {
  font-family: "Inter";
}
.korea__comment-link {
  font-family: "Inter";
}
.korea__right-box-image {
}
</style>
