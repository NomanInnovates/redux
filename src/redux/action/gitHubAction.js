import {GITHUB_FOLLOWER_API,ERROR_GITHUB_FOLLOWER_API} from '../constants/types';
export const fetchFollowers = (data) =>async(dispatch,previouState ) =>{
    // first do api req then dispatch response
    try {
    let res = await fetch(`https://api.github.com/users/${data}/followers`);
    console.log("api first response",res);
    dispatch({
        type:GITHUB_FOLLOWER_API,
        payload:res
    })
    } catch (error) {
        console.log("error",error);
        dispatch({
            type:ERROR_GITHUB_FOLLOWER_API,
            payload:error
        })
    }
}