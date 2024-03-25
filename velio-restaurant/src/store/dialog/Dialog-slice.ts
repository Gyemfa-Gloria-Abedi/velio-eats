import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface DialogState{
    close: boolean;
}

const initialState: DialogState = {
    close: false,
};

const dialogSlice = createSlice({
    name: "dialog",
    initialState,
    reducers:{
        // toggle dialog
        toggleDialog(state){
            state.close = !state.close;
        }
    }
});

export const {toggleDialog} = dialogSlice.actions;
export default dialogSlice.reducer;