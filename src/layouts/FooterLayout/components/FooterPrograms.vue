<template>
  <nav class="main__left-navbar">
    <ul class="main__list flex flex-col justify-center items-start gap-[6px]">
      <h2 class="text-[20px] text-white font-medium leading-normal mb-2">
        Programs
      </h2>
      <li class="main__lists textr-[14px] leading-normal text-white/90">
        <p>MBA</p>
      </li>
      <li class="main__lists textr-[14px] leading-normal text-white/90">
        <p>BBA</p>
      </li>
      <li class="main__lists textr-[14px] leading-normal text-white/90">
        <p>Work and Travel</p>
      </li>
      <li class="main__lists textr-[14px] leading-normal text-white/90">
        <p>MPA</p>
      </li>
    </ul>
  </nav>
</template>
<script>
import navbar from "../../navbar.js";
export default {
  data() {
    return {
      footerMenu: navbar,
    };
  },
};
</script>
<style>
h2 {
  font-family: "Inter";
}
p {
  font-family: "Inter";
}
</style>
