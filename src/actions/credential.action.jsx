import {createCredential, getCredentials, updateCredential} from "./apis/credential.api";
import {addCredential, editCredential, loadCredentials} from "../reducers/credential.reducer";

const fetchAll = async (dispatch) => {
    try {
        const response = await getCredentials();
        dispatch(loadCredentials(response.data));
    } catch (error) {
        return error;
    }
};

const add = async (dispatch, payload) => {
    try {
        const response = await createCredential(payload);
        dispatch(addCredential(response.data));
    } catch (error) {
        return error.response;
    }
};

const update = async (dispatch, id, payload) => {
    try {
        const response = await updateCredential(id, payload);
        dispatch(editCredential(response.data));
    } catch (error) {
        return error.response;
    }
};

export {
    fetchAll,
    add,
    update
};
