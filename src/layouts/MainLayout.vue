<template>
  <div class="container-fluid d-flex row mx-0 px-0" style="height: 100%">
    <LeftSidebarMenu class="d-none d-sm-block col-auto" />
    <div class="col">
      <div class="row d-flex flex-column" style="height: 100%">
        <TopHeader class="col-auto" />
        <PropertyOptions class="col-auto" v-if="!pageLoading" />
        <div class="col preview">
          <main class="content">
            <EditorPreview v-if="!pageLoading" />
            <LoadingSpinner v-else />
          </main>
        </div>
        <BottomNav class="d-sm-none col-auto" />
      </div>
    </div>
  </div>
</template>

<script>
import LeftSidebarMenu from "../components/navigations/LeftSidebarMenu.vue";
import BottomNav from "../components/navigations/BottomNav.vue";
import TopHeader from "../components/TopHeader.vue";
import EditorPreview from "../components/EditorPreview.vue";
import PropertyOptions from "../components/customPropertyOptions/Index.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "MainLayout",
  components: {
    TopHeader,
    LeftSidebarMenu,
    BottomNav,
    EditorPreview,
    PropertyOptions,
    LoadingSpinner,
  },
  computed: {
    ...mapState(["pageLoading"]),
  },
  async mounted() {
    this.setStates({
      pageLoading: true,
    });
    await this.fetchSavedTemplates();
    this.setStates({
      pageLoading: false,
    });
  },
  methods: {
    ...mapMutations(["setStates"]),
    ...mapActions(["fetchSavedTemplates"]),
  },
};
</script>

<style lang="scss" scoped>
.preview {
  display: grid;
  place-content: center;
  // background-color: #EBECF0;

  .content {
    max-width: 800px;
  }
}
</style>
