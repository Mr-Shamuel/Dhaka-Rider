import React, { useContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword  } from "firebase/auth";
import { destinationContext } from '../../App';
 

import {Typography, TextField, Button,Grid } from '@mui/material';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
 
 



const Login = () => {

    const [loginuser, setLoginUser] = useContext(destinationContext);
   
    console.log(loginuser);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    initializeApp(firebaseConfig);
    //  googleSIgnin
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();


        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setLoginUser(user);
                console.log(token);
                history.replace(from);
            }).catch((error) => {

            });


    }

    initializeApp(firebaseConfig);
    const auth = getAuth();
  
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
const handleOnChange= (e)=>{
    setEmail(e.target.value);
   
    console.log(email,pass);
    
}
const handlepassOnChange= (e)=>{
    
    setPass(e.target.value);
    console.log( pass);
    
}
const handleLoginSubmit= (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass )
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      setLoginUser(user);
    
      history.replace(from);
      // ...
    })
    .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    });
    
}
    


    return (
        <div>
            <Navbar></Navbar>
            <Grid container spacing={2} >
            <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Login</Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handlepassOnChange}
                        variant="standard" />

                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <Button variant="text">New User? Please Register</Button>
                    </NavLink>
                    
                    
                </form>
                <p>------------------------</p>
                <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
            </Grid>
            <Grid item xs={12} md={6}>
                {/* <img className="img-fluid "  src=  alt="" /> */}
            </Grid>
        </Grid>



        </div>
    );
};

export default Login;