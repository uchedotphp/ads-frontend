<template>
  <div class="panel px-4">
    <ul class="nav main-nav">
      <li class="nav-item">
        <a
          @click="showSavedTemplates"
          class="nav-link pe-2"
          aria-current="page"
          href="#"
          >My Popups</a
        >
        <i class="bi bi-cloud-download"></i>
      </li>
      <li class="nav-item">
        <a class="nav-link pe-2" href="#">Draft</a>
        <i class="bi bi-pencil-square"></i>
      </li>
    </ul>
    <p class="header-label">Elements</p>
    <ul class="nav elements">
      <li v-for="(element, index) in elements" :key="index" class="nav-item">
        <a
          class="nav-link d-flex flex-row align-items-center"
          href="#"
          @click.prevent="action(element)"
        >
          <div class="me-auto">{{ element.title }}</div>
        </a>
      </li>
    </ul>

    <!-- modal -->
    <ModalContent id="modalContent">
      <template #title> Popup lists </template>
      <div class="row">
        <div class="col">Id</div>
        <div class="col text-center">Date</div>
        <div class="col text-end">Action</div>
      </div>
      <ul v-if="popups.length" class="list-group row">
        <button
          type="button"
          v-for="popup in popups"
          :key="popup"
          class="list-group-item d-flex justify-content-between align-items-center col list-group-item-action"
        >
          <span class="text-bold text-primary">
            {{ popup.idem }}
          </span>
          <span class="text-center">
            {{ new Date(popup.created_at).toLocaleString() }}
          </span>
          <span>
            <i
              @click="useTemplate(popup.data, popup.idem)"
              class="bi bi-download text-primary"
              role="button"
            ></i>
            <i
              @click="deleteTemp(popup.id)"
              class="bi bi-trash ms-3 text-danger"
              role="button"
            ></i>
          </span>
        </button>
      </ul>
      <p v-else class="text-center">No save templates</p>
    </ModalContent>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle";
import ModalContent from "./ModalContent.vue";

export default {
  name: "LeftPanel",
  data() {
    return {
      elements: [
        {
          title: "Button",
        },
        {
          title: "Input Field",
        },
        {
          title: "Text Label",
        },
        {
          title: "Star Divider",
        },
      ],
    };
  },
  components: {
    ModalContent,
  },
  computed: {
    ...mapState(["popups"]),
  },
  methods: {
    ...mapActions(["deleteTemplate"]),
    ...mapMutations([
      "newStarDivider",
      "newButton",
      "newText",
      "newInputField",
      "setSavedTemplate",
      "setStates"
    ]),
    action(elementTitle) {
      const element = elementTitle.title.toLowerCase();
      switch (element) {
        case "button":
          this.newButton();
          break;

        case "input field":
          this.newInputField();
          break;

        case "text label":
          this.newText();
          break;

        case "star divider":
          this.newStarDivider();
          break;

        default:
          break;
      }
    },
    showSavedTemplates() {
      new Modal(document.getElementById("modalContent")).show();
    },
    useTemplate(template, idem) {
      const theTemplate = this.popups.find(t => t.idem === idem)
      this.setStates({
        currentTemplateIdem: theTemplate.idem
      })
      this.setSavedTemplate(template);
    },
    deleteTemp(id) {
      this.deleteTemplate(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.panel {
  height: 100%;
  background-color: #f2f2f5;
  padding-inline: 30px;

  @media (max-width: 767.98px) {
    height: auto;
    padding-inline: 0;
  }

  .header-label {
    margin-top: 24px;
    margin-bottom: 4px;
    text-transform: uppercase;
    font-size: 12px;
    color: #707790;
  }

  .main-nav {
    margin-top: 3rem;
    flex-direction: column;

    @media (max-width: 767.98px) {
      margin-top: 1rem;
      flex-direction: row;
      justify-content: space-between;
    }

    .nav-item {
      display: flex;
      align-items: center;
      .nav-link {
        padding-inline: 0;
      }
      :hover {
        background: none;
      }
    }
  }

  .elements {
    display: flex;
    flex-direction: column;

    @media (max-width: 767.98px) {
      margin-inline: -12px;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .nav-item {
      .nav-link {
        @media (max-width: 767.98px) {
          padding-inline: 8px;
          margin-right: 10px;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
