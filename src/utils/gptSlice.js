import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch :false,
        searchInput :"",
        gptResult:null
    },
    reducers:{
        toggleGptSearch: (state,action) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        setSearchInput:(state,action) =>{
            state.searchInput = action.payload;
        },
        addGptResult:(state,action) =>{
            state.gptResult = action.payload;
        }
    }
});

export const {toggleGptSearch,setSearchInput,addGptResult} = gptSlice.actions;

export default gptSlice.reducer;
