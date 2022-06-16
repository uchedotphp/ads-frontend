import { createStore } from "vuex";
import apiConnect from "../repository/AdPopupRepository";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      pageLoading: false,
      templateHistory: [],
      activeElementId: 0,
      currentTemplateIdem: null,
      newPopup: {
        backgroundColor: "#e85e5b",
        children: [
          {
            id: 1,
            type: "icon",
            // size: "lg",
            // text: "All text and elements in this popup should be editable and draggable",
            // color: "#ffffff",
          },
          {
            id: 2,
            type: "text",
            size: "lg",
            text: "All text and elements in this popup should be editable and draggable",
            color: "#ffffff",
          },
          {
            id: 3,
            type: "input",
            placeholder: "Email",
            color: "#ffffff",
          },
          {
            id: 4,
            type: "button",
            backgroundColor: "#000000",
            label: "SIGNUP NOW",
            size: "md",
            truncate: false,
            color: "#ffffff",
          },
          {
            id: 5,
            type: "text",
            size: "sm",
            text: "No credit card required. No Surprise",
            color: "#ffffff",
          },
        ],
      },
    };
  },

  mutations: {
    setStates(state, data) {
      Object.keys(data).map((key) => {
        state[key] = data[key];
      });
    },
    newStarDivider(state) {
      state.newPopup.children.push({
        id: state.newPopup.children.length + 1,
        type: "star",
        color: "#a83c3b",
      });
    },

    newButton(state) {
      state.newPopup.children.push({
        id: state.newPopup.children.length + 1,
        type: "button",
        backgroundColor: "#dc3545",
        color: "#fff",
        label: "Button",
        truncate: false,
        size: "md",
      });
    },

    newText(state) {
      state.newPopup.children.push({
        id: state.newPopup.children.length + 1,
        type: "text",
        color: "#ffffff",
        text: "Type your text here",
        size: "md",
      });
    },

    newInputField(state) {
      state.newPopup.children.push({
        id: state.newPopup.children.length + 1,
        type: "input",
        backgroundColor: "#fff",
        color: "#303040",
        placeholder: "Type your value",
      });
    },

    changeActiveElementId(state, id) {
      state.activeElementId = id;
    },

    removeTemplateElement(state, id) {
      state.newPopup.children = state.newPopup.children.filter((el) => {
        return el.id !== id;
      });

      // this.commit("reIndex");

      if (state.activeElementId === id) {
        this.commit("changeActiveElementId", 0);
      }
    },

    updateBodyBgColor(state, color) {
      state.newPopup.backgroundColor = color;
    },

    updateActiveElementProperty(state, d) {
      this.commit("updateElementProperty", { ...d, id: state.activeElementId });
    },

    updateElementProperty(state, data) {
      const index = state.newPopup.children.findIndex((e) => e.id === data.id);
      const element = this.state.newPopup.children[index];

      state.newPopup.children.splice(index, 1, {
        ...element,
        [data["key"]]: data["value"],
      });
    },

    // reIndex(state) {
    //   for (let i = 0; i < state.newPopup.children.length; i++) {
    //     state.newPopup.children[i].id = i + 1;
    //   }
    // },

    swapElements(state, { elementIdToBeMoved, targetElementId }) {
      const index = state.newPopup.children.findIndex(
        (e) => e.id === elementIdToBeMoved
      );
      const targetElementIndex = state.newPopup.children.findIndex(
        (e) => e.id === targetElementId
      );
      const element = state.newPopup.children.splice(index, 1)[0];
      state.newPopup.children.splice(targetElementIndex, 0, element);
    },
  },

  actions: {
    async fetchSavedTemplates({ commit }) {
      try {
        const { data } = await apiConnect.getPopups();
        commit("setStates", {
          popups: data.popups.data,
        });
      } catch (error) {
        console.log("error occured fetching popups", error);
      }
    },
    async saveTemplate({ state, dispatch }) {
      try {
        await apiConnect.createPopup("firstTemp", state.newPopup);
        await dispatch("fetchSavedTemplates");
      } catch (error) {
        console.log("error saving template", error);
      }
    },
    async deleteTemplate({ dispatch }, id) {
      try {
        await apiConnect.deletePopup(id);
        await dispatch("fetchSavedTemplates");
      } catch (error) {
        console.log("error deleting template", error);
      }
    },
    async fetchTemplate({}, idem) {
      try {
        const { data } = await apiConnect.serve(idem);
        return data.popup.data;
      } catch (error) {
        console.log("error fetching");
      }
    },
  },

  getters: {
    getActiveTemplateElement(state) {
      const index = state.newPopup.children.findIndex(
        (e) => e.id === state.activeElementId
      );
      return state.newPopup.children[index] ?? null;
    },
  },
});

export default store;
