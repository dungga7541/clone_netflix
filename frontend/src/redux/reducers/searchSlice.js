import {createSlice} from "@reduxjs/toolkit";

export const searchSlice =createSlice({
    name:"search",
    initialState :{
        searchInfo:"",
    },
    reducers:{
        updateSearch:(state,action) =>{
            console.log("test",action.payload)
            state.searchInfo = action.payload;
        }
    }
})
export const selectSearch = (state) => state.search.value
export const {updateSearch} = searchSlice.actions;
export default searchSlice.reducer;