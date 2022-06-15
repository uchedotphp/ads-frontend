<template>
  <div class="container-fluid d-flex row mx-0 px-0" style="height: 100%">
    <LeftSidebarMenu class="d-none d-sm-block col-auto" />
    <div class="col px-0">
      <div class="row d-flex flex-column" style="height: 100%">
        <TopHeader class="col-auto" />
        <div class="col preview">
          <main class="content">
            <EditorPreview /> 
          </main>
        </div>
        <BottomNav class="d-sm-none col-auto" />
      </div>
    </div>
    <!-- <div class="bg-info col overflow-auto">
        <header style="height: 68px;" class="d-flex bg-danger overflow-auto">
            <a class="px-4 text-light" href="#">Link 1</a>
            <a class="px-4 text-light" href="#">Link 1</a>
            <a class="px-4 text-light" href="#">Link 1</a>
            <a class="px-4 text-light" href="#">Link 1</a>
            <a class="px-4 text-light" href="#">Link 1</a>
            <a class="px-4 text-light" href="#">Link 1</a>
            <a class="px-4 text-light" href="#">Link 1</a>
            <a class="px-4 text-light" href="#">Link 1</a>
            <a class="px-4 text-light" href="#">Link 1</a>
            <a class="px-4 text-light" href="#">Link 1</a>
            <a class="px-4 text-light" href="#">Link 1</a>
            <a class="px-4 text-light" href="#">Link 1</a>
            <a class="px-4 text-light" href="#">Link 1</a>
            <a class="px-4 text-light" href="#">Link 1</a>
        </header>
    </div> -->
  </div>
</template>

<script>
import LeftSidebarMenu from "../components/navigations/LeftSidebarMenu.vue";
import BottomNav from "../components/navigations/BottomNav.vue";
import TopHeader from "../components/TopHeader.vue";
import EditorPreview from '../components/EditorPreview.vue';

export default {
  components: { TopHeader, LeftSidebarMenu, BottomNav, EditorPreview },
  name: "MainLayout",
  mounted() {
    // const tooltipTriggerList = document.querySelectorAll(
    //   '[data-bs-toggle="tooltip"]'
    // );
    // const tooltipList = [...tooltipTriggerList].map(
    //   (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    // );
  },
};
</script>

<style lang="scss" scoped>
.preview {
  display: grid;
  place-content: center;

  .content {
    max-width: 800px;
  }
}
</style>
