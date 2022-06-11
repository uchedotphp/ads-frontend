<template>
  <div class="container active-element">
    <div class="opts">
      <i :class="{'active': isActive}" class="bi bi-grip-horizontal " role="button"></i>
      <i :class="{'active': isActive}" class="bi bi-x" role="button" @click="close"></i>
    </div>
    <div class="active">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ActiveElement",

  props:{
    isActive: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    close() {
      this.$emit("close");
    },
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
  .active {
    color: cyan;
  }
}

.opts {
  display: flex;
  justify-content: space-between;
}

.active {
  //background-color: white;
  padding: 5px;
  border-radius: 12px;
  border: 1px dashed #e0e8ff;
}
</style>
