<template>
  <nav class="extra-sidebar py-5">
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        A list item
        <span class="badge bg-primary rounded-pill">14</span>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        A second list item
        <span class="badge bg-primary rounded-pill">2</span>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        A third list item
        <span class="badge bg-primary rounded-pill">1</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "ExtraSidebar"
};
</script>

<style lang="scss" scoped>
.extra-sidebar {
  position: fixed;
  z-index: 10;
  left: 112px;
  top: 0;
  bottom: 0;
  background-color: #ebecf0;
  width: 300px;
}
</style>
