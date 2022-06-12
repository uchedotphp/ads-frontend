<template>
  <div class="container active-element" @click.stop="activate">
    <div class="opts">
      <i :class="{'active': id == activeElementId}" class="bi bi-grip-horizontal " role="button"></i>
      <i :class="{'active': id == activeElementId}" class="bi bi-x" role="button" @click="close"></i>
    </div>
    <div class="slot" :class="{'active': id == activeElementId}">
      <slot />
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "ActiveElement",

  props:{
    id: {
      type: Number,
      default: 0,
    }
  },

  computed: {
    ...mapState(["activeElementId"]),
  },

  methods: {
    ...mapMutations(["changeActiveElementId"]),

    close() {
      this.$emit("close");
    },

    activate() {
      this.changeActiveElementId(this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.active-element {
  cursor: pointer;
  border-radius: 8px;
  transition: all 240ms;

  &:hover {
    background-color: rgba(255,255,255,0.2);
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
  //background-color: white;
  padding: 5px;
  border-radius: 12px;
  border: 1px dashed #e0e8ff;

  &.active {
    border-width: 2px;
    border-color: cyan;
  }
}
</style>
