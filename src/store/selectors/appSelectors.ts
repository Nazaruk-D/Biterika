import {AppRootStateType} from "../store";

export const activeFilterSelector = (state: AppRootStateType) => state.app.filterStatus;
