<template>
  <div
    draggable="true"
    @dragstart.stop="startDrag($event)"
    @drop.stop="drop($event)"
    @dragenter.prevent
    @dragover.prevent
    @click.stop="activate"
    :class="[{ active: id === activeElementId }, 'active-element']"
  >
    <slot />
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";

export default {
  name: "ActiveElement",

  props: {
    id: {
      type: Number,
      default: 0,
    },
    targetElementId: {
      type: Number,
      required: true,
    },
  },

  computed: {
    ...mapState(["activeElementId", "newPopup"]),
    ...mapGetters({
      getActiveTemplateElement: "getActiveTemplateElement",
    }),
  },

  methods: {
    ...mapMutations(["changeActiveElementId", "swapElements"]),

    activate() {
      this.changeActiveElementId(this.id);
    },

    startDrag(event) {
      this.changeActiveElementId(this.id);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("elementIdToBeMove", this.id);
    },

    drop(event) {
      const elementIdToBeMove = parseInt(
        event.dataTransfer.getData("elementIdToBeMove")
      );
      if (elementIdToBeMove !== this.targetElementId) {
        this.swapElements({
          elementIdToBeMoved: elementIdToBeMove,
          targetElementId: this.targetElementId,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.active-element {
  cursor: pointer;
  border-radius: 8px;
  transition: all 240ms;
  &.active {
    outline: 1px dashed #ffffff;
  }
}
</style>
