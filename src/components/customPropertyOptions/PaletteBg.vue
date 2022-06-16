<template>
  <div class="d-flex align-items-center">
    <span class="me-2"> Palette Background: </span>
    <button class="btn px-0 py-0">
      <div class="bgColor"></div>
    </button>
  </div>
</template>

<script>
export default {
  name: "PaletteBg",
};
</script>

<style lang="scss" scoped>
.bgColor {
  width: 24px;
  height: 24px;
  border-radius: 2px;
  border: 1px solide #000000;
  background-color: #e85e5b;
}
</style>
