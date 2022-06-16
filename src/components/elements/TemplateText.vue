<template>
  <p
  class="template-content-editable"
    contenteditable="true"
    :style="`color: ${color}; font-size: ${fontSize}px; font-weight: ${fontWeight}`"
  >
    {{ content }}
  </p>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TemplateText",
  emits: ["update:textValue"],
  props: {
    id: {
      type: Number,
      required: true
    },
    content: {
      type: String,
      required: true,
    },
    fontSize: {
      type: String,
      default: "30",
    },
    fontWeight: {
      type: Number,
      default: 600,
    },
    color: {
      type: String,
      default: "#ffffff",
    }
  },
  methods: {
    // ...mapMutations(["updateActiveElementProperty"]),

    // updateText(e) {
    //   this.updateActiveElementProperty({
    //     key: "text",
    //     value: e.target.innerText,
    //   });
    // },

    // resetLabel() {
    //   if (!this.text.length) {
    //     this.text = "Type in some text";
    //     this.updateText();
    //   }
    // },
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
