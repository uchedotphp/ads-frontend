<template>
  <div class="" style="min-height: 100vh; display: grid; place-content: center">
    <div class="card mx-auto">
      <div class="inner-content">
        <p v-if="newPopup.children.length === 0">
          All the text and elements in this popup should be editable and
          draggable
        </p>
        <div>
          <template v-for="element in newPopup.children">
            <ActiveElement v-if="element.type === 'button'" :key="element.id" :id="element.id" @close="removeTemplateElement(element.id)">
              <TemplateButton :label="element.label" :bg-color="element.backgroundColor" :text-color="element.color" :size="element.size" />
            </ActiveElement>
            <ActiveElement v-else-if="element.type === 'input'" :id="element.id" @close="removeTemplateElement(element.id)">
              <TemplateInput :placeholder="element.placeholder" />
            </ActiveElement>
            <ActiveElement v-else-if="element.type === 'text'" :id="element.id" @close="removeTemplateElement(element.id)">
              <TemplateText :content="element.text" :size="element.size" :color="element.color" />
            </ActiveElement>
          </template>
        </div>
        <!--         <DropDownOpt-->
        <!--          label="Select color"-->
        <!--          :values="['info', 'danger', 'dark', 'warning']"-->
        <!--          :textOptionsType="false"-->
        <!--          :selectedOpt="selectedOpt"-->
        <!--          @selectOption="selectedOpt = $event"-->
        <!--        />-->

      </div>
    </div>
  </div>
</template>

<script>
import DropDownOpt from "./DropDownOpt.vue";
import ActiveElement from './ActiveElement.vue';
import {mapMutations, mapState} from "vuex";
import TemplateInput from "./TemplateInput.vue";
import TemplateText from "./TemplateText.vue";
import TemplateButton from './TemplateButton.vue';

export default {
  name: "ViewPage",
  data() {
    return {
      textLabel: "text",
      selectedOpt: '14px'
    };
  },
  components: {
    TemplateText,
    TemplateInput,
    DropDownOpt,
    TemplateButton,
    ActiveElement
  },
  computed: {
    ...mapState(["activeElementId", "newPopup"]),
  },
  methods: {
    ...mapMutations(["removeTemplateElement"]),
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  height: 500px;
  width: 500px;
  text-align: center;
  background: #e85e5b;

  .inner-content {
    margin: 10px;
    flex: 1;
    overflow: hidden;
    border: 3px solid white;
    // max-height: 480px;
    // max-width: 480px;
    // border-radius: 99999px;
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
