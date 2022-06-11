<template>
  <input
    :class="`text-label text-${labelColor}`"
    v-model="text"
    @input="updateLabel"
    @blur="resetLabel"
  />
</template>

<script>
export default {
  name: "TextLabel",
  emits: ["update:textValue"],
  props: {
    textValue: {
      type: String,
      required: true,
    },
    labelColor: {
      type: String,
      default: "primary",
    },
  },
  data() {
    return {
      text: "text",
    };
  },
  methods: {
    updateLabel() {
      this.$emit("update:textValue", this.text);
    },
    resetLabel() {
      if (!this.text.length) {
        this.text = "text";
        this.updateLabel();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.text-label {
  border: none;
  background-color: transparent;
  text-align: center;
  font-size: 20px;
  outline: none;
  &.primary {
    color: #0d6efd;
  }
  &.secondary {
    color: #adb5bd;
  }
  &.success {
    color: #198754;
  }
  &.danger {
    color: #dc3545;
  }
  &.warning {
    color: #ffc107;
  }
  &.info {
    color: #0dcaf0;
  }
  &.light {
    color: #ffffff;
  }
  &.dark {
    color: #000000;
  }
}
</style>
