import {createSlice} from "@reduxjs/toolkit";

export const alarmSlide = createSlice({
    name: "alarmSlide",
    initialState: {
        alarms: [],
        isShowAll: true
    },
    reducers: {
        loadAlarms: (state, action) => {
            state.alarms = action.payload;
        },
        setIsShowAll: (state, action) => {
            state.isShowAll = action.payload;
        }
    }
});

export const {loadAlarms, setIsShowAll} = alarmSlide.actions;

export default alarmSlide.reducer;