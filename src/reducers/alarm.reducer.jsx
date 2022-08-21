import {createSlice} from "@reduxjs/toolkit";

export const alarmSlide = createSlice({
    name: "alarmSlide",
    initialState: {
        alarms: []
    },
    reducers: {
        loadAlarms: (state, action) => {
            state.alarms = action.payload;
        }
    }
});

export const {loadAlarms} = alarmSlide.actions;

export default alarmSlide.reducer;