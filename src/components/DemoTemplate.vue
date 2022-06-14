<template>
  <div class="d-flex flex-column root">
    <header class="header row align-items-center justify-content-between">
      <button
        @click="$router.push({ name: 'Editor' })"
        class="col-auto btn btn-primary"
      >
        <i class="bi bi-backspace me-2"></i>
        Back to editor
      </button>
      <button
        @click="attach"
        type="button"
        class="col-auto btn btn-outline-success"
      >
        <i class="bi bi-back me-1"></i>
        Copy script
      </button>
    </header>
    <div class="shadow-host flex-grow-1">
      <div class="preview">
        <div
          class="card mx-auto"
          :style="`background-color: ${newPopup.backgroundColor}`"
        >
          <div class="inner-content">
            <p class="welcome-text" v-if="newPopup.children.length === 0">
              Nothing to display here.
              <br />
              Create a <a href="/"> new template</a>
            </p>
            <div class="max-w">
              <template v-for="element in newPopup.children">
                <TemplateButton
                  v-if="element.type === 'button'"
                  :bg-color="element.backgroundColor"
                  :text-color="element.color"
                  :size="element.size"
                  >{{ element.label }}</TemplateButton
                >
                <TemplateInput
                  v-else-if="element.type === 'input'"
                  :placeholder="element.placeholder"
                />

                <TemplateText
                  v-else-if="element.type === 'text'"
                  :content="element.text"
                  :size="element.size"
                  :color="element.color"
                />
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TemplateButton from "./TemplateButton.vue";
import TemplateInput from "./TemplateInput.vue";
import TemplateText from "./TemplateText.vue";

export default {
  name: "DemoTemplate",
  props: {
    newPopup: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    TemplateText,
    TemplateInput,
    TemplateButton,
  },
  methods: {
    attach() {
      // shadowdom implementation
    }
  },
};
</script>

<style lang="scss" scoped>
.root {
  min-height: 100vh;

  .header {
    padding: 20px 50px;
    box-shadow: 0px 15px 23px rgba(208, 210, 218, 0.6);
  }
}
.shadow-host {
  // min-height: 100vh;
  display: grid;
  place-content: center;

  .preview {
    display: grid;
    place-content: center;

    @media (max-width: 767.98px) {
      margin-top: 1rem;
      min-height: auto;
      width: 100vw;
    }

    .card {
      display: flex;
      height: 500px;
      width: 500px;
      text-align: center;
      clip-path: circle(50%);
      @media (max-width: 767.98px) {
        height: 300px;
        width: 300px;
      }

      .inner-content {
        margin: 10px;
        flex: 1;
        overflow: auto;
        border: 3px solid white;
        max-height: 480px;
        max-width: 480px;
        border-radius: 99999px;
        display: grid;
        place-content: center;
        .max-w {
          max-width: 400px;
          > * {
            padding-bottom: 20px;
          }
          @media (max-width: 767.98px) {
            max-height: 280px;
            max-width: 280px;
          }

          p {
            font-size: 24px;
            font-weight: 700;
            color: white;
          }
        }
      }
    }
  }
}
</style>
