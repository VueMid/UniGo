<template>
  <div
    id="staticModal"
    data-modal-backdrop="static"
    tabindex="-1"
    aria-hidden="true"
    class="easy__modal fixed top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto h-full max-h-full flex justify-center items-center lg:px-[0px] backdrop-blur-sm bg-white/30"
  >
    <div
      class="easy__modal-box px-3 z-[1111] relative w-full bg-white lg:w-[900px]"
    >
      <button
        type="easy__x-button button"
        class="text-[#FCB72B]"
        data-modal-hide="staticModal"
        @click="$emit('closeModal')"
      >
        <svg
          class="w-5 h-5 md:w-8 md:h-8"
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
      <img class="easy__modal-image" src="@/assets/images/germany.png" alt="" />
      <div class="easy__modal-right-box">
        <h3 class="easy__modal-title">Easy to use riding telemetry</h3>
        <p class="easy__modal-text">
          The Scoot app is available with riding telemetry. This means it can
          show you your average speed, how long you've been using the scooter,
          your traveling distance, and many more things all in an easy to use
          app.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
