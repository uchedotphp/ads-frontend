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
};

export default {
  defaultTemplate, //default template

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
