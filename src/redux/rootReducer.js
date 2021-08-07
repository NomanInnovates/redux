import { combineReducers } from "redux";
import studentReducer from './reducers/StudentReducer'
import authReducer from './reducers/authReducer'
import githubReducer from './reducers/githubReducer'
import productReducer from './reducers/productReducer'
const rootReducers = combineReducers({
    authReducer,studentReducer,githubReducer,productReducer
})
export default rootReducers