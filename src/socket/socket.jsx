import {io} from "socket.io-client";
import {SOCKET_ENDPOINT} from "../utils/constants";
import React from "react";

export const socket = () => {
    // const token = AuthService.getToken();
    return io(SOCKET_ENDPOINT, {
        reconnectionDelayMax: 10000
    });

    // socket.on("connect", () => {
    //     console.log("Connected to socket")
    // })
    // return io(SOCKET_ENDPOINT, {
    //     reconnectionDelayMax: 10000,
    //     auth: {
    //         token: token
    //     }
    // });
};


