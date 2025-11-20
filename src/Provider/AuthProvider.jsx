import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user, loading);
  const googleProvider = new GoogleAuthProvider();
  const userSignUpFuc = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLoginFuc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (updatedData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData);
  };

  const signInGoogleFun = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOutFun = () => {
    return signOut(auth);
  };
  const resetPasswordFun = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    userSignUpFuc,
    userLoginFuc,
    updateUser,
    signInGoogleFun,
    loading,
    setLoading,
    logOutFun,
    resetPasswordFun,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
