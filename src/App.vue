<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 border border-danger">
        <ul class="nav flex-column mt-5">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">My Popups</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Draft</a>
          </li>
        </ul>

        <div class="header-label">Components</div>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link d-flex flex-row align-items-center" href="#" @click.prevent="addStarDivider">
              <div class="me-auto">Star Divider</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
              </svg>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex flex-row align-items-center" href="#" @click.prevent="addButton">
              <div class="me-auto">Button</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
              </svg>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex flex-row align-items-center" href="#" @click.prevent="addText">
              <div class="me-auto">Text</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
              </svg>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex flex-row align-items-center" href="#" @click.prevent="addInputField">
              <div class="me-auto">Input Field</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div class="col border border-danger">
        <ViewPage />
      </div>
      <div class="col-3 border border-info">

      </div>
    </div>
  </div>
</template>

<script>
import ViewPage from './components/ViewPage.vue';
export default {
  components: {
    ViewPage,
  },

  data() {
    return {
      newPopup: {
        background: "#e85e5b",
        children: [

        ]
      }
    }
  },

  methods: {
    addStarDivider() {
      this.newPopup.children.push({
        id: this.newPopup.children.length+1,
        type: "star",
        color: "#a83c3b"
      });
    },

    addButton() {
      this.newPopup.children.push({
        id: this.newPopup.children.length+1,
        type: "button",
        backgroundColor: "#dc3545",
        textColor: "white",
        label: "Button",
        truncate: false,
      });
    },

    addText() {
      this.newPopup.children.push({
        id: this.newPopup.children.length+1,
        type: "text",
        color: "#ffffff",
        label: "Text",
        size: "m",
      });
    },

    addInputField() {
      this.newPopup.children.push({
        id: this.newPopup.children.length+1,
        type: "input",
        color: "#ffffff",
        placeholder: "Type your value",
        size: "m",
      });
    },

  }
};
</script>

<style lang="scss">
.header-label {
  margin-top: 24px;
  margin-bottom: 4px;
  text-transform: uppercase;
  font-size: 12px;
  color: #707790;
}

.nav-item {
  .nav-link {
     font-size: 15px;
     color: #00aaff;
   }
}
</style>
