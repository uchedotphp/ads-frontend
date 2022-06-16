<template>
  <input
    type="text"
    class="base-input"
    :placeholder="placeholder"
    :style="`font-size: ${fontSize}px`"
  />
</template>

<script>
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
      type: String,
      default: "20",
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
}

::-webkit-input-placeholder {
  color: #a4a6ad;
}
</style>
