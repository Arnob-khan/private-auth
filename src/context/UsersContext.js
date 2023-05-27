import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from'firebase/auth'
export const AuthContext=createContext();
 
const auth =getAuth(app)
const UsersContext = ({children}) => {
    const googleProvider=new GoogleAuthProvider();

    const [user,setUser]= useState({})
    const [loading,setLoding]=useState(true)

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    const logOut =()=>{
         return signOut(auth)
       
    }

    const signInWithGoogle=()=>{
       return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
       const Unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoding(false)
        })

         return ()=>Unsubscribe()
    },[])


    
    
    const authInfo ={user,loading,createUser,signIn,logOut,signInWithGoogle} 
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                     {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UsersContext;