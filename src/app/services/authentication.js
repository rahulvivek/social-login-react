import axios from 'axios';

const base_url = "http://localhost:8000/"

axios.defaults.headers.post["Content-Type"] = "application/json";

export const facebookLoginAPI = (payload) => {
    return axios.post(`${base_url}social_auth/facebook/`, payload)
}