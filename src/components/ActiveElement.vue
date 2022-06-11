<template>
  <div>
    <div class="opts">
      <i class="bi bi-grip-horizontal" role="button"></i>
      <i class="bi bi-x" role="button"></i>
    </div>
    <div class="active">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ActiveElement",
};
</script>

<style lang="scss" scoped>
.opts {
  display: flex;
  justify-content: space-between;
}
.active {
  background-color: white;
  padding: 5px;
  border-radius: 12px;
  border: 1px dashed red;
}
</style>
