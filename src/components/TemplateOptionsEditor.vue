<template>
  <div>

    <!--  Text  -->
    <div v-if="getActiveTemplateElement" class="edit-text-options">

      <div class="mt-5" v-if="getActiveTemplateElement.type === 'text'">
        <div class="header-label">Content</div>
        <textarea id="exampleFormControlTextarea1" class="form-control" rows="3"
                  v-model="templateText" @input="updateElementText"></textarea>
      </div>

      <div class="mt-5" v-if="getActiveTemplateElement.type === 'text'">
        <div class="header-label">Size</div>
        <div aria-label="Basic outlined example" class="btn-group" role="group">
          <button @click.prevent="updateElementSize('sm')" class="btn btn-outline-primary" type="button">Small</button>
          <button @click.prevent="updateElementSize('md')" class="btn btn-outline-primary" type="button">Medium</button>
          <button @click.prevent="updateElementSize('lg')" class="btn btn-outline-primary" type="button">Large</button>
        </div>
      </div>

      <div class="mt-5" v-if="getActiveTemplateElement.type === 'input'">
        <div class="header-label">Placeholder</div>
        <input id="exampleFormControlTextarea1" v-model="getActiveTemplateElement.placeholder"
               class="form-control" @input="updateElementPlaceholder" />
      </div>

      <div class="mt-5" v-if="getActiveTemplateElement.type === 'button'">
        <div class="header-label">Label</div>
        <input id="exampleFormControlTextarea1" v-model="getActiveTemplateElement.label"
               class="form-control" @input="updateElementLabel" />
      </div>

      <div class="mt-5" v-if="getActiveTemplateElement.type === 'button' || getActiveTemplateElement.type === 'text'">
        <div class="header-label">Text Color</div>
        <ul class="list-group">
          <li class="list-group-item button" @click="changeTextColor('#ff0000')">
            <div class="row align-items-center">
              <div class="col-1 me-2">
                <div style="height: 12px; width: 24px; border-radius: 4px; background-color: #ff0000;"></div>
              </div>
              <div class="col-10">Red</div>
            </div>
          </li>
          <li class="list-group-item button" @click="changeTextColor('#00ff00')">
            <div class="row align-items-center">
              <div class="col-1 me-2">
                <div style="height: 12px; width: 24px; border-radius: 4px; background-color: #00ff00;"></div>
              </div>
              <div class="col-10">Green</div>
            </div>
          </li>
          <li class="list-group-item button" @click="changeTextColor('#0000ff')">
            <div class="row align-items-center">
              <div class="col-1 me-2">
                <div style="height: 12px; width: 24px; border-radius: 4px; background-color: #0000ff;"></div>
              </div>
              <div class="col-10">Blue</div>
            </div>
          </li>
          <li class="list-group-item button" @click="changeTextColor('#303040')">
            <div class="row align-items-center">
              <div class="col-1 me-2">
                <div style="height: 12px; width: 24px; border-radius: 4px; background-color: #303040;"></div>
              </div>
              <div class="col-10">Dark</div>
            </div>
          </li>
          <li class="list-group-item button" @click="changeTextColor('#cc9900')">
            <div class="row align-items-center">
              <div class="col-1 me-2">
                <div style="height: 12px; width: 24px; border-radius: 4px; background-color: #cc9900;"></div>
              </div>
              <div class="col-10">Orange</div>
            </div>
          </li>
          <li class="list-group-item button" @click="changeTextColor('#fff')">
            <div class="row align-items-center">
              <div class="col-1 me-2">
                <div style="height: 12px; width: 24px; border-radius: 4px; background-color: #fff; border: 1px solid #808080;"></div>
              </div>
              <div class="col-10">White</div>
            </div>
          </li>
        </ul>
      </div>

      <div class="mt-5" v-if="getActiveTemplateElement.type === 'button'">
        <div class="header-label">Background Color</div>
        <ul class="list-group">
          <li class="list-group-item button" @click="changeBackgroundColor('#ff0000')">
            <div class="row align-items-center">
              <div class="col-1 me-2">
                <div style="height: 12px; width: 24px; border-radius: 4px; background-color: #ff0000;"></div>
              </div>
              <div class="col-10">Red</div>
            </div>
          </li>
          <li class="list-group-item button" @click="changeBackgroundColor('#00ff00')">
            <div class="row align-items-center">
              <div class="col-1 me-2">
                <div style="height: 12px; width: 24px; border-radius: 4px; background-color: #00ff00;"></div>
              </div>
              <div class="col-10">Green</div>
            </div>
          </li>
          <li class="list-group-item button" @click="changeBackgroundColor('#0000ff')">
            <div class="row align-items-center">
              <div class="col-1 me-2">
                <div style="height: 12px; width: 24px; border-radius: 4px; background-color: #0000ff;"></div>
              </div>
              <div class="col-10">Blue</div>
            </div>
          </li>
          <li class="list-group-item button" @click="changeBackgroundColor('#303040')">
            <div class="row align-items-center">
              <div class="col-1 me-2">
                <div style="height: 12px; width: 24px; border-radius: 4px; background-color: #303040;"></div>
              </div>
              <div class="col-10">Dark</div>
            </div>
          </li>
          <li class="list-group-item button" @click="changeBackgroundColor('#cc9900')">
            <div class="row align-items-center">
              <div class="col-1 me-2">
                <div style="height: 12px; width: 24px; border-radius: 4px; background-color: #cc9900;"></div>
              </div>
              <div class="col-10">Orange</div>
            </div>
          </li>
          <li class="list-group-item button" @click="changeBackgroundColor('#fff')">
            <div class="row align-items-center">
              <div class="col-1 me-2">
                <div style="height: 12px; width: 24px; border-radius: 4px; background-color: #fff; border: 1px solid #808080;"></div>
              </div>
              <div class="col-10">White</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "TemplateOptionsEditor",

  props: {},

  computed: {
    ...mapState(["activeElementId"]),

    ...mapGetters({
      getActiveTemplateElement: "getActiveTemplateElement",
    }),
    templateText: {
      set(val){
        console.log(val)
        this.updateActiveElementProperty({key: "text", value: val});
      },
      get(){
        return this.getActiveTemplateElement.text;
      }
    }
  },

  methods: {
    ...mapMutations(["updateActiveElementProperty"]),

    updateElementPlaceholder(e) {
      this.updateActiveElementProperty({key: "placeholder", value: e.target.value});
    },

    updateElementLabel(e) {
      this.updateActiveElementProperty({key: "label", value: e.target.value});
    },

    updateElementText(e) {
      this.updateActiveElementProperty({key: "text", value: e.target.value});
    },

    updateElementSize(size) {
      this.updateActiveElementProperty({key: "size", value: size});
    },

    changeTextColor(color) {
      this.updateActiveElementProperty({key: "color", value: color});
    },

    changeBackgroundColor(color) {
      this.updateActiveElementProperty({key: "backgroundColor", value: color});
    }
  }
}
</script>

<style lang="scss" scoped>
.list-group-item {
  &.button {
    cursor: pointer;
  }
}
</style>