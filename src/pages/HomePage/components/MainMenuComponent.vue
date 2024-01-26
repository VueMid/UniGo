<template>
  <section class="main w-full pt-[28px]">
    <div
      class="container main__container flex flex-row justify-between items-center"
    >
      <nav class="main__left-navbar">
        <ul
          class="main__list flex flex-row justify-center items-center gap-3.5"
        >
          <li
            class="main__lists cursor-pointer"
            v-for="item in headerMenu"
            :key="item"
          >
            <router-link
              class="main__links active:opacity-55"
              :to="item.link"
              @click="$emit('closeMenu')"
            >
              {{ item.name }}
              <span></span><span></span><span></span><span></span><span></span>
            </router-link>
          </li>
        </ul>
      </nav>
      <div
        class="main__right-box flex flex-row justify-center items-center gap-[182px]"
      >
        <div
          class="main__main-icons flex flex-row justify-center items-center gap-4"
        >
          <i
            class="cursor-pointer px-[10px] py-[20px] bg-white rounded-[12px] fa-brands fa-xl fa-telegram hover:bg-yellow transition-all duration-[400ms] hover:translate-y-[-5px] active:opacity-55"
            style="color: #283033"
          ></i>
          <i
            class="cursor-pointer px-[10px] py-[20px] bg-white rounded-[12px] fa-brands fa-xl fa-instagram hover:bg-yellow transition-all duration-[400ms] hover:translate-y-[-5px] active:opacity-55"
            style="color: #283033"
          ></i>
          <i
            class="cursor-pointer px-[10px] py-[20px] bg-white rounded-[12px] fa-brands fa-xl fa-facebook hover:bg-yellow transition-all duration-[400ms] hover:translate-y-[-5px] active:opacity-55"
            style="color: #283033"
          ></i>
        </div>
        <a
          class="main__tel flex flex-row justify-center items-center gap-[15px] px-[20px] py-[10px] hover:bg-yellow bg-yellow rounded-[50px] active:opacity-55 duration-[400ms]"
          href="tel:+998994665547"
        >
          <lord-icon
            src="https://cdn.lordicon.com/rsvfayfn.json"
            trigger="loop"
            delay="1500"
            colors="primary:#ffffff"
            style="width: 25px; height: 25px"
          >
          </lord-icon>
          <p
            class="main__text text-[15px] font-semibold leading-normal text-white"
          >
            Call us
          </p>
        </a>
      </div>
    </div>
  </section>
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
<style lang="scss" scoped>
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  --c: #f4ca33;
  color: #f4ca33;
  font-size: 15px;
  border: 2px solid var(--c);
  border-radius: 50px;
  padding: 10px 20px;
  background-color: white;
  font-weight: 500;
  font-family: "Inter";
  text-align: center;
  line-height: normal;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: 0.4s;
}
nav ul li span {
  position: absolute;
  width: 25%;
  height: 100%;
  background-color: #f4ca33;
  transform: translateY(150%);
  border-radius: 50%;
  left: calc((var(--n) - 1) * 25%);
  transition: 0.4s;
  transition-delay: calc((var(--n) - 1) * 0.1s);
  z-index: -1;
}
nav ul li:hover {
  color: white;
}
nav ul li:hover span {
  transform: translateY(0) scale(2);
}
nav ul li span:nth-child(1) {
  --n: 1;
}
nav ul li span:nth-child(2) {
  --n: 2;
}
nav ul li span:nth-child(3) {
  --n: 3;
}
nav ul li span:nth-child(4) {
  --n: 4;
}
nav ul li span:nth-child(5) {
  --n: 5;
}
@media (max-width: 1279px) {
  .main {
    &__container {
    }

    &__left-navbar {
    }

    &__list {
    }

    &__lists {
    }

    &__links {
    }

    &__right-box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }

    &__main-icons {
    }

    &__tel {
    }

    &__text {
    }
  }
}
</style>
