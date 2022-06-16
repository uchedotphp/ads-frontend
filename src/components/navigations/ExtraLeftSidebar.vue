<template>
  <nav class="extra-sidebar py-5 px-3">
    <p class="text-center fw-semibold pb-2">Saved Templates</p>
    <ol
      v-if="!loadingData"
      class="list-group list-group-numbered container px-0"
    >
      <li
        v-for="(template, index) in templateHistory"
        :key="index"
        role="button"
        @mouseenter="hoverIndex = index"
        @mouseleave="hoverIndex = null"
        @click="useTemplate(template)"
        class="list-group-item d-flex list-group-item-action justify-content-between align-items-start row mx-0"
        :class="{ active: templateInUse !== null && templateInUse === index }"
      >
        <div class="ms-2 me-auto col text-truncate">
          <div class="fw-bold text-truncate">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            quisquam obcaecati maxime eius, voluptatem, exercitationem, fuga
            veniam tempora numquam facilis provident minus atque enim voluptas
            sed assumenda nisi ipsa aperiam?
          </div>
          {{ index }}{{ templateHistory.length }}
        </div>
        <span
          v-if="templateInUse !== null && templateInUse === index"
          class="badge bg-danger fw-light col-auto rounded-pill"
          >in use</span
        >
        <span
          v-else-if="index === hoverIndex"
          class="badge bg-primary fw-light col-auto rounded-pill"
          >Use template</span
        >
      </li>
    </ol>
    <div v-else class="loading-data">
      <LoadingSpinner />
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import LoadingSpinner from "../LoadingSpinner.vue";
export default {
  components: { LoadingSpinner },
  name: "ExtraSidebar",
  data() {
    return {
      loadingData: false,
      hoverIndex: null,
    };
  },
  computed: {
    ...mapState(["templateHistory", "newPopup"]),
    templateInUse() {
      if (this.newPopup.idem !== null) {
        return this.templateHistory.findIndex(
          (t) => t.idem === this.newPopup.idem
        );
      }
      return null;
    },
  },
  async mounted() {
    this.loadingData = true;
    await this.fetchSavedTemplates();
    this.loadingData = false;
  },
  methods: {
    ...mapMutations(["setStates"]),
    ...mapActions(["fetchSavedTemplates"]),
    useTemplate(template) {
      this.setStates({
        newPopup: {
          idem: template.idem,
          id: template.id,
          created_at: template.created_at,
          updated_at: template.updated_at,
          children: template.data.children,
          backgroundColor: template.data.backgroundColor,
        },
      });
    },
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
  // display: grid;
  //   place-content: center;

  .list-group {
  }

  .loading-data {
    height: 100%;
    display: grid;
    place-content: center;
  }
}
</style>
