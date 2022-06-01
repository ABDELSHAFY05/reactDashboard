import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

export const UserContext = createContext();

export function AuthContextProvider ({ children }) {
   const [user, setUser] = useState(null);

   function signIn (email, password)  {
    return signInWithEmailAndPassword(auth, email, password)
    //console.log(signInWithEmailAndPassword(auth, email, password))
   }

  function logout () {
      return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser!== null){
        localStorage.setItem('token',currentUser.accessToken);
        //console.log( localStorage.getItem('token'));
        setUser(currentUser);} 
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export function UserAuth () {
  return useContext(UserContext);
};