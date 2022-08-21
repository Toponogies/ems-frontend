import {createSlice} from "@reduxjs/toolkit";

export const alarmSlide = createSlice({
    name: "alarmSlide",
    initialState: {
        alarms: [],
        newAlarms: 0
    },
    reducers: {
        loadAlarms: (state, action) => {
            state.alarms = action.payload;
        },
        addAlarm: (state, action) => {
            state.alarms = [...state.alarms, action.payload];
        },
        increaseNewAlarms: (state) => {
            state.newAlarms++;
        },
        resetNewAlarms: (state) => {
            state.newAlarms = 0;
        }
    }
});

export const {loadAlarms, addAlarm, increaseNewAlarms, resetNewAlarms} = alarmSlide.actions;

export default alarmSlide.reducer;