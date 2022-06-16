<template>
  <div
    class="d-flex icons-box justify-content-center"
    :style="{ height: height }"
  >
    <svg
      v-for="n in 3"
      :key="n"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      :style="`color: ${color}`"
      :class="[
        n === 2 && iconComesFirst
          ? 'align-self-start'
          : n === 2 && iconComesLast
          ? 'align-self-end'
          : 'align-self-center',
        'bi bi-star-fill',
      ]"
      viewBox="0 0 16 16"
    >
      <path
        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
      />
    </svg>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TemplateIcons",
  props: {
    id: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      default: "#cb3635",
    },
  },
  computed: {
    ...mapState(["newPopup"]),
    iconComesFirst() {
      const index = this.newPopup.children.findIndex((i) => i.id === this.id);
      return index === 0;
    },
    iconComesLast() {
      const index = this.newPopup.children.findIndex((i) => i.id === this.id);
      return index === this.newPopup.children.length - 1;
    },
    iconComesFirstOrLastOnCollection() {
      return this.iconComesFirst || this.iconComesLast;
    },
    height() {
      if (this.iconComesFirstOrLastOnCollection) {
        return "80px";
      }
      return "auto";
    },
  },
};
</script>

<style lang="scss" scoped>
.icons-box {
  .bi {
    width: 30px;
    height: 30px;
    &:nth-child(2) {
      width: 46px;
      height: 46px;
      margin-inline: 30px;
    }
  }
}
</style>
