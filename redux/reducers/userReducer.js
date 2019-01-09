const initialState = {
    results: [],
    data: {},
    isLoading: false,
    isError: false   
}

function userReducer(state = initialState, action) {
    switch (action.type){
    case "GET_USER_PENDING":
        return {...state, isLoading: true}       
    case "GET_USER_FULFILLED":
        return {...state, isLoading: false, data: action.payload.data}       
    case "GET_USER_REJECTED":
        return { ...state,isLoading: false, isError: true} 

        default:
        return state;
    }
}

export default userReducer;