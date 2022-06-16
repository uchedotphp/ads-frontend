<template>
  <header class="top-header">
    <div class="d-sm-flex row align-items-center">
      <div class="logo-area d-none col-auto d-sm-flex align-items-center">
        <img
          src="../assets/images/poptin-logo.png"
          height="40"
          alt="poptin logo"
        />
        <h2 class="title ms-2">Poptin test</h2>
      </div>
      <div
        class="col d-flex align-items-center justify-content-start justify-content-sm-center"
      >
        <button @click="reset" :disabled="pageLoading" class="btn text-danger me-3">
          <i class="bi bi-arrow-clockwise" style="font-size: 2rem"></i>
        </button>
        <button
          :disabled="pageLoading"
          @click="save"
          class="btn btn-outline-primary save-template me-auto me-sm-0 text-truncate"
        >
          <template v-if="!loading">
            <span class="fw-bold">
              {{ idemStatus !== null ? "Update template" : "Save template" }}
            </span>
          </template>
          <LoadingSpinner size="sm" v-else>
            {{
              idemStatus !== null
                ? "Updating template..."
                : "Saving template..."
            }}
          </LoadingSpinner>
        </button>

        <button
          disabled
          type="button"
          class="col-auto btn btn-outline-success ms-3"
        >
          <i class="bi bi-back me-1"></i>
          <span class="d-none d-sm-inline"> Copy script </span>
        </button>
        <button
          :disabled="pageLoading || loading"
          @click="openTemplateHistory"
          class="preview-link btn d-sm-none"
        >
          <i
            style="font-size: 20px"
            class="bi bi-layout-text-window text-dark fw-bold"
          ></i>
        </button>
      </div>
      <div class="d-none d-sm-block col-auto">
        <a
          href="https://github.com/uchedotphp/poptin-frontend"
          target="_blank"
          type="button"
          class="btn btn-outline-primary"
          >Github Repo</a
        >
      </div>
    </div>

    <!-- modal -->
    <ModalContent id="savedTemplates">
      <template #title>
        <h5 class="fw-semibold">Saved templates</h5>
      </template>
      <SavedTemplates />
    </ModalContent>
  </header>
</template>

<script>
import LoadingSpinner from "./LoadingSpinner.vue";
import ModalContent from "./ModalContent.vue";
import SavedTemplates from "./SavedTemplates.vue";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "TopHeader",
  components: {
    LoadingSpinner,
    ModalContent,
    SavedTemplates,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState(["newPopup", "pageLoading"]),
    ...mapState({
      idemStatus: (state) => state.newPopup.idem,
    }),
  },
  methods: {
    ...mapMutations(['resetCanvas']),
    ...mapActions(["saveTemplate", "updateTemplate"]),
    async save() {
      try {
        this.loading = true;
        if (this.newPopup.idem !== null) {
          await this.updateTemplate(this.newPopup.idem);
        } else {
          await this.saveTemplate();
        }
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    openTemplateHistory() {
      new Modal(document.getElementById("savedTemplates")).show();
    },
    reset() {
      this.resetCanvas()
    }
  },
};
</script>

<style lang="scss" scoped>
.top-header {
  background-color: white;
  padding: 10px 30px;
  border-bottom: 1px solid #ebecf0;

  @media (max-width: 767.98px) {
    padding-inline: 10px;
  }

  .logo-area {
    .title {
      font-size: 16px;
    }
  }
  .save-template {
    width: fit-content;
    padding-inline: 20px;
  }
  .preview-link {
    margin-left: 30px;
    text-decoration: none;
    color: blue;
    font-weight: 700;
  }
}
</style>
