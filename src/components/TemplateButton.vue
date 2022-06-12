<template>
  <button
      class="base-btn btn"
      :style="`color: ${textColor}; background-color: ${bgColor}; font-size: ${fontSize}`"
      type="button">
    {{ label }}
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
    label: {
      type: String,
      required: true,
    }
  },
};
</script>

<style lang="scss" scoped>
.base-btn {
  border-radius: 12px;
  padding-block: 15px;
  font-weight: 900;

  &.text-primary {
    color: #0d6efd;
  }

  &.text-secondary {
    color: #adb5bd;
  }

  &.text-success {
    color: #198754;
  }

  &.text-danger {
    color: #dc3545;
  }

  &.text-warning {
    color: #ffc107;
  }

  &.text-info {
    color: #0dcaf0;
  }

  &.text-light {
    color: #ffffff;
  }

  &.text-dark {
    color: #000000;
  }
}
</style>
