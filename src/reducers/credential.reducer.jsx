import {createSlice} from "@reduxjs/toolkit";

export const credentialSlide = createSlice({
    name: "credentialSlide",
    initialState: {
        credentials: [{}]
    },
    reducers: {
        loadCredentials: (state, action) => {
            state.credentials = action.payload;
        },
        addCredential: (state, action) => {
            state.credentials = [...state.credentials, action.payload];
        },
        updateCredential: (state, action) => {
            state.credentials = state.credentials.map(item => item.id === action.payload.id ? action.payload : item);
        },
        deleteCredential: (state, action) => {
            state.credentials = state.credentials.filter(item => item.id !== action.payload);
        }
    }
});

export const {loadCredentials, addCredential, updateCredential, deleteCredential} = credentialSlide.actions;

export default credentialSlide.reducer;