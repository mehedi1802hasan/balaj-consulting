import React, { createContext, useEffect, useState } from 'react';
import { app } from './Firebase.config';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
// import axios from 'axios';
export const AuthContext =createContext(null);
const Provider = ({children}) => {
    const auth =getAuth(app);
    const [user,setUser] =useState('');
    const [loading,setLoading]=useState('');
   

   const  RegistrationUser =(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
   };

   const LoginUser=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);

   };
     useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('auth state changed',currentUser)
         ///get and set token
            // if(currentUser){
            //     axios.post('http://localhost:5000/jwt',{
            //         email:currentUser.email
            //     })
            //     .then(data=>{
            //         console.log(data.data.token);
            //         localStorage.setItem('access-token',data.data.token)
            //     })
            // }
            // else(
            //     localStorage.removeItem('access-token')
            // )
         
            setLoading(false)
        })
        return ()=> {unsubscribe()}
     },[])


    //  const updateUserProfile=(name,photo)=>{
    //     return  updateProfile(auth.currentUser,{
    //        displayName: name, photoURL: photo
    //      })
        
    //    }

    const updateUserProfile=(name)=>{
        return  updateProfile(auth.currentUser,{
           displayName: name
         })
        
       }
         const LogOut =()=>{
            return signOut(auth)
         };


     const authInfo={
    user,loading,RegistrationUser,LoginUser,LogOut,updateUserProfile
}

    return (
        <div>
           <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default Provider;