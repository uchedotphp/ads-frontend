import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: `application/json`,
    "Content-Type": `application/json`,
  },
});

const defaultTemplate = {
  idem: null,
  backgroundColor: "#e85e5b",
  children: [
    {
      id: 1,
      type: "icon",
      color: "#CB3635",
      paddingBottom: 0,
      // paddingBottom: 0,
    },
    {
      id: 2,
      type: "text",
      fontSize: 30,
      text: "All text and elements in this popup should be editable and draggable",
      color: "#FFFFFF",
      paddingBottom: 0.5,
      // paddingBottom: 0,
    },
    {
      id: 3,
      type: "input",
      fontSize: 12,
      placeholder: "E-mail",
      paddingBottom: 2,
      // paddingBottom: 0,
    },
    {
      id: 4,
      type: "button",
      // backgroundColor: "#000000",
      text: "SIGNUP NOW",
      // truncate: false,
      color: "#FFFFFF",
      fontSize: 24,
      paddingBottom: 0,
      // paddingBottom: 0,
    },
    {
      id: 5,
      type: "text",
      fontSize: 12,
      text: "No credit card required. No Surprise",
      color: "#FFFFFF",
      paddingBottom: 5,
      // paddingBottom: 0,
    },
  ],
};

export default {
  defaultTemplate,

  async getTemplates() {
    return http.get(`/popups`);
  },

  async createTemplate(label, data) {
    return http.post(`/popups`, {
      label,
      data,
    });
  },

  async updateTemplate(id, data) {
    return http.put(`/popups/${id}`, {
      data,
    });
  },

  async deleteTemplate(id) {
    return http.delete(`/popups/${id}`);
  },

  async findTemplate(id) {
    return http.get(`/popups/${id}`);
  },

  async serve(idem) {
    return http.get(`/popup/serve/${idem}`);
  },
};
