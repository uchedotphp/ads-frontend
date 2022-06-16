<template>
  <nav class="extra-sidebar py-5 px-3">
    <p class="text-center fw-semibold pb-2">Saved Templates</p>
    <SavedTemplates v-if="!loadingData" />
    <div v-else class="loading-data">
      <LoadingSpinner />
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
import LoadingSpinner from "../LoadingSpinner.vue";
import SavedTemplates from "../SavedTemplates.vue";
export default {
  components: { LoadingSpinner, SavedTemplates },
  name: "ExtraSidebar",
  data() {
    return {
      loadingData: false,
      hoverIndex: null,
    };
  },
  async mounted() {
    this.loadingData = true;
    await this.fetchSavedTemplates();
    this.loadingData = false;
  },
  methods: {
    ...mapActions(["fetchSavedTemplates"]),
  },
};
</script>

<style lang="scss" scoped>
.extra-sidebar {
  position: fixed;
  z-index: 10;
  left: 112px;
  top: 0;
  bottom: 0;
  background-color: #ebecf0;
  width: 300px;

  .loading-data {
    height: 100%;
    display: grid;
    place-content: center;
  }
}
</style>
