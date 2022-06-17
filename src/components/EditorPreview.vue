<template>
  <div class="canvas card" :style="`background-color: ${bgColor}`">
    <div class="inner-content">
      <div class="max-w">
        <!-- when canvas is empty -->
        <TemplateText
          v-if="currentTemplate.children.length === 0"
          content="Click on an element to add them here."
        />
        <template
          v-for="(element, index) in currentTemplate.children"
          :key="index"
        >
          <ActiveElement
            v-if="element.type === 'icon'"
            :id="element.id"
            :targetElementId="element.id"
          >
            <TemplateIcons
              :id="element.id"
              :paddingBottom="element.paddingBottom"
              :color="element.color"
            />
          </ActiveElement>

          <ActiveElement
            v-else-if="element.type === 'text'"
            :id="element.id"
            :targetElementId="element.id"
          >
            <TemplateText
              :content="element.text"
              :id="element.id"
              :fontSize="parseInt(parseInt(element.fontSize))"
              :color="element.color"
              :paddingBottom="element.paddingBottom"
            />
          </ActiveElement>

          <ActiveElement
            v-else-if="element.type === 'input'"
            :id="element.id"
            :targetElementId="element.id"
          >
            <TemplateInput
              :id="element.id"
              :fontSize="parseInt(element.fontSize)"
              :placeholder="element.placeholder"
              :paddingBottom="element.paddingBottom"
            />
          </ActiveElement>

          <ActiveElement
            v-else-if="element.type === 'button'"
            :id="element.id"
            :targetElementId="element.id"
          >
            <TemplateButton
              :id="element.id"
              :paddingBottom="element.paddingBottom"
              :fontSize="parseInt(element.fontSize)"
              :textColor="element.color"
              :text="element.text"
              />
          </ActiveElement>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import TemplateInput from "./elements/TemplateInput.vue";
import TemplateButton from "./elements/TemplateButton.vue";
import TemplateText from "./elements/TemplateText.vue";
import TemplateIcons from "./elements/TemplateIcons.vue";
import ActiveElement from "./ActiveElement.vue";
import { mapState } from "vuex";

export default {
  name: "EditorPreview",
  components: {
    TemplateInput,
    TemplateButton,
    TemplateText,
    TemplateIcons,
    ActiveElement,
  },
  computed: {
    ...mapState({
      currentTemplate: (state) => state.newPopup,
      bgColor: (state) => state.newPopup.backgroundColor,
    }),
  },
};
</script>

<style lang="scss" scoped>
.canvas {
  display: flex;
  height: 494px;
  width: 494px;
  text-align: center;
  clip-path: circle(50%);

  @media (max-width: 767.98px) {
    height: 294px;
    width: 294px;
  }

  .inner-content {
    overflow: hidden;
    border-radius: 99999px;
    border: 3px solid white;
    flex: 1;
    display: grid;
    place-content: center;
    // justify-content: center;
    // padding-top: 2em;
    margin: 10px;

    .max-w {
      // max-width: 350px;
      width: 350px;
      @media (max-width: 767.98px) {
        width: 250px;
        // max-width: 250px;
      }
    }
  }
}
</style>
