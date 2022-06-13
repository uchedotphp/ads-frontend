<template>
  <div v-if="!loading">
    <template v-if="popups.length">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Label</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(popup, index) in popups" :key="popup">
            <th scope="row">{{ index + 1 }}</th>
            <td class="text-primary fw-bold">{{ popup.idem }}</td>
            <td>{{ new Date(popup.created_at).toLocaleString() }}</td>
            <td>
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
            </td>
          </tr>
        </tbody>
      </table>
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
    </template>
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
