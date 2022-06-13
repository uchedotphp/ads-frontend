<template>
<div class="d-flex align-items-center">
  <div class="spinner-border text-primary" role="status"></div>
  <span class="ms-2">
    <slot />
  </span>
</div>
</template>

<script>
export default {
  name: "LoadingSpinner",
};
</script>

<style lang="scss" scoped></style>
