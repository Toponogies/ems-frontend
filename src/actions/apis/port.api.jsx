import {API_ENDPOINTS} from "../../utils/constants";
import axios from "axios";

export async function getPortsByDevice(deviceLabel) {
    return await axios.get(`${API_ENDPOINTS.PORT}/devices/label/${deviceLabel}`).then((res) => {
        return res;
    });
}
