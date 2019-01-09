const initialState = {
    results: [],
    data: {},
    isLoading: true,
    isError: false   
}

function propinsiReducerid(state = initialState, action) {
    switch (action.type){
    case "GET_PROPINSI_ID_PENDING":
        return {...state, isLoading: true}       
    case "GET_PROPINSI_ID_FULFILLED":
        return {...state, isLoading: false, data: action.payload.data}       
    case "GET_PROPINSI_ID_REJECTED":
        return { ...state,isLoading: false, isError: true} 

        default:
        return state;
    }
}

export default propinsiReducerid;