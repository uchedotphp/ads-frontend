<template>
  <div>
    <div class="edit-text-options" v-if="getActiveTemplateElement && getActiveTemplateElement.type === 'text'">

      <div class="mt-5">
        <div class="header-label">Content</div>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <div class="mt-5">
        <div class="header-label">Text Size</div>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary">Small</button>
          <button type="button" class="btn btn-outline-primary">Medium</button>
          <button type="button" class="btn btn-outline-primary">Large</button>
        </div>
      </div>

      <div class="mt-5">
        <div class="header-label">Text Color</div>
        <ul class="list-group">
          <li class="list-group-item">Red</li>
          <li class="list-group-item">Green</li>
          <li class="list-group-item">Blue</li>
          <li class="list-group-item">Dark</li>
          <li class="list-group-item">Orange</li>
        </ul>
      </div>
    </div>
    <div class="edit-input-options" v-if="getActiveTemplateElement && getActiveTemplateElement.type === 'input'">
      <div class="mt-5">
        <div class="header-label">Placeholder</div>
        <input class="form-control" id="exampleFormControlTextarea1" />
      </div>
    </div>
    <div class="edit-button-options" v-if="getActiveTemplateElement && getActiveTemplateElement.type === 'button'">

      <div class="mt-5">
        <div class="header-label">Label</div>
        <input class="form-control" id="exampleFormControlTextarea1" />
      </div>

      <div class="mt-5">
        <div class="header-label">Text Color</div>
        <ul class="list-group">
          <li class="list-group-item">Red</li>
          <li class="list-group-item">Green</li>
          <li class="list-group-item">Blue</li>
          <li class="list-group-item">Dark</li>
          <li class="list-group-item">Orange</li>
        </ul>
    </div>

      <div class="mt-5">
        <div class="header-label">Background Color</div>
        <ul class="list-group">
          <li class="list-group-item">Red</li>
          <li class="list-group-item">Green</li>
          <li class="list-group-item">Blue</li>
          <li class="list-group-item">Dark</li>
          <li class="list-group-item">Orange</li>
        </ul>
      </div>
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