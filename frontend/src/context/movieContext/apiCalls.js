import { 
    getMoviesStart,getMoviesFailure,getMoviesSuccess,
    deleteMoviesStart,deleteMoviesSuccess,deleteMoviesFailure,
    createMovieStart,createMovieSuccess,createMovieFailure,
    updateMovieStart,updateMovieSuccess,updateMovieFailure,
} from "./movieActions"
import axios from "axios";
const axiosInstance = axios.create
({
    baseURL:process.env.REACT_APP_API_URL,
});
export const getMovies =async (dispatch)=>{
    dispatch(getMoviesStart());
    try{
        const res =await axiosInstance.get("movies",{
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
        await axiosInstance.delete("movies/"+id,{
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
        const res =await axiosInstance.post("movies/",movie,{
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
            }, 
    });
        dispatch(createMovieSuccess(res.data));
    }catch(err){
        dispatch(createMovieFailure());
    }
} 



//UpdateMovie

export const updateMovie =async (movie,dispatch)=>{
    dispatch(updateMovieStart());
    try{
        await axios.put("movies/"+movie._id,movie,{
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
            }, 
    });
        dispatch(updateMovieSuccess(movie));
    }catch(err){
        dispatch(updateMovieFailure());
    }
} 