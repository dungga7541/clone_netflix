import { 
    getListsStart,getListsSuccess,getListsFailure,
    deleteListStart,deleteListSuccess,deleteListFailure,
    createListStart,createListSuccess,createListFailure
} from "./listActions"
import axios from "axios";

export const getLists =async (dispatch)=>{
    dispatch(getListsStart());
    try{
        const res =await axios.get("http://localhost:8000/api/lists",{
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
            }, 
    });
    dispatch(getListsSuccess(res.data));
    }catch(err){
        dispatch(getListsFailure());
    }
} 

//deleteList

export const deleteList =async (id,dispatch)=>{
    dispatch(deleteListStart());
    try{
        const res =await axios.delete("http://localhost:8000/api/lists/"+id,{
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
            }, 
    });
    dispatch(deleteListSuccess(id));
    }catch(err){
        dispatch(deleteListFailure());
    }
} 

//createMovie

export const createList =async (list,dispatch)=>{
    dispatch(createListStart());
    try{
        const res =await axios.post("http://localhost:8000/api/lists/",list,{
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
            }, 
    });
        dispatch(createListSuccess(res.data));
    }catch(err){
        dispatch(createListFailure());
    }
} 