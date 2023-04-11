import { 
    getMoviesStart,getMoviesFailure,getMoviesSuccess,
    deleteMoviesStart,deleteMoviesSuccess,deleteMoviesFailure,
    createMovieStart,createMovieSuccess,createMovieFailure
} from "./movieActions"
import axios from "axios";

export const getMovies =async (dispatch)=>{
    dispatch(getMoviesStart());
    try{
        const res =await axios.get("http://localhost:8000/api/movies",{
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
            }, 
    });
    dispatch(getMoviesSuccess(res.data));
    }catch(err){
        dispatch(getMoviesFailure());
    }
} 

// deleteMovie

export const deleteMovies =async (id,dispatch)=>{
    dispatch(deleteMoviesStart());
    try{
        await axios.delete("http://localhost:8000/api/movies/"+id,{
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
            }, 
    });
    dispatch(deleteMoviesSuccess(id));
    }catch(err){
        dispatch(deleteMoviesFailure());
    }
} 

//createMovie

export const createMovie =async (movie,dispatch)=>{
    dispatch(createMovieStart());
    try{
        const res =await axios.post("http://localhost:8000/api/movies/",movie,{
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
            }, 
    });
        dispatch(createMovieSuccess(res.data));
    }catch(err){
        dispatch(createMovieFailure());
    }
} 

// //UploadMovie

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