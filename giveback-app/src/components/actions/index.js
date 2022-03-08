import axios from 'axios'
import { AUTH_USER } from "./types";

// export const signup = ({email, password})=> {
//     return (dispatch)=> {

//     }
// }

//action creator:
export const signup = ({email, password})=> (dispatch)=>{
    axios.post('http://localhost:8000/api/users/signup', {
        email: email, 
        password: password
    })

}



//adding redux thunk allows us to return either an action abject or a function from action creators 
//if we return a fucntion, the function is automatically called with dispatch function
//if we pass action to dispatch function, action is sent off to middleware and all of our actions in our app
//we gain the ability to return as many dspatch as we want in one single action creator 
//allows ot have total control over dipsatch process; 
// inside ONE action creator we can dispatch as many actions 

//alternative approach to async action creatorss 