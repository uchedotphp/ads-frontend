<template>
  <header class="top-header d-none d-sm-flex row align-items-center">
    <div class="logo-area col-3 col-lg-2 d-flex align-items-center">
      <img
        src="../assets/images/poptin-logo.png"
        height="40"
        alt="poptin logo"
      />
      <h2 class="title ms-2">Poptin test</h2>
    </div>
    <div class="col me-auto">
      <button @click="save" class="btn save-template">
        <span v-if="!loading" class="fw-bold"> Save template </span>
        <LoadingSpinner size="sm" v-else> Saving template... </LoadingSpinner>
      </button>
      <button
        :disabled="!currentTemplateIdem"
        v-if="!loading"
        @click="previewTemplate"
        class="preview-link btn"
      >
        Preview in browser
      </button>
    </div>
    <div class="col col-md-auto">
      <a
        href="https://github.com/uchedotphp/poptin-frontend"
        target="_blank"
        type="button"
        class="btn btn-outline-primary"
        >Github Repo</a
      >
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
    ...mapState(["currentTemplateIdem"]),
  },
  methods: {
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
  padding: 20px 50px;
  box-shadow: 0px 15px 23px rgba(208, 210, 218, 0.6);

  .logo-area {
    .title {
      font-size: 18px;
    }
  }
  .save-template {
    background: linear-gradient(0deg, #6a11cb, #2575fc) !important;
    width: fit-content;
    padding-inline: 20px;
    color: #ffffff;
    outline: none;
    border: none;
  }
  .preview-link {
    margin-left: 30px;
    text-decoration: none;
    color: blue;
    font-weight: 700;
  }
}
</style>
