import {getPortsByDevice} from "./apis/port.api";
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

export {
    fetchPortByDevice
};
