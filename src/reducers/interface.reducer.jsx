import {createSlice} from "@reduxjs/toolkit";

export const interfaceSlide = createSlice({
    name: "interfaceSlide",
    initialState: {
        interfaces: [],
        activeInterfaces: []
    },
    reducers: {
        loadInterfaces: (state, action) => {
            state.interfaces = action.payload;
        },
        addInterface: (state, action) => {
            state.interfaces = [...state.interfaces, action.payload];
        },
        editInterface: (state, action) => {
            state.interfaces = state.interfaces.map(item => item.id === action.payload.id ? action.payload : item);
        },
        removeInterface: (state, action) => {
            state.interfaces = state.interfaces.filter(item => item.id !== action.payload);
        },
        changeActiveInterfaces: (state, action) => {
            state.activeInterfaces = action.payload;
        }
    }
});

export const {
    loadInterfaces,
    addInterface,
    editInterface,
    removeInterface,
    changeActiveInterfaces
} = interfaceSlide.actions;

export default interfaceSlide.reducer;