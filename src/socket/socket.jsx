import {SOCKET_ENDPOINT} from "../utils/constants";
import React from "react";
import {Client} from "@stomp/stompjs";

const onDisconnected = () => {
    console.log("Disconnected!!");
};

const onConnected = () => {
    console.log("Connected!!");
};

const webSocketClient = () => {
    let client = new Client({
        brokerURL: SOCKET_ENDPOINT,
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onConnect: onConnected,
        onDisconnect: onDisconnected
    });

    client.activate();

    return client;
};

export default webSocketClient;