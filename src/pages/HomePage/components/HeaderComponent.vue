<template>
  <header
    class="header w-full flex flex-row justify-between items-center fixed top-0 duration-[0.5s] transition-all z-[111] px-[20px] md:px-[30px]"
    :class="isScrolled ? 'header__scrolled py-[26px]' : 'py-[36px]'"
  >
    <div
      class="header__left-box cursor-pointer duration-200 active:opacity-60"
      @click="$router.push('/')"
    >
      <img
        class="header__logo w-[100px] h-[20px] md:w-[121px] md:h-[26px] lg:w-[155px] lg:h-[33px]"
        src="@/assets/icons/logo__image.svg"
        alt="logo__image"
      />
    </div>
    <div
      class="flex flex-row justify-center items-center gap-[20px] md:flex md:flex-row md:justify-center md:items-center md:gap-[30px]"
    >
      <a class="translate-y-1" href="tel:+998994665547">
        <lord-icon
          src="https://cdn.lordicon.com/rsvfayfn.json"
          trigger="loop"
          delay="2000"
          colors="primary:#ffffff"
          style="width: 30px; height: 30px"
        >
        </lord-icon
      ></a>
      <button class="header__right-burger" @click="openMenu">
        <img
          class="header__burger-on w-[22px] h-[18px]"
          src="@/assets/icons/open__menu.svg"
          alt="open__menu"
        />
      </button>
    </div>
  </header>
  <Transition name="menu">
    <MenuComponent v-if="isOpen" @closeMenu="closeMenu" />
  </Transition>
</template>
<script>
import MenuComponent from "./MenuComponent.vue";
export default {
  data() {
    return {
      isOpen: false,
      isScrolled: false,
    };
  },
  components: {
    MenuComponent,
  },
  methods: {
    openMenu() {
      this.isOpen = true;
      document.body.style.overflow = "hidden";
    },
    closeMenu() {
      this.isOpen = false;
      document.body.style.overflow = "auto";
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    });
  },
};
</script>
<style lang="scss" scoped>
@media (max-width: 1023px) {
  .menu-enter-active,
  .menu-leave-active {
    transition: 0.6s ease;
  }

  .menu-enter-from,
  .menu-leave-to {
    transform: translateX(100%);
  }
  .header {
    &__scrolled {
      background-color: #f4ca33;
    }
    &__container {
    }

    &__left-box {
    }

    &__logo {
    }

    &__right-burger {
      background: none;
      border: none;
      outline: none;
      display: block;
    }

    &__burger-on {
    }
  }
}
@media (max-width: 767px) {
  .menu-enter-active,
  .menu-leave-active {
    transition: 0.6s ease;
  }

  .menu-enter-from,
  .menu-leave-to {
    transform: translateX(100%);
  }
  .header {
    &__scrolled {
      background-color: #f4ca33;
    }
    &__container {
    }

    &__left-box {
    }

    &__logo {
    }

    &__right-burger {
      background: none;
      border: none;
      outline: none;
      display: block;
    }

    &__burger-on {
    }
  }
}
</style>
