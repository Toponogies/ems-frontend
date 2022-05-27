import {createSlice} from "@reduxjs/toolkit";

export const inventoryPageSetterSlide = createSlice({
    name: "inventoryPageSetter",
    initialState: {
        page: "Port"
    },
    reducers: {
        setTo: (state, action) => {
            state.page = action.payload
        }
    }
})

export const {setTo} = inventoryPageSetterSlide.actions

export default inventoryPageSetterSlide.reducer