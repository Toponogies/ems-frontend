import {API_ENDPOINTS} from "../../utils/constants";
import axios from "axios";

export async function getCredentials() {
    return await axios.get(`${API_ENDPOINTS.CREDENTIAL}`).then((res) => {
        return res;
    });
}

export async function createCredential(payload) {
    return axios.post(`${API_ENDPOINTS.CREDENTIAL}`, payload).then((res) => {
        return res;
    });
}

export async function updateCredential(id, payload) {
    return await axios.put(`${API_ENDPOINTS.CREDENTIAL}/${id}`, payload).then((res) => {
        return res;
    });
}

export async function deleteCredential(id) {
    return await axios.delete(`${API_ENDPOINTS.CREDENTIAL}/${id}`).then((res) => {
        return res;
    });
}
