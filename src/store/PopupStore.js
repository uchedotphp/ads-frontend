import { createStore } from "vuex";
import apiConnect from "../repository/AdPopupRepository";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      popups: [],
      activeElementId: 0,
      newPopup: {
        backgroundColor: "#e85e5b",
        children: [],
      },
    };
  },

  mutations: {
    setFetchedPopups(state, popups) {
      console.log("setting: ", popups);
      state.popups = popups;
    },
    setSavedTemplate(state, popupElements) {
      state.newPopup = popupElements;
    },
    updatePopups(state, popups) {
      state.popups = popups;
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

      this.commit("reIndex");

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

    reIndex(state) {
      for (let i = 0; i < state.newPopup.children.length; i++) {
        state.newPopup.children[i].id = i + 1;
      }
    },
  },

  actions: {
    async fetchPopups({ commit }) {
      try {
        const { data } = await apiConnect.getPopups();
        commit("setFetchedPopups", data.popups.data);
      } catch (error) {
        console.log("error occured fetching popups", error);
      }
    },
    async saveTemplate({ state, dispatch }) {
      try {
        await apiConnect.createPopup("firstTemp", state.newPopup);
        dispatch("fetchPopups");
      } catch (error) {
        console.log("error saving template", error);
      }
    },
    async deleteTemplate({ dispatch }, id) {
      try {
        await apiConnect.deletePopup(id);
        dispatch("fetchPopups");
      } catch (error) {
        console.log("error deleting template", error);
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
