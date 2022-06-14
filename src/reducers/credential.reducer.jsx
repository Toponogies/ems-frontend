import {createSlice} from "@reduxjs/toolkit";

export const credentialSlide = createSlice({
    name: "credentialSlide",
    initialState: {
        credentials: [],
        activeCredentials: []
    },
    reducers: {
        loadCredentials: (state, action) => {
            state.credentials = action.payload;
        },
        addCredential: (state, action) => {
            state.credentials = [...state.credentials, action.payload];
        },
        editCredential: (state, action) => {
            state.credentials = state.credentials.map(item => item.id === action.payload.id ? action.payload : item);
        },
        removeCredential: (state, action) => {
            state.credentials = state.credentials.filter(item => item.id !== action.payload);
        },
        changeActiveCredentials: (state, action) =>{
            state.activeCredentials = action.payload
        }
    }
});

export const {loadCredentials, addCredential, editCredential, removeCredential, changeActiveCredentials} = credentialSlide.actions;

export default credentialSlide.reducer;