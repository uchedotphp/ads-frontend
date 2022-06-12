import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            activeElementId: 0,
            newPopup: {
                background: "#e85e5b",
                children: []
            }
        }
    },
    getters: {
        getActiveTemplateElement(state) {
            const filteredChildren = state.newPopup.children.filter(child => {
                return child.id === state.activeElementId;
            });

            return filteredChildren.length > 0 ? filteredChildren[0] : null;
        }
    },
    mutations: {
        newStarDivider(state) {
            state.newPopup.children.push({
                id: state.newPopup.children.length+1,
                type: "star",
                color: "#a83c3b"
            });
        },

        newButton(state) {
            state.newPopup.children.push({
                id: state.newPopup.children.length+1,
                type: "button",
                backgroundColor: "#dc3545",
                textColor: "white",
                label: "Button",
                truncate: false,
            });
        },

        newText(state) {
            state.newPopup.children.push({
                id: state.newPopup.children.length+1,
                type: "text",
                color: "#ffffff",
                label: "Type your text here",
                size: "m",
            });
        },

        newInputField(state) {
            state.newPopup.children.push({
                id: state.newPopup.children.length+1,
                type: "input",
                color: "#ffffff",
                placeholder: "Type your value",
                size: "m",
            });
        },

        changeActiveElementId(state, id) {
            state.activeElementId = id;
        },

        removeTemplateElement(state, id) {
            state.newPopup.children = state.newPopup.children.filter(el => {
                return el.id !== id;
            });

            this.commit("reIndex");

            if (state.activeElementId === id) {
                this.changeActiveElementId(0);
            }
        },

        reIndex(state) {
            for (let i=0; i<state.newPopup.children.length; i++) {
                state.newPopup.children[i].id = i+1;
            }
        }
    },
});

export default store;