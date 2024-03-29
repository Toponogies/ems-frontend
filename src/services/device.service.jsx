import {
    createDevice,
    deleteDevice,
    downloadConfiguration,
    executeCommand,
    getDeviceByLabel,
    getDevices,
    importDevices,
    resyncDevices,
    updateDevice
} from "../apis/device.api";
import {addDevice, editDevice, loadDevices, removeDevice} from "../reducers/device.reducer";

const fetchAll = async (dispatch) => {
    try {
        let response = await getDevices();
        dispatch(loadDevices(response.data));
    } catch (error) {
        return error;
    }
};

const fetchByLabel = async (dispatch, label) => {
    try {
        let response = await getDeviceByLabel(label);
        dispatch(editDevice(response.data));
    } catch (error) {
        return error;
    }
};

const add = async (dispatch, payload) => {
    try {
        const response = await createDevice(payload);
        response.data.credential = payload.credential;
        dispatch(addDevice(response.data));
    } catch (error) {
        return error.response;
    }
};

const batchAdd = async (dispatch, payload) => {
    try {
        await importDevices(payload);
        let response = await getDevices();
        dispatch(loadDevices(response.data));
    } catch (error) {
        return error.response;
    }
};

const update = async (dispatch, id, payload) => {
    try {
        const response = await updateDevice(id, payload);
        response.data.credential = payload.credential;
        dispatch(editDevice(response.data));
    } catch (error) {
        return error.response;
    }
};

const remove = async (dispatch, id) => {
    try {
        await deleteDevice(id);
        dispatch(removeDevice(id));
    } catch (error) {
        return error.response;
    }
};

const resync = async (dispatch, payload) => {
    try {
        await resyncDevices(payload);
        let response = await getDevices();
        // TODO: Load interfaces and ports too
        dispatch(loadDevices(response.data));
    } catch (error) {
        return error.response;
    }
};

const execute = async (dispatch, id, payload) => {
    try {
        return await executeCommand(id, payload);
    } catch (error) {
        return error.response;
    }
};

const download = async (payload) => {
    try {
        await downloadConfiguration(payload);
    } catch (error) {
        return error.response;
    }
};

const DeviceService = {
    fetchAll,
    fetchByLabel,
    add,
    update,
    remove,
    resync,
    execute,
    download,
    batchAdd
};

export default DeviceService;