<template>
  <div
    id="staticModal"
    data-modal-backdrop="static"
    tabindex="-1"
    aria-hidden="true"
    class="germany fixed top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto max-h-full h-full backdrop-blur-sm bg-white/30 md:flex md:justify-center md:items-center hidden lg:hidden"
  >
    <div
      class="germany__main-box z-[1111] relative border-[1px] border-yellow rounded-[15px] flex flex-row justify-start items-center px-[15px] py-[15px]"
    >
      <button
        type="germany__button-x"
        class="text-[#283033] bg-[#FFF7E6] w-[28px] h-[28px] flex justify-center items-center rounded-[50%] outline-none border-none absolute top-[15px] right-[15px]"
        data-modal-hide="staticModal"
        @click="$emit('closeModalGe')"
      >
        <svg
          class="w-[14px] h-[14px]"
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
      <div class="germany__left-box flex flex-col justify-start items-start">
        <h2 class="germany__title font-semibold text-[22px] mb-3">Germany</h2>
        <div
          class="germany__left-mini-boxes flex flex-row justify-start items-start gap-2 mb-2"
        >
          <span class="germany__number-text">1.</span>
          <p class="germany__texts text-[18px] text-[#222222] font-normal">
            Visa fee – 160 USD
          </p>
        </div>
        <div
          class="germany__left-mini-boxes flex flex-row justify-start items-start gap-2 mb-2"
        >
          <span class="germany__number-text">2.</span>
          <p class="germany__texts text-[18px] text-[#222222] font-normal">
            SEVIS fee – 350 USD (the fee that each student must pay every year
            to the government of USA)
          </p>
        </div>
        <div
          class="germany__left-mini-boxes flex flex-row justify-start items-start gap-2 mb-2"
        >
          <span class="germany__number-text">3.</span>
          <p class="germany__texts text-[18px] text-[#222222] font-normal">
            Application or Admission fee. This depends on a University you
            choose. Most Universities deduct this fee as you work with FINO. On
            average though the admission fee would cost at minimum 35 USD to up
            to 300 USD.
          </p>
        </div>
        <div
          class="germany__left-mini-boxes flex flex-row justify-start items-start gap-2 mb-2"
        >
          <span class="germany__number-text">4.</span>
          <p class="germany__texts text-[18px] text-[#222222] font-normal">
            Your living costs largely depend on location and the lifestyle you
            follow. We would say it could be around from 500 USD minimum to up
            to 1000 USD per month.
          </p>
        </div>
        <div
          class="germany__left-mini-boxes flex flex-row justify-start items-start gap-2 mb-2"
        >
          <span class="germany__number-text">5.</span>
          <p class="germany__texts text-[18px] text-[#222222] font-normal">
            Tuition fees you pay mostly after you are issued a visa or after you
            arrive to USA. For more details you must visit our office.
          </p>
        </div>
        <div
          class="germany__left-coment-box flex flex-row justify-between items-center mt-4"
        >
          <div
            class="germany__left-coment-mini-box flex flex-row justify-center items-center gap-[8px]"
          >
            <img
              class="germany__images w-[52px] h-[24px]"
              src="@/assets/images/circle__images.png"
              alt="circle__images"
            />
            <h5 class="germany__comment-texts text-[18px] text-[#222222]">
              Our students: 47
            </h5>
          </div>
          <a
            class="germany__comment-link px-[30px] py-[8px] bg-darker-gray rounded-[41px] text-yellow border-yellow border-[2px] font-normal leading-normal active:opacity-70 duration-150 flex flex-row justify-center items-center gap-[10px]"
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
@media (max-width: 1023px) {
  .germany {
  }
  .germany__main-box {
    width: 100% !important;
    background-image: url("@/assets/images/modal__germany-md.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  .germany__button-x {
  }
  .germany__left-box {
  }
  .germany__title {
    font-family: "Inter";
  }
  .germany__left-mini-boxes {
  }
  .germany__number-text {
    font-family: "Inter";
  }
  .germany__texts {
    width: 100%;
    max-width: 430px !important;
    font-family: "Inter";
  }
  .germany__left-coment-box {
    width: 100%;
    max-width: 445px !important;
  }
  .germany__left-coment-mini-box {
  }
  .germany__images {
  }
  .germany__comment-texts {
    font-family: "Inter";
  }
  .germany__comment-link {
    font-family: "Inter";
  }
  .germany__right-box-image {
  }
}
</style>
