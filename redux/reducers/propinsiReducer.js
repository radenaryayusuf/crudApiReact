const initialState = {
    results: [],
    data: {},
    isLoading: false,
    isError: false   
}

function propinsiReducer(state = initialState, action) {
    switch (action.type){
    case "GET_PROPINSI_PENDING":
        return {...state, isLoading: true}       
    case "GET_PROPINSI_FULFILLED":
        return {...state, isLoading: false, results: action.payload.data}       
    case "GET_PROPINSI_REJECTED":
        return { ...state,isLoading: false, isError: true} 

        default:
        return state;
    }
}

export default propinsiReducer;