<template>
  <button
  @input="updateText"
  contenteditable="true"
      class="base-btn btn"
      :style="`color: ${textColor}; background-color: ${bgColor}; margin-bottom: ${paddingBottom}em; font-size: ${fontSize}px`"
      type="button">
      {{ text }}
  </button>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "TemplateButton",
  props: {
    id: {
      type: Number,
      required: true
    },
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      default: 'SIGNUP NOW'
    },
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
      default: "#FFFFFF",
    },
    bgColor: {
      type: String,
      default: "#000000",
    },
    fontSize: {
      type: Number,
      default: 24,
    },
    paddingBottom: {
      type: Number,
      default: 0,
    },
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
  methods: {
    ...mapMutations(["updateActiveElementProperty"]),
    updateText(e) {
      const data = {
        ...this.newPopup.children[this.activeElementIndex],
        text: e.target.innerText,
      };
      this.updateActiveElementProperty(data);
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
  width: 100%;
}
</style>
