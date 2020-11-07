import axios from "axios";

const base_url = "http://localhost:8000/";

axios.defaults.headers.post["Content-Type"] = "application/json";

const client = axios.create();

client.interceptors.request.use((config) => {
    console.info("Token Intercepted");
    const token = localStorage.getItem("token") || null;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const getAllFacebookPagesAPI = (payload) => {
    return client.post(`${base_url}facebook_manager/get_pages/`, payload);
};

export const updateFacebookPagesAPI = (payload) => {
    return client.post(`${base_url}facebook_manager/update_page/`, payload);
}
