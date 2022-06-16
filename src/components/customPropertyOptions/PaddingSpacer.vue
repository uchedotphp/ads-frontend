<template>
  <div class="d-flex align-items-center">
    <p class="me-2">Padding {{ paddingType }}</p>
    <div class="btn-group" role="group">
      <button
        @click="subtract"
        type="button"
        class="btn bg-light text-dark btn-outline-dark"
      >
        <i class="bi bi-dash"></i>
      </button>
      <div class="btn-group dropdown-center d-none d-sm-flex">
        <button
          type="button"
          class="btn bg-light text-dark btn-outline-dark"
          id="dropdownCenterBtn"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ selectedPadding }}
        </button>
        <ul
          style="min-width: 20px"
          class="dropdown-menu dropdown-menu-center"
          aria-labelledby="dropdownCenterBtn"
        >
          <li v-for="padding in paddings">
            <a
              @click="selectedPadding = padding"
              class="dropdown-item"
              :class="{ active: padding === selectedPadding }"
              href="#"
            >
              {{ padding }}
            </a>
          </li>
        </ul>
      </div>
      <button
        @click="add"
        type="button"
        class="btn bg-light text-dark btn-outline-dark"
      >
        <i class="bi bi-plus"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaddingSpacer",
  props: {
    paddingType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedPadding: 0,
      paddings: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 26, 32, 40],
    };
  },
  methods: {
    add() {
      this.selectedPadding++;
    },
    subtract() {
      this.selectedPadding--;
    },
  },
};
</script>

<style lang="scss" scoped></style>
