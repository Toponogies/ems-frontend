import socket from "socket.io-client";
import {SOCKET_ENDPOINT} from "../utils/constants";
import React from "react";
import AuthService from "../services/auth.service";

export const getSocket = () => {
    const token = AuthService.getToken();
    if (token) {
        return socket.connect(SOCKET_ENDPOINT, {
            query: {token}
        });
    }
    return socket.connect(SOCKET_ENDPOINT);
};

export const SocketContext = React.createContext(undefined);