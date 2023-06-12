import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {FilterStatusType} from "../../types/FilterStatusType";
import {FilterStatus} from "../../enums/filterStatus";

export type InitialStateType = {
    filterStatus: FilterStatusType;

};

const initialState: InitialStateType = {
    filterStatus: FilterStatus.ALL
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<FilterStatusType>) {
            state.filterStatus = action.payload
        }
    },
});

export const { setFilter } = appSlice.actions;

export default appSlice.reducer;
