<template>
  <main class="overflow-x-hidden">
    <RouterView />
    <FooterLayout />
    <a
      href="#"
      class="scrollup cursor-pointer w-[50px] h-[50px] leading-[50px] text-[17px] md:w-[60px] md:h-[60px] md:leading-[60px] md:text-[30px] lg:w-[45px] lg:h-[45px] lg:leading-[45px] lg:text-[15px] duration-300"
      id="scroll-up"
    >
      <i
        class="fa-solid fa-arrow-up fa-beat scroll__icon"
        style="color: #f4ca33"
      >
      </i>
    </a>
  </main>
</template>
<script>
import FooterLayout from "./layouts/FooterLayout/FooterLayout.vue";
export default {
  mounted() {
    window.addEventListener("scroll", () => {
      const scrollUp = document.querySelector(".scrollup");
      if (scrollY > 360) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    });
  },
  components: {
    FooterLayout,
  },
};
</script>
<style></style>
