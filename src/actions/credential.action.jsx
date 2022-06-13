import {getCredentials} from "./apis/credential.api";
import {loadCredentials} from "../reducers/credential.reducer";

const fetchAll = async(dispatch) => {
    try {
        const response = await getCredentials();
        dispatch(loadCredentials(response.data));
    } catch (error) {
        console.log(error);
    }
}
export {
    fetchAll
}
