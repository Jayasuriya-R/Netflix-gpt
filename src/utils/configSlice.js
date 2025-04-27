import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"lang",
    initialState:{
        ln:"en"
    },
    reducers:{
        changeLanguage:(state, action)=>{
            state.ln = action.payload
        }
    }
});
export const {changeLanguage} = configSlice.actions;

export default configSlice.reducer;