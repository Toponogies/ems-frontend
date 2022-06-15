import {
    createInterface,
    deleteInterface,
    getInterfacesByDevice,
    updateInterface
} from "./apis/interface.api";
import {addInterface, editInterface, loadInterfaces, removeInterface} from "../reducers/interface.reducer";

const fetchInterfaceByDevice = async (dispatch, deviceLabel) => {
    if (deviceLabel === "") return;

    try {
        let response = await getInterfacesByDevice(deviceLabel);
        dispatch(loadInterfaces(response.data));
    } catch (error) {
        return error;
    }
};

const add = async (dispatch, payload) => {
    try {
        const response = await createInterface(payload);
        dispatch(addInterface(response.data));
    } catch (error) {
        return error.response;
    }
};

const update = async (dispatch, id, payload) => {
    try {
        const response = await updateInterface(id, payload);
        response.data.devices = payload.devices;
        dispatch(editInterface(response.data));
    } catch (error) {
        return error.response;
    }
};

const remove = async (dispatch, id) => {
    try {
        await deleteInterface(id);
        dispatch(removeInterface(id));
    } catch (error) {
        return error.response;
    }
};

export {
    fetchInterfaceByDevice,
    add,
    update,
    remove
};
