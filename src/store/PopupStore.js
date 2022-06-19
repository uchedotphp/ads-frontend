import { createStore } from "vuex";
import apiConnect from "../apiService/AdPopupRepository";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      pageLoading: false,
      templateHistory: [],
      activeElementId: 0,
      newPopup: JSON.parse(JSON.stringify(apiConnect.defaultTemplate)),
    };
  },

  mutations: {
    setStates(state, data) {
      Object.keys(data).map((key) => {
        state[key] = data[key];
      });
    },

    changeActiveElementId(state, id) {
      state.activeElementId = id;
    },

    // removeTemplateElement(state, id) {
    //   state.newPopup.children = state.newPopup.children.filter((el) => {
    //     return el.id !== id;
    //   });

    //   // this.commit("reIndex");

    //   if (state.activeElementId === id) {
    //     this.commit("changeActiveElementId", 0);
    //   }
    // },

    updateActiveElementProperty(state, d) {
      this.commit("updateElementProperty", { ...d, id: state.activeElementId });
    },

    updateElementProperty(state, data) {
      const index = state.newPopup.children.findIndex((e) => e.id === data.id);
      state.newPopup.children.splice(index, 1, data);
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

    resetCanvas(state) {
      this.commit("changeActiveElementId", 0);
      state.newPopup = JSON.parse(JSON.stringify(apiConnect.defaultTemplate));
    }
  },

  actions: {
    async fetchSavedTemplates({ commit }) {
      try {
        const { data } = await apiConnect.getTemplates();
        commit("setStates", {
          templateHistory: data.popups.data,
        });
      } catch (error) {
        console.log("error occured fetching popups", error);
      }
    },
    async saveTemplate({ state, commit, dispatch }) {
      try {
        const { data } = await apiConnect.createTemplate(
          "poptinTemplate",
          state.newPopup
        );
        const savedTemplate = data.popup;
        commit("setStates", {
          newPopup: {
            idem: savedTemplate.idem,
            id: savedTemplate.id,
            created_at: savedTemplate.created_at,
            updated_at: savedTemplate.updated_at,
            children: savedTemplate.data.children,
            backgroundColor: savedTemplate.data.backgroundColor,
          },
        });
        await dispatch("fetchSavedTemplates");
      } catch (error) {
        console.log("error saving template", error);
      }
    },
    async updateTemplate({ state }, id) {
      try {
        const newPopup = {
          children: state.newPopup.children,
          backgroundColor: state.newPopup.backgroundColor,
        };
        const res = await apiConnect.updateTemplate(id, newPopup);
        console.log("response updating: ", res);
      } catch (error) {
        console.log("error updating template", error);
      }
    },
    async deleteTemplate({ dispatch }, id) {
      try {
        await apiConnect.deleteTemplate(id);
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
