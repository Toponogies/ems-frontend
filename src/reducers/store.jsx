import {configureStore} from "@reduxjs/toolkit";
import inventoryReducer from "./inventory.reducer";
import credentialReducer from "./credential.reducer";
import deviceReducer from "./device.reducer";
import portReducer from "./port.reducer";
import interfaceReducer from "./interface.reducer";
import loginReducer from "./login.reducer";
import alarmReducer from "./alarm.reducer";

export default configureStore({
    reducer: {
        inventoryReducer: inventoryReducer,
        credentialReducer: credentialReducer,
        deviceReducer: deviceReducer,
        portReducer: portReducer,
        interfaceReducer: interfaceReducer,
        loginReducer: loginReducer,
        alarmReducer: alarmReducer
    }
});