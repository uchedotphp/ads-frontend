<template>
  <p
    class="template-content-editable"
    @input="updateText"
    contenteditable="true"
    :style="`color: ${color}; font-size: ${fontSize}px; font-weight: ${fontWeight}; padding-bottom: ${paddingBottom}em`"
  >
    {{ content }}
  </p>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "TemplateText",
  props: {
    id: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    fontSize: {
      type: Number,
      default: 30,
    },
    fontWeight: {
      type: Number,
      default: 600,
    },
    color: {
      type: String,
      default: "#ffffff",
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
.template-content-editable {
  // line-height: 26.23px;
  text-align: center;
  &:focus {
    outline: none;
    border: none;
  }
}
</style>
