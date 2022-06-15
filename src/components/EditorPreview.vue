<template>
  <div class="canvas card">
    <div class="inner-content">
      <div class="max-w">
        <TemplateIcons />
        <TemplateText
          content="All text and elements in this popup should be editable and draggable"
        />
        <TemplateInput />
        <TemplateButton>SIGNUP NOW</TemplateButton>
        <TemplateText content="No credit card required. No Surprise" />
      </div>
    </div>
  </div>
</template>

<script>
import TemplateInput from "./elements/TemplateInput.vue";
import TemplateButton from "./elements/TemplateButton.vue";
import TemplateText from "./elements/TemplateText.vue";
import TemplateIcons from './elements/TemplateIcons.vue';

export default {
  name: "EditorPreview",
  components: {
    TemplateInput,
    TemplateButton,
    TemplateText,
    TemplateIcons
  },
};
</script>

<style lang="scss" scoped>
.canvas {
  background: #e85e5b;
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
    margin: 10px;

    .max-w {
      max-width: 350px;
      @media (max-width: 767.98px) {
        max-width: 250px;
      }
    }
  }
}
</style>
