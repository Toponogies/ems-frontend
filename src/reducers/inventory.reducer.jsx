import {createSlice} from "@reduxjs/toolkit";

export const inventorySlide = createSlice({
    name: "inventorySlide",
    initialState: {
        page: "Port",
        ports: []
    },
    reducers: {
        setTo: (state, action) => {
            state.page = action.payload;
        },
        setPort: (state, action) => {
            state.ports = action.payload;
        },
    }
});

export const {setTo, setPort} = inventorySlide.actions;

export default inventorySlide.reducer;