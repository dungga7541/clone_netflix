import { 
    getUsersStart,getUsersSuccess,getUsersFailure,
    deleteUserStart,deleteUserSuccess,deleteUserFailure,
} from "./userActions"
import axios from "axios";

//get all users
export const getUsers =async (dispatch)=>{
    dispatch(getUsersStart());
    try{
        const res =await axios.get("http://localhost:8000/api/users/",{
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
        await axios.delete("http://localhost:8000/api/users/find/"+id,{
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
            }, 
    });
    dispatch(deleteUserSuccess(id));
    }catch(err){
        dispatch(deleteUserFailure());
    }
} 

//Upload

// export const createMovie =async (movie,dispatch)=>{
//     dispatch(createMovieStart());
//     try{
//         const res =await axios.posts("http://localhost:8000/api/movies/",movie,{
//             headers:{
//                 token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
//             }, 
//     });
//         dispatch(createMovieSuccess(res.data));
//     }catch(err){
//         dispatch(createMovieFailure());
//     }
// } 