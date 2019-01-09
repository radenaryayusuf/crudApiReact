const initialState = {
    results: [],
    data: {},
    isLoading: false,
    isError: false   
}

function pemakaiReducer(state = initialState, action) {
    switch (action.type){
    case "GET_PEMAKAI_PENDING":
        return {...state, isLoading: true}       
    case "GET_PEMAKAI_FULFILLED":
        return {...state, isLoading: false, results: action.payload.data}       
    case "GET_PEMAKAI_REJECTED":
        return { ...state,isLoading: false, isError: true} 

        default:
        return state;
    }
}

export default pemakaiReducer;