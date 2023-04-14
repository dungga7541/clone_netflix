export const getUsersStart =() =>({
    type:"GET_USER_START"
})
export const getUsersSuccess =(user) =>({
    type:"GET_USER_SUCCESS",
    payload:user,
})
export const getUsersFailure =() =>({
    type:"GET_USER_FAILURE"
})
export const deleteUserStart =() =>({
    type:"DELETE_USER_START"
})
export const deleteUserSuccess =(id) =>({
    type:"DELETE_USER_SUCCESS",
    payload:id,
})
export const deleteUserFailure =() =>({
    type:"DELETE_USER_FAILURE"
})
// export const updateMovieStart =() =>({
//     type:"UPDATE_USER_START"
// })
// export const updateUserSuccess =(user) =>({
//     type:"UPDATE_USER_SUCCESS",
//     payload:user,
// })
// export const updateUserFailure =() =>({
//     type:"UPDATE_USER_FAILURE"
// })