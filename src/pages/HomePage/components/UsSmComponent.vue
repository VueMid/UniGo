<template>
  <div
    id="staticModal"
    data-modal-backdrop="static"
    tabindex="-1"
    aria-hidden="true"
    class="us fixed top-0 bottom-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto max-h-full h-full backdrop-blur-sm bg-white/30 flex justify-center items-center"
  >
    <div
      class="us__main-box z-[1111] relative bg-white border-[1px] border-yellow rounded-[15px] flex flex-row justify-start items-center"
    >
      <button
        type="us__button-x"
        class="text-[#283033] bg-[#FFF7E6] w-[28px] h-[28px] flex justify-center items-center rounded-[50%] outline-none border-none absolute top-[15px] right-[15px]"
        data-modal-hide="staticModal"
        @click="$emit('closeModalUs')"
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
      <div
        class="us__bottom-box flex flex-col justify-start items-start rounded-t-[15px]"
      >
        <img
          class="w-full object-cover h-[150px] rounded-t-[15px]"
          src="@/assets/images/usa.jpg"
          alt="usa"
        />
        <h2 class="us__title text-[22px] font-semibold mb-3 px-[15px] pt-[8px]">
          USA
        </h2>
        <div
          class="us__bottom-mini-boxes flex flex-row justify-start items-start gap-2 mb-2 px-[15px]"
        >
          <span class="us__number-text">1.</span>
          <p class="us__texts text-[18px] text-[#222222] font-normal">
            Visa fee – 160 USD
          </p>
        </div>
        <div
          class="us__bottom-mini-boxes flex flex-row justify-start items-start gap-2 mb-2 px-[15px]"
        >
          <span class="us__number-text">2.</span>
          <p class="us__texts text-[18px] text-[#222222] font-normal">
            SEVIS fee – 350 USD (the fee that each student must pay every year
            to the government of USA)
          </p>
        </div>
        <div
          class="us__bottom-mini-boxes flex flex-row justify-start items-start gap-2 mb-2 px-[15px]"
        >
          <span class="us__number-text">3.</span>
          <p class="us__texts text-[18px] text-[#222222] font-normal">
            Application or Admission fee. This depends on a University you
            choose.
          </p>
        </div>
        <div
          class="us__bottom-mini-boxes flex flex-row justify-start items-start gap-2 mb-2 px-[15px]"
        >
          <span class="us__number-text">4.</span>
          <p class="us__texts text-[18px] text-[#222222] font-normal">
            Your living costs largely depend on location and the lifestyle you
            follow.
          </p>
        </div>
        <div
          class="us__bottom-mini-boxes flex flex-row justify-start items-start gap-2 mb-2 px-[15px]"
        >
          <span class="us__number-text">5.</span>
          <p class="us__texts text-[18px] text-[#222222] font-normal">
            Tuition fees you pay mostly after you are issued a visa or after you
            arrive to USA.
          </p>
        </div>
        <div
          class="us__bottom-comment-box w-full flex flex-row justify-between items-center mt-5 mb-2 px-[15px]"
        >
          <div
            class="us__bottom-comment-mini-box flex flex-row justify-center items-center gap-[8px]"
          >
            <img
              class="us__images w-[52px] h-[24px]"
              src="@/assets/images/circle__images.png"
              alt="circle__images"
            />
            <h5 class="us__comment-texts text-[18px] text-[#222222]">
              Our students: <span>47</span>
            </h5>
          </div>
          <a
            class="us__comment-link px-[30px] py-[8px] bg-darker-gray rounded-[41px] text-yellow border-yellow border-[2px] font-normal leading-normal active:opacity-70 duration-150 flex flex-row justify-center items-center gap-[10px]"
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
@media (max-width: 767px) {
  .us {
  }
  .us__main-box {
  }
  .us__button-x {
  }
  .us__bottom-box {
  }
  .us__title {
  }
  .us__bottom-mini-boxes {
  }
  .us__number-text {
  }
  .us__texts {
  }
  .us__bottom-comment-box {
  }
  .us__bottom-comment-mini-box {
  }
  .us__images {
  }
  .us__comment-texts {
  }
  .us__comment-link {
  }
}
@media (max-width: 420px) {
  .us {
  }
  .us__main-box {
  }
  .us__button-x {
  }
  .us__bottom-box {
  }
  .us__title {
  }
  .us__bottom-mini-boxes {
  }
  .us__number-text {
  }
  .us__texts {
  }
  .us__bottom-comment-box {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 15px;
  }
  .us__bottom-comment-mini-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;
    gap: 10px;
  }
  .us__images {
  }
  .us__comment-texts {
  }
  .us__comment-link {
    width: 100%;
  }
}
</style>
