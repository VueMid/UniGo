<template>
  <header class="header">
    <div
      class="header__buttons-box flex flex-row justify-center items-center gap-0 pt-[16px] duration-150 transition-all"
    >
      <div
        v-if="!isOpen"
        @click="toggle"
        class="header__main-burger flex flex-row justify-center items-center gap-3 cursor-pointer"
      >
        <p
          class="header__burger-text text-lg font-semibold leading-normal text-white"
        >
          Menu
        </p>
        <button class="header__button flex flex-row justify-center itec">
          <img
            class="header__burger-image w-[24px] h-[24px]"
            src="@/assets/icons/menu__second.svg"
            alt="open__burger"
          />
        </button>
      </div>
      <div
        v-else
        @click="toggle"
        class="header__main-burger flex flex-row justify-center items-center gap-3 cursor-pointer"
      >
        <p
          class="header__burger-text text-lg font-semibold leading-normal text-white"
        >
          Menu
        </p>
        <button class="header__button flex flex-row justify-center itec">
          <img
            class="header__burger-image w-[24px] h-[24px]"
            src="@/assets/icons/close__menu-second.svg"
            alt="close__burger"
          />
        </button>
      </div>
    </div>
  </header>
  <Transition name="menu">
    <MainMenuComponent v-if="isOpen" @click="toggle" />
  </Transition>
</template>
<script>
import MainMenuComponent from "./MainMenuComponent.vue";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
  components: { MainMenuComponent },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this.isOpen = false;
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.menu-enter-active,
.menu-leave-active {
  transition: 0.5s ease;
}
.menu-enter-from,
.menu-leave-to {
  transform: translateY(-160%);
}
.header {
  z-index: 1111;
  width: 100%;
  height: 54px;
  top: 0px;
  position: absolute;
  background-image: url("@/assets/icons/eyebrow.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  &__button {
    background: none;
    border: none;
    outline: none;
    display: block;
  }
  &__burger-text {
    font-family: "Inter";
  }
}
@media (max-width: 1200px) {
  .header__main-burger {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transform: translateY(-5px);
  }
}
@media (max-width: 1100px) {
  .header__main-burger {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0px;
    transform: translateY(-6px);
  }
}
</style>
