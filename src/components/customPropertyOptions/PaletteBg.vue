<template>
  <div class="d-flex align-items-center">
    <span class="me-2"> Palette Background: </span>
    <button @click="openColorPalette" class="btn px-0 py-0">
      <div class="bgColor"></div>
    </button>

    <!-- modal -->
    <ModalContent id="colorPalette">
      <template #title>
        <h5 class="fw-semibold">Default colors</h5>
      </template>
      <ColorPalette />
    </ModalContent>
  </div>
</template>

<script>
import ColorPalette from "./ColorPalette.vue";
import ModalContent from "../ModalContent.vue";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle";

export default {
  name: "PaletteBg",
  components: {
    ColorPalette,
    ModalContent,
  },
  methods: {
    openColorPalette() {
      new Modal(document.getElementById("colorPalette")).show();
    },
  },
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
