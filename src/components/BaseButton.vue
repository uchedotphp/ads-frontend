<template>
  <button
    type="button"
    :class="[
      btnStyles,
      `base-btn btn btn-${bgColor} btn-${buttonSize} text-${textColor}`,
    ]"
  >
    <slot>
      {{ buttonLabel }}
    </slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  computed: {
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
    buttonSize: {
      type: String,
      default: "lg",
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
