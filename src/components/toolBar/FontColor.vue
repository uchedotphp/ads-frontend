<template>
  <button
    @click="openFontColorPalette"
    class="btn d-flex flex-column justify-content-center align-items-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M11 2 5.5 16h2.25l1.12-3h6.25l1.12 3h2.25L13 2h-2zm-1.38 9L12 4.67 14.38 11H9.62z"
        fill="currentColor"
      ></path>
    </svg>
    <img
      height="4"
      width="30"
      style="border-radius: 99999px"
      src="../../assets/images/color-picker.webp"
      alt=""
      srcset=""
    />

  </button>
    <!-- modal -->
    <ModalContent id="fontColors">
      <template #title>
        <h5 class="fw-semibold">Font colors</h5>
      </template>
      <FontColorPalette />
    </ModalContent>
</template>

<script>
import FontColorPalette from './FontColorPalette.vue';
import ModalContent from "../ModalContent.vue";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle";

export default {
  name: "FontColor",
  components: {
    FontColorPalette,
    ModalContent,
  },
  methods: {
    openFontColorPalette() {
      new Modal(document.getElementById("fontColors")).show();
    },
  },
};
</script>

<style lang="scss" scoped></style>
