<template>
  <div class="dropdown">
    <p class="me-2">
      {{ label }}
    </p>
    <button
      class="btn btn-light dropdown-toggle"
      type="button"
      id="dropdownMenuButton2"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <template v-if="textOptionsType">
        {{ selectedOpt }}
      </template>
      <span v-else :class="`bg-${selectedOpt} color-picker`"></span>
    </button>
    <ul
      class="dropdown-menu dropdown-menu-light"
      aria-labelledby="dropdownMenuButton2"
    >
      <li v-for="(value, index) in values" :key="index">
        <a
          v-if="textOptionsType"
          @click="selectOption(value)"
          :class="[{ active: selectedOpt === value }, 'dropdown-item']"
          href="#"
          >{{ value }}</a
        >
        <a
          v-else
          @click="selectOption(value)"
          :class="[{ active: selectedOpt === value }, 'dropdown-item']"
          href="#"
          >
          <span :class="`color-picker bg-${value}`"></span>
          </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DropDownOpt",
  emits: ["update:selectedOpt"],
  props: {
    label: {
      type: String,
      required: true,
    },
    textOptionsType: {
      type: Boolean,
      default: true,
    },
    values: {
      type: Array,
      required: true,
    },
    selectedOpt: {
      type: String,
      default: "primary",
    },
  },
  methods: {
    selectOption(val) {
      this.$emit("selectOption", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  display: flex;
  align-items: center;
  width: fit-content;
}
  .color-picker {
    height: 15px;
    width: 15px;
    display: inline-block;
  }
</style>
