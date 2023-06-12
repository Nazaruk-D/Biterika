import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import { cardAPISlice } from './api/cardAPISlice';


const rootReducer = combineReducers({
    app: appReducer,
    [cardAPISlice.reducerPath]: cardAPISlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardAPISlice.middleware)});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
