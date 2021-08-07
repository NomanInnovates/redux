
let INITAIL_STATE = {
    isLogin : false,
    usser: {name:"noman",email:"noman@techloset.com"}
}

function authReducer (state=INITAIL_STATE,action) {
    switch (action.type) {
        case 'USER_LOGIN':
            let newState = {
                ...state,
                isLogin:true,
                newData:action.payload
            }
            return newState;
    
        default:
            return state;
    }
}
export default authReducer;