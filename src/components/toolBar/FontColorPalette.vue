<template>
  <div class="row">
    <button
      v-for="(color, index) in colors"
      :key="index"
      @click="setBgColor(color)"
      class="btn px-0 col"
    >
      <div :style="`background-color: ${color}`" class="bgColor"
      :class="{ active: getActiveTemplateElement.color === color }"
      ></div>
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "FontColorPalette",
  data() {
    return {
      colors: [
        "#E85E5B",
        "#FFFFFF",
        "#000000",
        "#5D18EB",
        "#5DE1E6",
        "#FFBD58",
        "#008038",
        "#5271FF",
        "#ff914d",
      ],
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
      getActiveTemplateElement: 'getActiveTemplateElement'
    })
  },
  methods: {
    ...mapMutations(["updateActiveElementProperty"]),
    setBgColor(color) {
      const data = {
        ...this.newPopup.children[this.activeElementIndex],
        color,
      };
      this.updateActiveElementProperty(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
}
.bgColor {
  width: 40px;
  height: 40px;
  border-radius: 2px;
  border: 1px solid #000000;
  &.active {
    border: 3px solid #000000;
  }
}
</style>
