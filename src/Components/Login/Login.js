import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import { destinationContext } from '../../App';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';





const Login = () => {

    const [loginuser, setLoginUser] = useContext(destinationContext);
  
console.log(loginuser);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
     initializeApp(firebaseConfig);
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();

        
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setLoginUser(user );
                console.log(token);
                // console.log("my userL", loginuser);
                history.replace(from);
            }).catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // const email = error.email;
                // const credential = GoogleAuthProvider.credentialFromError(error);
            });


    }
   
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center">Google Signin Button</h1>
            <div className="login d-flex align-items-center align-middle  justify-content-center mt-5 pt-5">
             

          
             <br />
             <button className="btn btn-outline-success"onClick={handleGoogleSignIn}>Google Sign in</button>
            {/* <GoogleButton onClick={handleGoogleSignIn}></GoogleButton> */}
              {/* {
                  loginuser.email?   <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
              
              :<button onClick={handlesignOUt}>Sign Out</button>
                } */}

              
              
                
            </div>


        </div>
    );
};

export default Login;