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
    <div
      v-if="id === activeElementId"
      class="drag-handles d-flex justify-content-between"
    >
      <i
        class="bi bi-grip-horizontal text-primary"
        style="font-size: 1.5rem"
        role="button"
      ></i>
      <i
        @click.stop="removeFocus"
        class="bi bi-x-circle-fill text-primary"
        style="font-size: 1.5rem"
        role="button"
      ></i>
    </div>
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

    removeFocus() {
      this.changeActiveElementId(0);
    },
  },
};
</script>

<style lang="scss" scoped>
.active-element {
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  transition: all 240ms;

  :hover {
    // outline: 1px dashed #ffffff;
  }
  &.active {
    outline: 1px dashed #ffffff;
  }

  .drag-handles {
    position: absolute;
    // width: 100%;
    right: -10px;
    left: -10px;
    top: -25px;
  }
}
</style>
