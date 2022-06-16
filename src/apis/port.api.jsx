import {API_ENDPOINTS} from "../utils/constants";
import AxiosService from "../services/axios.service";

export async function getPortsByDevice(deviceLabel) {
    return await AxiosService.getAxiosClient().get(`${API_ENDPOINTS.PORT}/devices/label/${deviceLabel}`).then((res) => {
        return res;
    });
}

export async function fetchAll() {
    return await AxiosService.getAxiosClient().get(`${API_ENDPOINTS.PORT}`).then((res) => {
        return res;
    });
}
