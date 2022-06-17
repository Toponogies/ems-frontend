import {API_ENDPOINTS} from "../utils/constants";
import AxiosService from "../services/axios.service";

export async function getCredentials() {
    return await AxiosService.getAxiosClient().get(`${API_ENDPOINTS.CREDENTIAL}`).then((res) => {
        return res;
    });
}

export async function createCredential(payload) {
    return AxiosService.getAxiosClient().post(`${API_ENDPOINTS.CREDENTIAL}`, payload).then((res) => {
        return res;
    });
}

export async function updateCredential(id, payload) {
    return await AxiosService.getAxiosClient().put(`${API_ENDPOINTS.CREDENTIAL}/${id}`, payload).then((res) => {
        return res;
    });
}

export async function deleteCredential(id) {
    return await AxiosService.getAxiosClient().delete(`${API_ENDPOINTS.CREDENTIAL}/${id}`).then((res) => {
        return res;
    });
}
