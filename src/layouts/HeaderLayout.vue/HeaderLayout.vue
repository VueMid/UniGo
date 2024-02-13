<template>
  <header class="header z-[1111] fixed w-full top-0 hidden lg:block">
    <div class="header container__header">
      <HeaderMenu />
    </div>
  </header>
</template>
<script>
import HeaderMenu from "./components/HeaderMenu.vue";
export default { components: { HeaderMenu } };
</script>
<style></style>
