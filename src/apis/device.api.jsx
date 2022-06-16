import {API_ENDPOINTS} from "../utils/constants";
import AxiosService from "../services/axios.service";

export async function getDevices() {
    return await AxiosService.getAxiosClient().get(`${API_ENDPOINTS.DEVICE}`).then((res) => {
        return res;
    });
}

export async function createDevice(payload) {
    return await AxiosService.getAxiosClient().post(`${API_ENDPOINTS.DEVICE}`, payload).then((res) => {
        return res;
    });
}

export async function updateDevice(id, payload) {
    return await AxiosService.getAxiosClient().put(`${API_ENDPOINTS.DEVICE}/${id}`, payload).then((res) => {
        return res;
    });
}

export async function deleteDevice(id) {
    return await AxiosService.getAxiosClient().delete(`${API_ENDPOINTS.DEVICE}/${id}`).then((res) => {
        return res;
    });
}

export async function resyncDevices(payload) {
    return await AxiosService.getAxiosClient().post(`${API_ENDPOINTS.RESYNC}`, payload).then((res) => {
        return res;
    });
}

export async function executeCommand(id, payload) {
    return await AxiosService.getAxiosClient().post(`${API_ENDPOINTS.DEVICE}/${id}/generic-command`, payload).then((res) => {
        return res;
    });
}

export async function downloadConfiguration(id) {
    return await AxiosService.getAxiosClient().get(`${API_ENDPOINTS.DEVICE}/${id}/configuration`, {
        responseType: "blob"
    }).then((res) => {
        return res;
    });
}