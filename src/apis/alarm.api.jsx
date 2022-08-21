import {API_ENDPOINTS} from "../utils/constants";
import AxiosService from "../services/axios.service";

export async function getAlarmsByDevice(deviceLabel) {
    return await AxiosService.getAxiosClient().get(`${API_ENDPOINTS.ALARM}/devices/label/${deviceLabel}`).then((res) => {
        return res;
    });
}

export async function fetchAll() {
    return await AxiosService.getAxiosClient().get(`${API_ENDPOINTS.ALARM}`).then((res) => {
        return res;
    });
}
