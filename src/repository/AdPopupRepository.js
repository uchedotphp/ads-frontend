import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: `application/json`,
    "Content-Type": `application/json`,
  },
});

export default {
    async getPopups() {
        return http.get(`/popups`);
    },

    async createPopup(label, data) {
        return http.post(`/popups`, {
            label, data,
        });
    },

    async deletePopup(id) {
        return http.post(`/popups/${id}`);
    },

    async findPopup(id) {
        return http.get(`/popups/${id}`);
    }
}