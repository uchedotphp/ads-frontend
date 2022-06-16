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
        <button :disabled="pageLoading" class="btn text-danger me-3">
          <i class="bi bi-arrow-clockwise" style="font-size: 2rem"></i>
        </button>
        <button
          :disabled="pageLoading"
          @click="save"
          class="btn btn-outline-primary save-template me-auto me-sm-0 text-truncate"
        >
          <template v-if="!loading">
            <i style="font-size: 1rem" class="bi bi-cloud-slash"></i>
            <span class="fw-bold"> Unsaved changes </span>
          </template>
          <LoadingSpinner size="sm" v-else> Saving template... </LoadingSpinner>
        </button>
        <button
          :disabled="!currentTemplateIdem"
          v-if="!loading"
          @click="previewTemplate"
          class="preview-link btn d-none"
        >
          Preview
        </button>
        <button
          :disabled="!currentTemplateIdem"
          v-if="!loading"
          @click="previewTemplate"
          class="preview-link btn d-sm-none"
        >
          <i
            style="font-size: 20px"
            class="bi bi-layout-text-window text-dark fw-bold"
          ></i>
        </button>
      </div>
      <div class="d-none d-sm-block col-auto">
        <!-- <a
        href="https://github.com/uchedotphp/poptin-frontend"
        target="_blank"
        type="button"
        class="btn btn-outline-primary"
        >Github Repo</a
      > -->
        <button disabled type="button" class="col-auto btn btn-outline-success">
          <i class="bi bi-back me-1"></i>
          Copy script
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import LoadingSpinner from "./LoadingSpinner.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "TopHeader",
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState(["currentTemplateIdem", "pageLoading"]),
  },
  methods: {
    clicking() {
      console.log("clicking");
    },
    ...mapActions(["saveTemplate"]),
    async save() {
      try {
        this.loading = true;
        await this.saveTemplate();
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    previewTemplate() {
      this.$router.push({
        name: "Demo",
        params: { idem: this.currentTemplateIdem },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.top-header {
  background-color: white;
  padding: 10px 30px;
  // box-shadow: 0px 15px 23px rgba(208, 210, 218, 0.6);
  border-bottom: 1px solid #ebecf0;

  .logo-area {
    .title {
      font-size: 16px;
    }
  }
  .save-template {
    // background: linear-gradient(0deg, #6a11cb, #2575fc) !important;
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
