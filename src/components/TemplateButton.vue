<template>
  <button
      :class="[
      btnStyles,
      `base-btn btn btn-${bgColor} btn-${buttonSize} text-${textColor}`,
    ]"
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
    buttonSize: {
      type: String,
      default: "lg",
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
