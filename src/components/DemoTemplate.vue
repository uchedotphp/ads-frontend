<template>
  <div class="demo">
    <div class="preview-demo">
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
};
</script>

<style lang="scss" scoped>
.demo {
  min-height: 100vh;
  display: grid;
  place-content: center;
}
.preview-demo {
  display: grid;
  place-content: center;

  @media (max-width: 767.98px) {
    margin-top: 1rem;
    min-height: auto;
    width: 100vw;
  }
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
    width: auto;
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
</style>
