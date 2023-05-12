export const getMoviesStart =() =>({
    type:"GET_MOVIES_START"
})
export const getMoviesSuccess =(movies) =>({
    type:"GET_MOVIES_SUCCESS",
    payload:movies,
})
export const getMoviesFailure =() =>({
    type:"GET_MOVIES_FAILURE"
})
export const deleteMoviesStart =() =>({
    type:"DELETE_MOVIES_START"
})
export const deleteMoviesSuccess =(id) =>({
    type:"DELETE_MOVIES_SUCCESS",
    payload:id,
})
export const deleteMoviesFailure =() =>({
    type:"DELETE_MOVIES_FAILURE"
})
export const createMovieStart =() =>({
    type:"CREATE_MOVIES_START"
})
export const createMovieSuccess =(movies) =>({
    type:"CREATE_MOVIES_SUCCESS",
    payload:movies,
})
export const createMovieFailure =() =>({
    type:"CREATE_MOVIES_FAILURE"
})
export const updateMovieStart =() =>({
    type:"UPDATE_MOVIES_START"
})
export const updateMovieSuccess =(movie) =>({
    type:"UPDATE_MOVIES_SUCCESS",
    payload:movie,
})
export const updateMovieFailure =() =>({
    type:"UPDATE_MOVIES_FAILURE"
})
