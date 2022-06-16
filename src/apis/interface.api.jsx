import {API_ENDPOINTS} from "../utils/constants";
import AxiosService from "../services/axios.service";

export async function getInterfacesByDevice(deviceLabel) {
    return await AxiosService.getAxiosClient().get(`${API_ENDPOINTS.INTERFACE}/devices/label/${deviceLabel}`).then((res) => {
        return res;
    });
}

export async function createInterface(payload) {
    return await AxiosService.getAxiosClient().post(`${API_ENDPOINTS.INTERFACE}`, payload).then((res) => {
        return res;
    });
}

export async function updateInterface(id, payload) {
    return await AxiosService.getAxiosClient().put(`${API_ENDPOINTS.INTERFACE}/${id}`, payload).then((res) => {
        return res;
    });
}

export async function deleteInterface(id) {
    return await AxiosService.getAxiosClient().delete(`${API_ENDPOINTS.INTERFACE}/${id}`).then((res) => {
        return res;
    });
}
