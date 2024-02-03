<template>
  <nav class="main__left-navbar">
    <ul class="main__list flex flex-col justify-center items-start gap-[6px]">
      <h2 class="text-[20px] text-darker-gray font-medium leading-normal mb-2">
        Programs
      </h2>
      <li class="main__lists text-[16px] leading-normal text-darker-gray">
        <p>MBA</p>
      </li>
      <li class="main__lists text-[16px] leading-normal text-darker-gray">
        <p>BBA</p>
      </li>
      <li class="main__lists text-[16px] leading-normal text-darker-gray">
        <p>Work and Travel</p>
      </li>
      <li class="main__lists text-[16px] leading-normal text-darker-gray">
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
