import {createSlice} from "@reduxjs/toolkit";

export const inventorySlide = createSlice({
    name: "inventorySlide",
    initialState: {
        page: "Port",
        currentDevice: ""
    },
    reducers: {
        setTo: (state, action) => {
            state.page = action.payload;
        },
        setCurrentDevice: (state, action) => {
            state.currentDevice = action.payload;
        }
    }
});

export const {setTo, setCurrentDevice} = inventorySlide.actions;

export default inventorySlide.reducer;