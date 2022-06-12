import axios from "axios";

const http = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        "Accept": `application/json`,
        "Content-Type": `application/json`,
    }
});

export default {
    async getPopups() {
        return axios.get(`api/popups`);
    },

    async createPopup(label, data) {
        return axios.post(`api/popups`, {
            label, data,
        });
    },

    async deletePopup(id) {
        return axios.post(`api/popups/${id}`);
    },

    async findPopup(id) {
        return axios.get(`api/popups/${id}`);
    }
}