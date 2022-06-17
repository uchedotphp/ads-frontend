<template>
  <div class="row">
    <button
      v-for="color, index in colors"
      :key="index"
      @click="setBgColor(color)"
      class="btn px-0 col"
    >
      <div :style="`background-color: ${color}`" class="bgColor"></div>
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: "ColorPalette",
  data() {
    return {
      colors: [
        "#e85e5b",
        "#FF1616",
        "#5D18EB",
        "#5DE1E6",
        "#FFBD58",
        "#5DE1E6",
        "#008038",
        "#5271FF",
        "#ff914d",
      ],
    };
  },
  computed: {
      ...mapState(['newPopup'])
  },
  methods: {
      ...mapMutations(['setStates']),
      setBgColor(color) {
          console.log('the color: ', color);
          this.setStates({
              newPopup: {
                  ...this.newPopup,
                  backgroundColor: color
              }
          })
      }
  },
};
</script>

<style lang="scss" scoped>
.btn {
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
}
.bgColor {
  width: 40px;
  height: 40px;
  border-radius: 2px;
  &.active {
    border: 1px solid #000000;
  }
}
</style>
