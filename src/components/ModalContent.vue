<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalContent",
};
</script>

<style lang="scss" scoped></style>
