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
      <template #title>
        <h5 class="fw-semibold">
          Saved templates
        </h5>
      </template>
      <SavedTemplates />
    </ModalContent>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle";
import ModalContent from "./ModalContent.vue";
import SavedTemplates from "./SavedTemplates.vue";

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
    SavedTemplates,
  },
  methods: {
    ...mapMutations([
      "newStarDivider",
      "newButton",
      "newText",
      "newInputField"
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
