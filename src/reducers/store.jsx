import {configureStore} from "@reduxjs/toolkit";
import inventoryReducer from "./inventory.reducer";
import credentialReducer from "./credential.reducer";

export default configureStore({
    reducer: {
        inventoryReducer: inventoryReducer,
        credentialReducer: credentialReducer
    }
});