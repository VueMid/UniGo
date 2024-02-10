<template>
  <footer class="footer mt-[28px] py-[46px] md:hidden">
    <div class="container footer__container flex flex-col gap-[40px]">
      <div class="flex flex-row justify-between items-start">
        <FooterLogoIcon />
        <FooterAddress />
      </div>
      <div class="flex flex-row-reverse justify-between items-start">
        <FooterPrograms />
        <FooterMenu />
      </div>
      <div class="flex flex-row justify-between items-end mt-[10px]">
        <FooterJoin />
      </div>
    </div>
  </footer>
</template>
<script>
import FooterJoin from "./components/FooterJoin.vue";
import FooterMenu from "./components/FooterMenu.vue";
import FooterPrograms from "./components/FooterPrograms.vue";
import FooterLogoIcon from "./components/FooterLogoIcon.vue";
import FooterAddress from "./components/FooterAddress.vue";
export default {
  components: {
    FooterJoin,
    FooterMenu,
    FooterPrograms,
    FooterLogoIcon,
    FooterAddress,
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 767px) {
  .footer {
    width: 100%;
    background-image: url("@/assets/images/footer__background.png");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
