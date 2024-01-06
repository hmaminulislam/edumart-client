import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from 'firebase/auth'
import React, { createContext, useState } from 'react'
import app from '../firebase/firebase.init'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext()

const UserContext = ({children}) => {
  const [user, setUser] = useState()
  
  // create user with email pass 
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // update user 
  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {displayName: name})
  }

  // create account with google 
  const createUserGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }
    const users = {
      user,
      createUser,
      updateUser,
      createUserGoogle,
    };
  return (
      <AuthContext.Provider value={users}>
          {children}
    </AuthContext.Provider>
  )
}

export default UserContext