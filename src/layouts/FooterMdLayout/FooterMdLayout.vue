<template>
  <footer
    class="footer md:mt-[92px] hidden md:block py-[42px] lg:pt-[24px] lg:pb-[50px]"
  >
    <div
      class="container flex flex-col justify-between items-start lg:flex lg:flex-row lg:justify-between lg:items-start"
    >
      <div class="w-full flex flex-row justify-between items-start">
        <FooterMdLogoIcon class="hidden lg:block" />
        <FooterMdMenu />
        <FooterMdAddress />
        <FooterMdPrograms />
        <FooterMdJoin />
      </div>
      <FooterMdLogoIcon class="mt-[50px] lg:hidden" />
    </div>
  </footer>
</template>
<script>
import FooterMdLogoIcon from "./components/FooterMdLogoIcon.vue";
import FooterMdMenu from "./components/FooterMdMenu.vue";
import FooterMdAddress from "./components/FooterMdAddress.vue";
import FooterMdPrograms from "./components/FooterMdPrograms.vue";
import FooterMdJoin from "./components/FooterMdJoin.vue";
export default {
  components: {
    FooterMdMenu,
    FooterMdAddress,
    FooterMdPrograms,
    FooterMdJoin,
    FooterMdLogoIcon,
  },
};
</script>
<style scoped lang="scss">
.footer {
  width: 100%;
  background-image: url("@/assets/images/footer__background.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width: 1023px) {
  .footer {
    width: 100%;
    background-image: url("@/assets/images/footer__background.png");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
