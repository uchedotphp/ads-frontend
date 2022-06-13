<template>
  <button
      class="base-btn btn"
      :style="`color: ${textColor}; background-color: ${bgColor}; font-size: ${fontSize}`"
      type="button">
    <slot></slot>
  </button>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TemplateButton",
  computed: {
    ...mapGetters({
      getActiveTemplateElement: "getActiveTemplateElement",
    }),

    btnStyles() {
      return {
        "text-truncate": this.truncateText,
      };
    },

    fontSize() {
      if (this.size == 'sm') {
        return '14px';
      } else if (this.size == 'lg') {
        return '20px';
      }
      return '16px';
    }
  },
  props: {
    truncateText: {
      type: Boolean,
      default: true,
    },
    buttonLabel: {
      type: String,
      default: 'SIGNUP NOW'
    },
    textColor: {
      type: String,
      default: "light",
    },
    bgColor: {
      type: String,
      default: "secondary",
    },
    size: {
      type: String,
      default: "md",
    },
  },
};
</script>

<style lang="scss" scoped>
.base-btn {
  border: none;
  border-radius: 12px;
  padding-block: 15px;
  font-weight: 900;
  width: 100%;
}
</style>
