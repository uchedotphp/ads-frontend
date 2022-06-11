<template>
  <div>
    <input type="text" class="base-input" :placeholder="placeHolder" />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    placeHolder: {
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
