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

const fetchAlarms = async (dispatch) => {
    try {
        let response = await fetchAll();
        dispatch(loadAlarms(response.data));
    } catch (error) {
        return error;
    }
};

const AlarmService = {
    fetchAlarmByDevice,
    fetchAlarms
};

export default AlarmService;
