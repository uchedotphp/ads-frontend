<template>
  <div class="container-fluid d-flex row mx-0 px-0">
    <LeftSidebarMenu class="d-none d-sm-block col-auto" />
    <div class="col">
      <div class="row d-flex flex-column" style="height: 100%">
        <TopHeader class="col-auto" />
        <div class="col">
          <p class="muted">
            Placeholder text to demonstrate some
            <a href="#" data-bs-toggle="tooltip" title="Default tooltip"
              >inline links</a
            >
            with tooltips. This is now just filler, no killer. Content placed
            here just to mimic the presence of
            <a href="#" data-bs-toggle="tooltip" title="Another tooltip"
              >real text</a
            >. And all that just to give you an idea of how tooltips would look
            when used in real-world situations. So hopefully you've now seen how
            <a href="#" data-bs-toggle="tooltip" title="Another one here too"
              >these tooltips on links</a
            >
            can work in practice, once you use them on
            <a href="#" data-bs-toggle="tooltip" title="The last tip!"
              >your own</a
            >
            site or project.
          </p>
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
import BottomNav from '../components/navigations/BottomNav.vue';
import TopHeader from "../components/TopHeader.vue";
export default {
  components: { TopHeader, LeftSidebarMenu, BottomNav },
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

<style lang="scss" scoped></style>
