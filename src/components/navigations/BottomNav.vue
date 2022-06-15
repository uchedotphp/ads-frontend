<template>
  <div class="mobile-nav d-flex justify-content-evenly">
    <button
      @click="selectMenu(index)"
      v-for="(menu, index) in navButtons"
      :key="index"
      :class="[
        { active: activeMenu === index },
        'btn d-flex flex-column align-items-center fw-semibold nav-btn',
      ]"
    >
      <i :class="`bi ${menu.icon}`"></i>
      <span class="mt-2">{{ menu.type }}</span>
    </button>
  </div>
</template>

<script>
import NavButtons from "../../mixins/NavButtons";
export default {
  name: "BottomNav",
  mixins: [NavButtons],
  data() {
    return {
      activeMenu: null,
    };
  },
  methods: {
    selectMenu(index) {
      this.activeMenu = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-nav {
  background-color: rgb(67 56 202);
}
</style>
