import {ADD_STUDENT} from '../constants/types'
let initialState = {
    name:'Noman',
    age:20,
    class:"Intermediate",
    student:[]
}
function studentReducer(state=initialState,action) {
    switch (action.type){
        case ADD_STUDENT:
        // 
        console.log('data in reducer',action.payload);
        let newState = {
            ...state,
            name:'Ali',
            age:22,
            newData:action.payload
        }
        return newState
        default: 
        return state
    }
    
}
export default studentReducer