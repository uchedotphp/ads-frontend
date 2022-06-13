<template>
  <div class="preview-screen">
    <ActiveElement :id="100">
      <div @click.stop="setWrapperActive" class="card mx-auto" :style="`background-color: ${bgColor}`">
        <div class="inner-content">
          <p v-if="newPopup.children.length === 0">
            Click on an element on the
            <span class="d-none d-sm-inline">left</span
            ><span class="d-sm-none">top</span> to add them here.
          </p>
          <div>
            <template v-for="element in newPopup.children">
              <ActiveElement
                v-if="element.type === 'button'"
                :key="element.id"
                :id="element.id"
                @close="removeTemplateElement(element.id)"
              >
                <TemplateButton
                  :bg-color="element.backgroundColor"
                  :text-color="element.color"
                  :size="element.size"
                  >{{ element.label }}</TemplateButton
                >
              </ActiveElement>
              <ActiveElement
                v-else-if="element.type === 'input'"
                :id="element.id"
                @close="removeTemplateElement(element.id)"
              >
                <TemplateInput :placeholder="element.placeholder" />
              </ActiveElement>
              <ActiveElement
                v-else-if="element.type === 'text'"
                :id="element.id"
                @close="removeTemplateElement(element.id)"
              >
                <TemplateText
                  :content="element.text"
                  :size="element.size"
                  :color="element.color"
                />
              </ActiveElement>
            </template>
          </div>
        </div>
      </div>
    </ActiveElement>
  </div>
</template>

<script>
import DropDownOpt from "./DropDownOpt.vue";
import { mapMutations, mapState } from "vuex";
import TemplateInput from "./TemplateInput.vue";
import TemplateText from "./TemplateText.vue";
import TemplateButton from "./TemplateButton.vue";
import ActiveElement from "./ActiveElement.vue";

export default {
  name: "PreviewScreen",
  data() {
    return {
      textLabel: "text",
      selectedOpt: "14px",
    };
  },
  components: {
    TemplateText,
    TemplateInput,
    DropDownOpt,
    TemplateButton,
    ActiveElement,
  },
  computed: {
    ...mapState(["activeElementId", "newPopup"]),
    ...mapState({
      bgColor: state => state.newPopup.backgroundColor
    })
  },
  methods: {
    ...mapMutations(["removeTemplateElement", 'changeActiveElementId']),
    setWrapperActive() {
      this.changeActiveElementId(100)
    }
  },
};
</script>

<style lang="scss" scoped>
.preview-screen {
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
    width: 100vw;
  }

  .inner-content {
    margin: 10px;
    flex: 1;
    overflow: hidden;
    border: 3px solid white;
    max-height: 480px;
    max-width: 480px;
    border-radius: 99999px;
    display: grid;
    place-content: center;

    p {
      font-size: 24px;
      font-weight: 700;
      color: white;
    }
  }
}
</style>
