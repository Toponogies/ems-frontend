import {createCredential, deleteCredential, getCredentials, updateCredential} from "../apis/credential.api";
import {addCredential, editCredential, loadCredentials, removeCredential} from "../reducers/credential.reducer";

const fetchAll = async (dispatch) => {
    try {
        let response = await getCredentials();
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
        response.data.devices = payload.devices;
        dispatch(editCredential(response.data));
    } catch (error) {
        return error.response;
    }
};

const remove = async (dispatch, id) => {
    try {
        await deleteCredential(id);
        dispatch(removeCredential(id));
    } catch (error) {
        return error.response;
    }
};

const CredentialService = {
    fetchAll,
    add,
    update,
    remove
}

export default CredentialService;
