import { io } from "socket.io-client";
import {SOCKET_ENDPOINT} from "../utils/constants";
import React from "react";
import AuthService from "../services/auth.service";

export const getSocket = () => {
    const token = AuthService.getToken();
    if (token) {
        return io(SOCKET_ENDPOINT, {
            reconnectionDelayMax: 10000,
            auth: {
                token: token
            }
        })
    }
    return io(SOCKET_ENDPOINT, {
        reconnectionDelayMax: 10000,
    })
};

export const SocketContext = React.createContext(undefined);