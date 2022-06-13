<template>
  <div
    :style="`color: ${color}; font-size: ${fontSize}; font-weight: ${fontWeight}`"
    class="template-content-editable"
    contenteditable="true"
    @input="updateText"
  >
    {{ content }}
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TemplateText",
  emits: ["update:textValue"],
  props: {
    content: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#999",
    },
    size: {
      type: String,
      default: "md",
    },
  },
  data() {
    return {
      text: "text",
    };
  },
  computed: {
    fontSize() {
      if (this.size == "sm") {
        return "14px";
      } else if (this.size == "lg") {
        return "26px";
      }
      return "16px";
    },
    fontWeight() {
      let weight;
      switch (this.fontSize === "14px") {
        case "14px":
          weight = 400;
          break;

        case "16px":
          weight = 500;
          break;

        case "26px":
          weight = 700;
          break;

        default:
          break;
      }
      return weight;
    },
  },
  methods: {
    ...mapMutations(["updateActiveElementProperty"]),

    updateText(e) {
      this.updateActiveElementProperty({
        key: "text",
        value: e.target.innerText,
      });
    },

    resetLabel() {
      if (!this.text.length) {
        this.text = "Type in some text";
        this.updateText();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.template-content-editable {
  line-height: 26.23px;
  text-align: center;
  &:focus {
    outline: none;
    border: none;
  }
}
</style>
