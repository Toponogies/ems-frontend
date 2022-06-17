import {fetchAll, getPortsByDevice} from "../apis/port.api";
import {loadPorts} from "../reducers/port.reducer";

const fetchPortByDevice = async (dispatch, deviceLabel) => {
    if (deviceLabel === "") return;
    try {
        let response = await getPortsByDevice(deviceLabel);
        dispatch(loadPorts(response.data));
    } catch (error) {
        return error;
    }
};

const fetchPorts = async () => {
    try {
        let response = await fetchAll();
        return response.data;
    } catch (error) {
        return error;
    }
};

const PortService = {
    fetchPortByDevice,
    fetchPorts
};

export default PortService;
