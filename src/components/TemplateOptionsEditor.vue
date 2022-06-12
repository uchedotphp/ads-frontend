<template>
  <div>
    <div class="edit-text-options" v-if="getActiveTemplateElement && getActiveTemplateElement.type === 'text'">
      template editor for text
    </div>
    <div class="edit-input-options" v-if="getActiveTemplateElement && getActiveTemplateElement.type === 'input'">
      template editor for input
    </div>
    <div class="edit-button-options" v-if="getActiveTemplateElement && getActiveTemplateElement.type === 'button'">
      template editor for button
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from "vuex";

export default {
  name: "TemplateOptionsEditor",

  props: {},

  computed: {
    ...mapState(["activeElementId"]),

    ...mapGetters({
      getActiveTemplateElement: "getActiveTemplateElement",
    }),
  },

  methods: {}
}
</script>

<style scoped>

</style>