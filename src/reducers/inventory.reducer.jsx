import {createSlice} from "@reduxjs/toolkit";

export const inventorySlide = createSlice({
    name: "inventorySlide",
    initialState: {
        page: "Port",
    },
    reducers: {
        setTo: (state, action) => {
            state.page = action.payload;
        },
    }
});

export const {setTo} = inventorySlide.actions;

export default inventorySlide.reducer;