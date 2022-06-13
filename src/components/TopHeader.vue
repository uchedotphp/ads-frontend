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
      <TemplateButton @click="save" buttonSize="sm" class="save-template">
        <span v-if="!loading"> Save template </span>
        <LoadingSpinner v-else> Saving template... </LoadingSpinner>
      </TemplateButton>
      <button
        :disabled="!currentTemplateIdem"
        v-if="!loading"
        @click="previewTemplate"
        class="preview-link"
      >
        <i class="bi bi-folder-symlink me-1"></i>
        Preview in browser
      </button>
    </div>
    <div class="d-none d-lg-block col col-md-auto">
      {{ new Date().toLocaleString() }}
    </div>
  </header>
</template>

<script>
import TemplateButton from "./TemplateButton.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "TopHeader",
  components: {
    TemplateButton,
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
      this.loading = true;
      await this.saveTemplate();
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
    padding-inline: 20px;
    color: #ffffff;
  }
  .preview-link {
    margin-left: 30px;
    text-decoration: none;
    color: blue;
    font-weight: 700;
  }
}
</style>
