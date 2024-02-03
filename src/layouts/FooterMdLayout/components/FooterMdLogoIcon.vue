<template>
  <div
    class="flex flex-row justify-center items-center gap-4 lg:flex lg:flex-col lg:justify-center lg:items-center gap-8"
  >
    <img
      @click="$router.push('/')"
      class="header__logo w-[133px] h-[23px] lg:w-[215px] lg:h-[38px]"
      src="@/assets/icons/logo.svg"
      alt="logo__image"
    />
    <div class="flex flex-row justify-start items-center gap-[15px]">
      <a
        class="active:opacity-70 duration-100"
        href="https://t.me/unigo_consulting"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="active:opacity-70 w-[42px] h-[42px] lg:hover:translate-y-[-4px] duration-300"
          src="@/assets/icons/telegram__second.svg"
          width="34"
          height="34"
          alt="instagram"
        />
      </a>
      <a
        class="active:opacity-70 duration-100"
        href="https://www.instagram.com/unigo_uz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="active:opacity-70 w-[42px] h-[42px] lg:hover:translate-y-[-4px] duration-300"
          src="@/assets/icons/instagram__second.svg"
          width="34"
          height="34"
          alt="instagram"
        />
      </a>
      <a
        class="active:opacity-70 duration-100"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="active:opacity-70 w-[42px] h-[42px] lg:hover:translate-y-[-4px] duration-300"
          src="@/assets/icons/facebook__second.svg"
          width="34"
          height="34"
          alt="instagram"
        />
      </a>
    </div>
  </div>
</template>
