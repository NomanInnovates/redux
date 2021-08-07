let initialState = [{
    title:"simple product",
    location:"Lahore"
}]

function productReducer(state=initialState,action){
switch (action.type) {
    case 'Fetched Products':
        console.log("data in ProductReducer", action.payload)
        let FETCH_PRODUCTS = {
            ...state,
           products: action.payload
        }
        return FETCH_PRODUCTS;
        case 'Error Fetched Products':
            console.log("Error data in ProductReducer ", action.payload);
            let newState = {
                ...state,
                error:action.payload
            }
            return newState;
    default:
       return state
}
}
export default productReducer;