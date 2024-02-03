<template>
  <div class="flex flex-col justify-center items-start gap-4 md:hidden">
    <img
      @click="$router.push('/')"
      class="header__logo w-[133px] h-[23px]"
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
          class="active:opacity-70 duration-100"
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
          class="active:opacity-70 duration-100"
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
          class="active:opacity-70 duration-100"
          src="@/assets/icons/facebook__second.svg"
          width="34"
          height="34"
          alt="instagram"
        />
      </a>
    </div>
  </div>
</template>
