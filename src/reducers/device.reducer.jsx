import {createSlice} from "@reduxjs/toolkit";

export const deviceSlide = createSlice({
    name: "deviceSlide",
    initialState: {
        devices: [],
        activeDevices: []
    },
    reducers: {
        loadDevices: (state, action) => {
            state.devices = action.payload;
        },
        addDevice: (state, action) => {
            state.devices = [...state.devices, action.payload];
        },
        editDevice: (state, action) => {
            state.devices = state.devices.map(item => item.id === action.payload.id ? action.payload : item);
        },
        removeDevice: (state, action) => {
            state.devices = state.devices.filter(item => item.id !== action.payload);
        },
        changeActiveDevices: (state, action) =>{
            state.activeDevices = action.payload
        }
    }
});

export const {loadDevices, addDevice, editDevice, removeDevice, changeActiveDevices} = deviceSlide.actions;

export default deviceSlide.reducer;