import {fetchAll, getAlarmsByDevice} from "../apis/alarm.api";
import {loadAlarms} from "../reducers/alarm.reducer";

const fetchAlarmByDevice = async (dispatch, deviceLabel) => {
    if (deviceLabel === "") return;
    try {
        let response = await getAlarmsByDevice(deviceLabel);
        dispatch(loadAlarms(response.data));
    } catch (error) {
        return error;
    }
};

const fetchAlarms = async () => {
    try {
        let response = await fetchAll();
        return response.data;
    } catch (error) {
        return error;
    }
};

const AlarmService = {
    fetchAlarmByDevice,
};

export default AlarmService;
