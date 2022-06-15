import {API_ENDPOINTS} from "../../utils/constants";
import axios from "axios";

export async function getDevices() {
    return await axios.get(`${API_ENDPOINTS.DEVICE}`).then((res) => {
        return res;
    });
}

export async function createDevice(payload) {
    return axios.post(`${API_ENDPOINTS.DEVICE}`, payload).then((res) => {
        return res;
    });
}

export async function updateDevice(id, payload) {
    return await axios.put(`${API_ENDPOINTS.DEVICE}/${id}`, payload).then((res) => {
        return res;
    });
}

export async function deleteDevice(id) {
    return await axios.delete(`${API_ENDPOINTS.DEVICE}/${id}`).then((res) => {
        return res;
    });
}

export async function resyncDevices(payload) {
    return await axios.post(`${API_ENDPOINTS.RESYNC}`, payload).then((res) => {
        return res;
    });
}
