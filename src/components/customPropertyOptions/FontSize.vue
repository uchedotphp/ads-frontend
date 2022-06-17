<template>
  <div class="d-flex align-items-center">
    <p class="me-2 d-sm-none">Font size</p>

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
          {{ selectedFont }}
        </button>
        <ul
          style="min-width: 20px"
          class="dropdown-menu dropdown-menu-center"
          aria-labelledby="dropdownCenterBtn"
        >
          <li v-for="fontSize in fontSizes">
            <a
              @click="selectedFont = fontSize"
              class="dropdown-item"
              :class="{ active: fontSize === selectedFont }"
              href="#"
            >
              {{ fontSize }}
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
import { mapState, mapMutations } from "vuex";

export default {
  name: "FontSize",
  data() {
    return {
      selectedFont: 30,
      fontSizes: [14, 16, 18, 24, 26, 28, 30, 32, 36, 40, 42, 48, 50, 54],
    };
  },
  computed: {
    ...mapState(["newPopup", "activeElementId"]),
    ...mapState({
      activeElementIndex: (state) =>
        state.newPopup.children.findIndex(
          (c) => c.id === state.activeElementId
        ),
    }),
  },
  watch: {
    selectedFont(newValue) {
        console.log('new value: ', newValue);
      this.setFontSize(newValue);
    },
  },
  methods: {
    ...mapMutations(["updateActiveElementProperty"]),
    add() {
      this.selectedFont++;
    },
    subtract() {
      this.selectedFont--;
    },
    setFontSize(fontSize) {
      const data = {
        ...this.newPopup.children[this.activeElementIndex],
        fontSize,
      };
      this.updateActiveElementProperty(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.bi {
  font-weight: 900;
}
</style>
