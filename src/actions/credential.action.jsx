import {createCredential, getCredentials} from "./apis/credential.api";
import {addCredential, loadCredentials} from "../reducers/credential.reducer";

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

export {
    fetchAll,
    add
};
