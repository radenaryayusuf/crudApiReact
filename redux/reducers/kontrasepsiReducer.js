const initialState = {
    results: [],
    data: {},
    isLoading: false,
    isError: false   
}

function kontrasepsiReducer(state = initialState, action) {
    switch (action.type){
    case "GET_KONTRASEPSI_PENDING":
        return {...state, isLoading: true}       
    case "GET_KONTRASEPSI_FULFILLED":
        return {...state, isLoading: false, results: action.payload.data}       
    case "GET_KONTRASEPSI_REJECTED":
        return { ...state,isLoading: false, isError: true} 

        default:
        return state;
    }
}

export default kontrasepsiReducer;