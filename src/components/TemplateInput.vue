<template>
  <div style="max-width: 300px" class="mx-auto">
    <input type="text" class="base-input" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "TemplateInput",
  props: {
    placeholder: {
      type: String,
      default: "Email",
    },
  },
};
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;
  border-radius: 12px;
  padding: 10px 15px;
  font-size: 20px;
  outline: none;
  border: none;
}
</style>
