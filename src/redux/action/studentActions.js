import {ADD_STUDENT} from '../constants/types'
// action will recieve data from components and pass to reducer
export const addStudent = (data) =>{
    console.log('Data from react component',data);
    return {
        type: ADD_STUDENT,
        payload:data
    }
}
