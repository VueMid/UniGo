<template>
  <div
    id="staticModal"
    data-modal-backdrop="static"
    tabindex="-1"
    aria-hidden="true"
    class="us fixed top-0 left-0 right-0 w-full md:p-4 overflow-x-hidden overflow-y-auto max-h-full h-full backdrop-blur-sm bg-white/30 md:flex md:justify-center md:items-center"
  >
    <div
      class="us__main-box z-[1111] relative border-[1px] border-yellow rounded-[15px] md:flex md:flex-row md:justify-start md:items-center md:px-[15px] md:py-[15px]"
    >
      <button
        type="us__button-x"
        class="text-[#283033] bg-[#FFF7E6] md:w-[28px] md:h-[28px] md:flex md:justify-center md:items-center rounded-[50%] outline-none border-none absolute md:top-[15px] md:right-[15px]"
        data-modal-hide="staticModal"
        @click="$emit('closeModalUs')"
      >
        <svg
          class="md:w-[14px] md:h-[14px]"
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
      <div
        class="us__left-box md:flex md:flex-col md:justify-start md:items-start"
      >
        <h2 class="us__title font-semibold md:mb-3">USA</h2>
        <div
          class="us__left-mini-boxes md:flex md:flex-row md:justify-start md:items-start md:gap-2 md:mb-2"
        >
          <span class="us__number-text">1.</span>
          <p class="us__texts md:text-[18px] text-[#222222] font-normal">
            Visa fee – 160 USD
          </p>
        </div>
        <div
          class="us__left-mini-boxes md:flex md:flex-row md:justify-start md:items-start md:gap-2 md:mb-2"
        >
          <span class="us__number-text">2.</span>
          <p class="us__texts md:text-[18px] text-[#222222] font-normal">
            SEVIS fee – 350 USD (the fee that each student must pay every year
            to the government of USA)
          </p>
        </div>
        <div
          class="us__left-mini-boxes md:flex md:flex-row md:justify-start md:items-start md:gap-2 md:mb-2"
        >
          <span class="us__number-text">3.</span>
          <p class="us__texts md:text-[18px] text-[#222222] font-normal">
            Application or Admission fee. This depends on a University you
            choose. Most Universities deduct this fee as you work with FINO. On
            average though the admission fee would cost at minimum 35 USD to up
            to 300 USD.
          </p>
        </div>
        <div
          class="us__left-mini-boxes md:flex md:flex-row md:justify-start md:items-start md:gap-2 md:mb-2"
        >
          <span class="us__number-text">4.</span>
          <p class="us__texts md:text-[18px] text-[#222222] font-normal">
            Your living costs largely depend on location and the lifestyle you
            follow. We would say it could be around from 500 USD minimum to up
            to 1000 USD per month.
          </p>
        </div>
        <div
          class="us__left-mini-boxes md:flex md:flex-row md:justify-start md:items-start md:gap-2 md:mb-2"
        >
          <span class="us__number-text">5.</span>
          <p class="us__texts md:text-[18px] text-[#222222] font-normal">
            Tuition fees you pay mostly after you are issued a visa or after you
            arrive to USA. For more details you must visit our office.
          </p>
        </div>
        <div
          class="us__left-coment-box md:flex md:flex-row md:justify-between md:items-center md:mt-4"
        >
          <div
            class="us__left-coment-mini-box md:flex md:flex-row md:justify-center md:items-center md:gap-[8px]"
          >
            <img
              class="us__images md:w-[52px] md:h-[24px]"
              src="@/assets/images/circle__images.png"
              alt="circle__images"
            />
            <h5 class="us__comment-texts md:text-[18px] text-[#222222]">
              Our students: 47
            </h5>
          </div>
          <a
            class="us__comment-link md:px-[30px] md:py-[8px] bg-darker-gray rounded-[41px] text-yellow border-yellow border-[2px] font-normal leading-normal active:opacity-70 duration-150 md:flex md:flex-row md:justify-center md:items-center md:gap-[10px]"
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
  .us {
  }
  .us__main-box {
    width: 100% !important;
    background-image: url("@/assets/images/modal__usa-md.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  .us__button-x {
  }
  .us__left-box {
  }
  .us__title {
    font-family: "Inter";
  }
  .us__left-mini-boxes {
  }
  .us__number-text {
    font-family: "Inter";
  }
  .us__texts {
    width: 100%;
    max-width: 430px !important;
    font-family: "Inter";
  }
  .us__left-coment-box {
    width: 100%;
    max-width: 452px !important;
  }
  .us__left-coment-mini-box {
  }
  .us__images {
  }
  .us__comment-texts {
    font-family: "Inter";
  }
  .us__comment-link {
    font-family: "Inter";
  }
  .us__right-box-image {
  }
}
</style>
