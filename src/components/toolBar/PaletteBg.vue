<template>
  <div class="d-flex align-items-center">
    <span class="me-2"> Palette Background: </span>
    <button @click="openColorPalette" class="btn px-0 py-0">
      <div class="bgColor" :style="`background-color: ${bgColor}`"></div>
    </button>

    <!-- modal -->
    <ModalContent id="colorPalette">
      <template #title>
        <h5 class="fw-semibold">Background colors</h5>
      </template>
      <ColorPalette />
    </ModalContent>
  </div>
</template>

<script>
import ColorPalette from "./ColorPalette.vue";
import ModalContent from "../ModalContent.vue";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle";
import { mapState } from 'vuex';

export default {
  name: "PaletteBg",
  components: {
    ColorPalette,
    ModalContent,
  },
  computed: {
    ...mapState({
      bgColor: state => state.newPopup.backgroundColor
    })
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
  border: 1px solid #000000;
}
</style>
