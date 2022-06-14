import {createDevice, deleteDevice, getDevices, updateDevice} from "./apis/device.api";
import {addDevice, editDevice, loadDevices, removeDevice} from "../reducers/device.reducer";

const fetchAll = async (dispatch) => {
    try {
        let response = await getDevices();
        dispatch(loadDevices(response.data));
    } catch (error) {
        return error;
    }
};

const add = async (dispatch, payload) => {
    try {
        const response = await createDevice(payload);
        dispatch(addDevice(response.data));
    } catch (error) {
        return error.response;
    }
};

const update = async (dispatch, id, payload) => {
    try {
        const response = await updateDevice(id, payload);
        response.data.devices = payload.devices;
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

export {
    fetchAll,
    add,
    update,
    remove
};
