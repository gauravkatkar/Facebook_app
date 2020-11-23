import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css"
import { auth, provider } from "./firebase"
import {actionTypes} from "./Reducer"
import { useStateValue } from './StateProvider';


function Login() {
    const [state,dispatch] = useStateValue();


    const signIn = () => {
        // Sign IN..
        auth
        .signInWithPopup(provider)
        .then((result) => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result);
        })
        .catch((error) => alert(error.message)); 
    };
    return (
        <div className="login">
            <div className="login_logo">
                < img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="" />

                <img src="https://www.login.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt=" " />

            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button> 
        </div>
    )
}

export default Login
