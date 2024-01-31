<template>
  <nav class="main__left-navbar">
    <ul class="main__list flex flex-col justify-center items-start gap-[6px]">
      <h2 class="text-[20px] text-white font-bold leading-normal mb-2">Menu</h2>
      <li
        class="main__lists cursor-pointer text-white/90 text-[14px] font-normal leading-normal"
        v-for="item in footerMenu"
        :key="item"
      >
        <router-link class="main__links" :to="item.link">
          {{ item.name }}
        </router-link>
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
<style scoped>
.router-link-exact-active {
  color: #283033;
}
h2 {
  font-family: "Inter";
}
.main__lists {
  font-family: "Inter";
}
</style>
