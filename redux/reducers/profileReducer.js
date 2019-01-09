const initialState = {
    results: [],
    data: {},
    isLoading: false,
    isError: false   
}

function profileReducer(state = initialState, action) {
    switch (action.type){
    case "GET_PROFILE_PENDING":
        return {...state, isLoading: true}       
    case "GET_PROFILE_FULFILLED":
        return {...state, isLoading: false, results: action.payload.data}       
    case "GET_PROFILE_REJECTED":
        return { ...state,isLoading: false, isError: true} 

        default:
        return state;
    }
}

export default profileReducer;