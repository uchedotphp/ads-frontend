<template>
  <div class="d-flex align-items-center">
    <p class="me-2">{{ paddingType }} bottom</p>
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
          {{ spacerBottom }}
        </button>
        <ul
          style="min-width: 20px"
          class="dropdown-menu dropdown-menu-center"
          aria-labelledby="dropdownCenterBtn"
        >
          <li v-for="spacer in paddings">
            <a
              @click="spacerBottom = spacer"
              class="dropdown-item"
              :class="{ active: getActiveTemplateElement.paddingBottom === spacer }"
              href="#"
            >
              {{ spacer }}
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
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "PaddingSpacer",
  props: {
    paddingType: {
      type: String,
      default: 'Padding'
    },
  },
  data() {
    return {
      spacerBottom: 0,
      paddings: [0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
    ...mapGetters({
      getActiveTemplateElement: "getActiveTemplateElement",
    }),
  },
  watch: {
    spacerBottom(newValue) {
      this.setSpacerBottom(newValue);
    },
  },
  methods: {
    ...mapMutations(["updateActiveElementProperty"]),
    add() {
      this.spacerBottom++;
    },
    subtract() {
      this.spacerBottom--;
    },
    setSpacerBottom(spacer) {
      const data = {
        ...this.newPopup.children[this.activeElementIndex],
        paddingBottom: spacer,
      };
      this.updateActiveElementProperty(data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
