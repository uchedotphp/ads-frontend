<template>
  <input
  @input="updateText"
    type="text"
    class="base-input"
    :placeholder="placeholder"
    :style="`font-size: ${fontSize}px; margin-bottom: ${paddingBottom}em`"
  />
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "TemplateInput",
  props: {
    id: {
      type: Number,
      required: true,
    },
    placeholder: {
      type: String,
      default: "E-mail",
    },
    fontSize: {
      type: Number,
      default: 12,
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
        placeholder: e.target.innerText,
      };
      this.updateActiveElementProperty(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;
  border-radius: 16px;
  padding: 10px 15px;
  outline: none;
  border: none;
  color: #a4a6ad;
}

::-webkit-input-placeholder {
  color: #a4a6ad;
}
</style>
