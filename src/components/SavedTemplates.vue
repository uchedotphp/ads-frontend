<template>
  <div v-if="templateHistory.length">
    <ol class="list-group list-group-numbered container px-0">
      <li
        v-for="(template, index) in templateHistory.slice(0,10)"
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
            {{ template.idem }}
          </div>
          {{ new Date(template.created_at).toLocaleString() }}
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
    <nav aria-label="Pagination" class="mt-3">
      <ul class="pagination justify-content-end">
        <li class="page-item disabled">
          <a class="page-link">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  <h6 v-else class="text-center text-bold text-primary">
    No save templates. <br />
    Save a template to have it appear here.
  </h6>
</template>

<script>
import LoadingSpinner from "./LoadingSpinner.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "SavedTemplates",
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      loading: false,
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
  methods: {
    ...mapMutations(["setStates"]),
    ...mapActions(["deleteTemplate"]),
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
    async deleteTemp(id) {
      this.loading = true;
      await this.deleteTemplate(id);
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
