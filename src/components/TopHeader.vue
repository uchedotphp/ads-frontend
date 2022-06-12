<template>
  <header class="top-header d-none d-sm-flex row align-items-center">
    <div class="logo-area col-3 col-lg-2 d-flex align-items-center">
      <img
        src="../assets/images/poptin-logo.png"
        height="40"
        alt=""
        srcset=""
      />
      <h2 class="title ms-2">Poptin test</h2>
    </div>
    <div class="col me-auto">
      <BaseButton buttonSize="sm" class="save-template">
        Save template
      </BaseButton>
      <a href="#" class="preview-link">
        <i class="bi bi-folder-symlink me-1"></i>
        Preview in browser
      </a>
    </div>
    <div class="col col-md-auto">
      {{ new Date().toLocaleString() }}
    </div>
  </header>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  name: "TopHeader",
  components: {
    BaseButton,
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
  }
  .preview-link {
    margin-left: 30px;
    text-decoration: none;
    color: blue;
    font-weight: 700;
  }
}
</style>
