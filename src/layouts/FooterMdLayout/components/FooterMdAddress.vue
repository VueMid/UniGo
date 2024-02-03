<template>
  <div class="flex flex-col justify-center items-start">
    <div class="flex flex-col justify-center items-start ml-auto">
      <h2
        class="text-[20px] text-darker-gray font-semibold leading-normal mb-3.5"
      >
        Address
      </h2>
      <address>
        <p
          class="w-[168px] leading-[28px] text-[16px] not-italic text-darker-gray"
        >
          Uzbekistan, Tashkent, Mustaqillik 72A
        </p>
      </address>
    </div>
    <a
      class="active:opacity-70 border-[2px] border-yellow duration-100 mt-[20px] px-[16px] py-[8px] bg-darker-gray rounded-[50px] text-yellow flex flex-row justify-center items-center gap-2"
      href="https://yandex.com/map-widget/v1/?ll=69.301593%2C41.321279&mode=routes&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTQwNTM0EjdPyrt6YmVraXN0b24sIFRvc2hrZW50LCBNdXN0YXFpbGxpayBzaG9oIGtvyrtjaGFzaSwgNzlBIgoNR5qKQhX_SCVC&z=17.12"
      target="_blank"
    >
      <i class="fa-solid fa-location-dot" style="color: #ffd43b"></i>
      <p>view on map</p>
    </a>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
h2 {
  font-family: "Inter";
}
p {
  font-family: "Inter";
}
</style>
