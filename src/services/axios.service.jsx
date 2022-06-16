import axios from "axios";
import AuthService from "./auth.service";

const getAxiosClient = () => {
    return axios.create({
        headers: {
            Authorization: `Bearer ${AuthService.getToken()}`
        }
    });
};

const AxiosService = {
    getAxiosClient
};

export default AxiosService;