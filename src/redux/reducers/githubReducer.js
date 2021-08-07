import {
  GITHUB_FOLLOWER_API,
  ERROR_GITHUB_FOLLOWER_API,
} from "../constants/types";

let initialState = {
  followers: [],
};
function githubReducer(state = initialState, action) {
  switch (action.type) {
    case GITHUB_FOLLOWER_API:
      //
      // console.log("data in reducer", action.payload);
      let GITHUB_FOLLOWER = {
        ...state,
        followers: action.payload,
      };
      return GITHUB_FOLLOWER;
    case ERROR_GITHUB_FOLLOWER_API:
      //
      console.log("data in reducer", action.payload);
      let newState = {
        ...state,
        error: action.payload,
      };
      return newState;
    default:
      return state;
  }
}
export default githubReducer;
