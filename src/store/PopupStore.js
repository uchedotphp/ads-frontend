import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            activeElementId: 0,
            newPopup: {
                backgroundColor: "#e85e5b",
                children: []
            }
        }
    },
    getters: {
        getActiveTemplateElement(state) {
            const index = state.newPopup.children.findIndex(e => e.id === state.activeElementId);
            return state.newPopup.children[index] ?? null;
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
                color: "#fff",
                label: "Button",
                truncate: false,
                size: "md",
            });
        },

        newText(state) {
            state.newPopup.children.push({
                id: state.newPopup.children.length+1,
                type: "text",
                color: "#ffffff",
                text: "Type your text here",
                size: "md",
            });
        },

        newInputField(state) {
            state.newPopup.children.push({
                id: state.newPopup.children.length+1,
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
            state.newPopup.children = state.newPopup.children.filter(el => {
                return el.id !== id;
            });

            this.commit("reIndex");

            if (state.activeElementId === id) {
                this.commit("changeActiveElementId", 0);
            }
        },

        updateBodyBgColor(state, color) {
            console.log('updating ', color);
            state.newPopup.backgroundColor = color
        },

        updateActiveElementProperty(state, d) {
            // console.log(d.key, d.value);
            this.commit("updateElementProperty", {...d, id: state.activeElementId});
        },

        updateElementProperty(state, data) {
            const index = state.newPopup.children.findIndex(e => e.id === data.id);
            const element = this.state.newPopup.children[index];

            console.log("index >> ", index);
            console.log("element >> ", element);
            console.log({[data['key']]: data['value']});

            const a = state.newPopup.children.splice(index, 1, {
                ...element,
                [data['key']]: data['value'],
            });

            console.log(a);
        },

        reIndex(state) {
            for (let i=0; i<state.newPopup.children.length; i++) {
                state.newPopup.children[i].id = i+1;
            }
        }
    },
});

export default store;
