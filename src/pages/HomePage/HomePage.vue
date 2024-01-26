<template>
  <div class="Home-page">
    <HeroSection />
    <MainHeroSection />
    <Services />
    <ServicesSecond />
    <Statistics />
    <FlagSection />
    <SecondFlag />
    <CommentSection />
  </div>
</template>
<script>
import HeroSection from "./HomeSections/HeroSection.vue";
import MainHeroSection from "./HomeSections/MainHeroSection.vue";
import Services from "./HomeSections/Services.vue";
import ServicesSecond from "./HomeSections/ServicesSecond.vue";
import Statistics from "./HomeSections/Statistics.vue";
import FlagSection from "./HomeSections/FlagSection.vue";
import SecondFlag from "./HomeSections/SecondFlag.vue";
import CommentSection from "./HomeSections/CommentSection.vue";
export default {
  components: {
    HeroSection,
    MainHeroSection,
    Services,
    ServicesSecond,
    Statistics,
    SecondFlag,
    FlagSection,
    CommentSection,
  },
};
</script>
