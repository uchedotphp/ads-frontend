<template>
  <div
    draggable="true"
    class="container active-element"
    @click.stop="activate"
    @dragstart.stop="startDrag($event)"
    @dragenter.prevent
    @dragover.prevent
    @drop.stop="drop($event)"
  >
    <div v-if="id == activeElementId" class="opts">
      <i
        :class="{ active: id == activeElementId }"
        class="bi bi-grip-horizontal"
        role="button"
      ></i>
      <i
        :class="{ active: id == activeElementId }"
        class="bi bi-x"
        role="button"
        @click="close"
      ></i>
    </div>
    <div class="slot" :class="{ active: id == activeElementId }">
      <slot />
    </div>
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
    slotId: {
      type: Number,
      required: true
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

    close() {
      this.$emit("close");
    },

    activate() {
      this.changeActiveElementId(this.id);
    },

    startDrag(event) {
      this.changeActiveElementId(this.id);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemId", this.id);
    },
    
    drop(event) {
    const elementIdToBeMove = parseInt(event.dataTransfer.getData('itemId'))
    this.swapElements({
        elementIdToBeMoved: elementIdToBeMove,
        targetElementId: this.slotId
    })
    },
  },
};
</script>

<style lang="scss" scoped>
.active-element {
  cursor: pointer;
  border-radius: 8px;
  transition: all 240ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
}

i.bi {
  color: #e0e8ff;

  &.active {
    color: cyan;
  }
}

.opts {
  display: flex;
  justify-content: space-between;
}

.slot {
  padding: 5px;
  border-radius: 12px;
  border: 1px dashed transparent;

  &.active {
    border-width: 2px;
    border-color: cyan;
  }
}
</style>
