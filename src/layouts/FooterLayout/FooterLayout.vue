<template>
  <footer class="footer mt-[28px]">
    <div class="container footer__container">
      <FooterJoin />
      <div class="flex flex-row justify-between items-start">
        <FooterMenu />
        <FooterPrograms />
      </div>
      <div class="flex flex-row justify-between items-start">
        <FooterLogoIcon />
        <FooterAddress />
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
    height: 578px;
    background: linear-gradient(
      rgba(244, 202, 51, 0.6),
      rgba(244, 202, 51, 0.6)
    );
    background-repeat: no-repeat;
  }
  .footer__container {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 578px;
    background-image: url("@/assets/images/footer__background.png");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
