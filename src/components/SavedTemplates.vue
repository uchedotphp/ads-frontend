<template>
  <div v-if="!loading">
    <div v-if="popups.length">
      <div class="row">
        <div class="col">Label</div>
        <div class="col text-center">Date</div>
        <div class="col text-end">Action</div>
      </div>
      <ul class="list-group row">
        <button
          type="button"
          v-for="popup in popups"
          :key="popup"
          class="list-group-item d-flex justify-content-between align-items-center col list-group-item-action"
        >
          <span class="fw-bold text-primary">
            {{ popup.idem }}
          </span>
          <span class="text-center">
            {{ new Date(popup.created_at).toLocaleString() }}
          </span>
          <span>
            <i
              @click="useTemplate(popup.data, popup.idem)"
              class="bi bi-download text-primary"
              role="button"
            ></i>
            <i
              @click="deleteTemp(popup.id)"
              class="bi bi-trash ms-3 text-danger"
              role="button"
            ></i>
          </span>
        </button>
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
      </ul>
    </div>
    <h6 v-else class="text-center text-bold text-primary">
      No save templates. <br />
      Save a template to have it appear here.
    </h6>
  </div>
  <div v-else class="d-flex justify-content-center">
    <LoadingSpinner />
  </div>
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
    };
  },
  computed: {
    ...mapState(["popups"]),
  },
  methods: {
    ...mapMutations(["setStates", "setSavedTemplate"]),
    ...mapActions(["deleteTemplate"]),
    useTemplate(template, idem) {
      const theTemplate = this.popups.find((t) => t.idem === idem);
      this.setStates({
        currentTemplateIdem: theTemplate.idem,
      });
      this.setSavedTemplate(template);
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
