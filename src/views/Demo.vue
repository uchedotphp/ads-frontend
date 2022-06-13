<template>
  <DemoTemplate v-if="!pageLoading" :newPopup="template" />
  <div v-else class="loading">
    <LoadingSpinner />
  </div>
</template>

<script>
import DemoTemplate from "../components/DemoTemplate.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import { mapActions } from "vuex";

export default {
  name: "Demo",
  components: {
    DemoTemplate,
    LoadingSpinner,
  },
  data() {
    return {
      pageLoading: true,
      template: null,
    };
  },
  async mounted() {
    this.template = await this.fetchTemplate(this.$route.params.idem);
    this.pageLoading = false;
  },
  methods: {
    ...mapActions(["fetchTemplate"]),
  },
};
</script>

<style lang="scss" scoped>
.loading {
  height: 100vh;
  display: grid;
  place-content: center;
}
</style>
