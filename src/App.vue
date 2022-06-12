<template>
  <div class="container-fluid">
    <div class="row">
      <LeftPanel class="col-xs-12 col-sm-2" />
      <PreviewScreen class="col-xs-12 col px-0" />
      <RightPanel class="col-6 col-sm-3" />
    </div>
  </div>
</template>

<script>
import PreviewScreen from "./components/PreviewScreen.vue";
import LeftPanel from "./components/LeftPanel.vue";
import RightPanel from "./components/RightPanel.vue";
export default {
  components: {
    PreviewScreen,
    LeftPanel,
    RightPanel,
  },
};
</script>

<style lang="scss"></style>
