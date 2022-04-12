
import { Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';



// const app  =  initializeApp(firebaseConfig);
const Register = () => {

    initializeApp(firebaseConfig);
    const auth = getAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleNameOnBlur = e => {
        setName(e.target.value);
        console.log(e.target.value);
    }
    const handleOnBlur = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handleOnBlur2 = e => {
        setPass(e.target.value);
        console.log(e.target.value);
    }

    const handleLoginSubmit = e => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUserName();
                console.log(user);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
            });

        e.preventDefault();
    }
 
    const setUserName=()=>  {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then((result) => {
              
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });

    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {<form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleNameOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur2}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}




                </Grid>
                <Grid item xs={12} md={6}>
                    {/* <img style={{ width: '100%' }} src={register} alt="" /> */}
                </Grid>
            </Grid>
        </div>
    );
};

export default Register;