import { 
    getUsersStart,getUsersSuccess,getUsersFailure,
    deleteUserStart,deleteUserSuccess,deleteUserFailure,
    updateUserStart,updateUserSuccess,updateUserFailure,
    createUserStart,createUserSuccess,createUserFailure
} from "./userActions"
import axios from "axios";
const axiosInstance = axios.create
({
    baseURL:process.env.REACT_APP_API_URL,
});
//get all users
export const getUsers =async (dispatch)=>{
    dispatch(getUsersStart());
    try{
        const res =await axiosInstance.get("users",{
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
            }, 
    });
    dispatch(getUsersSuccess(res.data));
    }catch(err){
        dispatch(getUsersFailure());
    }
} 

// deleteUser

export const deleteUser =async (id,dispatch)=>{
    dispatch(deleteUserStart());
    try{
        await axiosInstance.delete("users/find/"+id,{
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
            }, 
    });
    dispatch(deleteUserSuccess(id));
    }catch(err){
        dispatch(deleteUserFailure());
    }
} 

// UpdateUser

export const updateUser =async (user,dispatch)=>{

    dispatch(updateUserStart());
    try{
        await axiosInstance.put("users/"+ user._id,user,{
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
            }, 
            
    });
        dispatch(updateUserSuccess(user._id));
    }catch(err){
        dispatch(updateUserFailure());
    }
} 
export const createUser =async (user,dispatch)=>{

    dispatch(createUserStart());
    try{
        await axiosInstance.put("auth/register",user,{
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
            }, 
            
    });
        dispatch(createUserSuccess());
    }catch(err){
        dispatch(createUserFailure());
    }
} 
