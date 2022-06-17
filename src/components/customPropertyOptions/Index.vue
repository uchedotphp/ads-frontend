<template>
  <div class="props d-flex">
    <PaletteBg />

    <FontSize
      v-if="
        elementType === 'text' ||
        elementType === 'input' ||
        elementType === 'button'
      "
    />

    <FontColor
      v-if="
        elementType === 'text' ||
        elementType === 'icon' ||
        elementType === 'button'
      "
    />

    <PaddingSpacer v-if="elementType !== null" paddingType="bottom" />

    <DeleteElement v-if="elementType !== null" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import DeleteElement from "./DeleteElement.vue";
import FontColor from "./FontColor.vue";
import FontSize from "./FontSize.vue";
import PaddingSpacer from "./PaddingSpacer.vue";
import PaletteBg from "./PaletteBg.vue";

export default {
  components: { FontSize, PaletteBg, FontColor, DeleteElement, PaddingSpacer },
  name: "PropertyOption",
  computed: {
    ...mapState(["activeElementId"]),
    ...mapState({
      elementType: (state) => {
        if (state.activeElementId) {
          return state.newPopup.children.find(
            (e) => e.id === state.activeElementId
          ).type;
        }
        return null;
      },
    }),
  },
};
</script>

<style lang="scss" scoped>
.props {
  background-color: #ffffff;
  padding: 8px 10px;
  width: 100%;
  border-bottom: 1px solid #ebecf0;

  @media (max-width: 767.98px) {
    overflow-x: auto;
  }

  > * {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
