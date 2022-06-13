<template>
  <div class="d-flex align-items-center">
    <div
      :class="`spinner-border spinner-border-${size} text-primary`"
      role="status"
    ></div>
    <span class="ms-2">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
  props: {
    size: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
