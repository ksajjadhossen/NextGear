import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Login Error:", error.message);
  }
};

export const logout = () => signOut(auth);
