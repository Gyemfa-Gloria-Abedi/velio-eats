import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "../store/dialog/Dialog-slice";

export const store = configureStore({
    reducer: {
        dialog: dialogReducer,
    }
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;