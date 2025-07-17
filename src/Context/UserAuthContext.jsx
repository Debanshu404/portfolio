// File: UserAuthContext.jsx (Make sure it's .jsx, not .js)
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebaseConfig";

// ✅ Context should be PascalCase
const UserContext = createContext();

// ✅ Component should be PascalCase
export function UserAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [Loading,setloading]=useState(true)

  function Signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setloading(false)
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, Signup, login,Loading }}>
      {children}
    </UserContext.Provider>
  );
}

// ✅ Hook name should be camelCase and reference the correct context
export function useUserAuth() {
  return useContext(UserContext);
}
