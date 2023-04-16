import { 
    getListsStart,getListsSuccess,getListsFailure,
    deleteListStart,deleteListSuccess,deleteListFailure,
    createListStart,createListSuccess,createListFailure
} from "./listActions"
import axios from "axios";

const axiosInstance = axios.create
({
    baseURL:process.env.REACT_APP_API_URL,
});
export const getLists =async (dispatch)=>{
    dispatch(getListsStart());
    try{
        const res =await axiosInstance.get("lists",{
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
        const res =await axiosInstance.delete("lists/"+id,{
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
        const res =await axiosInstance.post("lists/",list,{
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
            }, 
    });
        dispatch(createListSuccess(res.data));
    }catch(err){
        dispatch(createListFailure());
    }
} 