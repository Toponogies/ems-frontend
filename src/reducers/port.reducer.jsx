import {createSlice} from "@reduxjs/toolkit";

export const portSlide = createSlice({
    name: "portSlide",
    initialState: {
        ports: []
    },
    reducers: {
        loadPorts: (state, action) => {
            state.ports = action.payload;
        }
    }
});

export const {loadPorts} = portSlide.actions;

export default portSlide.reducer;