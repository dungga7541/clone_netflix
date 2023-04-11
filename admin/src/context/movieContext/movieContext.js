import {createContext, useEffect, useReducer} from "react";
import movieReducers from "./movieReducers";


const INITIAL_STATE ={
    movies:[],
    isFetching:false,
    error:false,
}

export const MovieContext = createContext(INITIAL_STATE);

export const MovieContextProvider = ({children})=>{
    const [state,dispatch] =useReducer(movieReducers,INITIAL_STATE);

    return(
        <MovieContext.Provider 
            value = {{
                movies:state.movies,
                isFetching:state.isFetching,
                error:state.error,
                dispatch,
            }}
            >{children}
            
        </MovieContext.Provider>
    )
}