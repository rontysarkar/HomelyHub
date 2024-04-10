import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
import { auth } from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    console.log(user)

    // CreateUser Email and password
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign in with email and password
    const signIn =(email,password)=>{
      return  signInWithEmailAndPassword(auth,email,password)
    }



    // Sign in with popup
    const signInWithPopUp =(provider)=>{
       return signInWithPopup(auth,provider)
    }

    // sign in with github
    // const gitProvider = new GithubAuthProvider();
    // const signWithGithub = () =>{
    //     return 
    // }


    // OnAuth State Change
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setUser(user)
        })
    },[])


    // sign Out 
    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        signIn,
        signInWithPopUp,
        user,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children:PropTypes.node
}