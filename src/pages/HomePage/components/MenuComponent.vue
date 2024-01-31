<template>
  <div
    class="menu bg-white w-full h-[100vh] z-[999] fixed top-0 right-0 mx-auto flex flex-col justify-center items-center lg:static lg:hidden"
  >
    <button
      class="menu__button absolute top-[45.5px] right-[22px] md:top-[46px] md:right-[32.3px]"
      @click="$emit('closeMenu')"
    >
      <img
        class="menu__button-image w-[18px] h-[18px]"
        src="@/assets/icons/close__menu.svg"
        alt="close__menu"
      />
    </button>
    <nav
      class="menu__navbar rounded-[50px] pt-[40px] pb-[90px] px-[90px] md:pt-[179px] md:pb-[292px] md:px-[147px] border-[2px] border-yellow"
    >
      <ul
        class="menu__list flex flex-col justify-center items-center gap-[25px] md:flex md:flex-col md:justify-center md:items-center md:gap-[30px]"
      >
        <li class="menu__lists" v-for="item in headerMenu" :key="item">
          <router-link
            class="menu__links text-[18px] font-semibold leading-normal text-white md:text-[26px]"
            :to="item.link"
            @click="$emit('closeMenu')"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div
      class="menu__icon-box flex flex-row justify-center items-center gap-5 translate-y-[-54px]"
    >
      <a href="#" class="menu__icons">
        <img
          class="menu__telegram-icon"
          src="@/assets/icons/telegram.svg"
          alt="telegram"
        />
      </a>
      <a href="#" class="menu__icons w-[34px] h-[34px]">
        <img
          class="menu__instagram-icon w-[34px] h-[34px]"
          src="@/assets/icons/instagram.svg"
          alt="instagram"
        />
      </a>
      <a href="#" class="menu__icons w-[34px] h-[34px]">
        <img
          class="menu__facebook-icon"
          src="@/assets/icons/facebook.svg"
          alt="facebook"
        />
      </a>
    </div>
  </div>
</template>
<script>
import navbar from "../../../layouts/navbar.js";
export default {
  data() {
    return {
      headerMenu: navbar,
    };
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1023px) {
  .router-link-exact-active {
    color: #f4ca33;
  }
  .menu {
    width: 100%;
    height: 100vh;
    background-image: url("@/assets/images/menu__background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 820px;
    &__button {
      background: none;
      border: none;
      outline: none;
      display: block;
    }

    &__button-image {
    }

    &__navbar {
      backdrop-filter: blur(20px);
      background-color: rgb(255 255 255 / 0.3);
    }

    &__list {
    }

    &__lists {
    }

    &__links {
      font-family: "Inter";
    }
  }
}
@media (max-width: 767px) {
  .router-link-exact-active {
    color: yellow;
  }
  .menu {
    width: 100%;
    height: 100vh;
    background-image: url("@/assets/images/menu__background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 390px;
    &__button {
      background: none;
      border: none;
      outline: none;
      display: block;
    }

    &__button-image {
    }

    &__navbar {
      backdrop-filter: blur(20px);
      background-color: rgb(255 255 255 / 0.3);
    }

    &__list {
    }

    &__lists {
    }

    &__links {
      font-family: "Inter";
    }
  }
}
</style>
