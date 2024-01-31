<template>
  <div class="flex flex-col justify-center items-start gap-4">
    <img
      @click="$router.push('/')"
      class="header__logo w-[133px] h-[23px] md:w-[121px] md:h-[26px] lg:w-[155px] lg:h-[33px]"
      src="@/assets/icons/logo.svg"
      alt="logo__image"
    />
    <div class="flex flex-row justify-start items-center gap-[15px]">
      <a
        href="https://t.me/unigo_consulting"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="active:opacity-60 duration-100"
          src="@/assets/icons/telegram__second.svg"
          width="34"
          height="34"
          alt="instagram"
        />
      </a>
      <a
        href="https://www.instagram.com/unigo_uz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="active:opacity-60 duration-100"
          src="@/assets/icons/instagram__second.svg"
          width="34"
          height="34"
          alt="instagram"
        />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <img
          class="active:opacity-60 duration-100"
          src="@/assets/icons/facebook__second.svg"
          width="34"
          height="34"
          alt="instagram"
        />
      </a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
