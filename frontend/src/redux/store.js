import {configureStore} from "@reduxjs/toolkit";
import  searchSlice  from './reducers/searchSlice';

export const store =configureStore({
    reducer:{
        search:searchSlice,
    },
})