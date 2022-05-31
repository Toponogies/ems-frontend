import {configureStore} from "@reduxjs/toolkit";
import inventoryPageSetterReducer from "./inventoryPageSetter";

export default configureStore({
    reducer: {
        inventoryPageSetter: inventoryPageSetterReducer
    }
});