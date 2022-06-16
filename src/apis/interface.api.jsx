import {API_ENDPOINTS} from "../utils/constants";
import axios from "axios";

export async function getInterfacesByDevice(deviceLabel) {
    return await axios.get(`${API_ENDPOINTS.INTERFACE}/devices/label/${deviceLabel}`).then((res) => {
        return res;
    });
}

export async function createInterface(payload) {
    return axios.post(`${API_ENDPOINTS.INTERFACE}`, payload).then((res) => {
        return res;
    });
}

export async function updateInterface(id, payload) {
    return await axios.put(`${API_ENDPOINTS.INTERFACE}/${id}`, payload).then((res) => {
        return res;
    });
}

export async function deleteInterface(id) {
    return await axios.delete(`${API_ENDPOINTS.INTERFACE}/${id}`).then((res) => {
        return res;
    });
}
