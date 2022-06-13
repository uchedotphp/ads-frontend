<template>
  <section class="container-fluid d-flex flex-column">
    <TopHeader />
    <div class="row content flex-grow-1">
      <LeftPanel class="col-12 col-sm-3 col-lg-2" />
      <PreviewScreen class="col-auto col-md" />
      <RightPanel class="col-6 col-sm-4 col-lg-3" />
    </div>
  </section>
</template>

<script>
import PreviewScreen from "./components/PreviewScreen.vue";
import LeftPanel from "./components/LeftPanel.vue";
import RightPanel from "./components/RightPanel.vue";
import TopHeader from "./components/TopHeader.vue";
import { mapActions } from "vuex";

export default {
  components: {
    PreviewScreen,
    LeftPanel,
    RightPanel,
    TopHeader,
  },
  async mounted() {
    // fetch all popups
    await this.fetchPopups();
  },
  methods: {
    ...mapActions(["fetchPopups"]),
  },
};
</script>

<style lang="scss">
.container-fluid {
  height: 100vh;
  .content {
    flex-direction: row;
    @media (max-width: 767.98px) {
      // flex-direction: column;
      > * {
        // width: 100%;
      }
    }
  }
}
</style>
