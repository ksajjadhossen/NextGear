import { auth } from "./firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

import Cookies from "js-cookie";

const syncUserToDb = async (user) => {
  try {
    const response = await fetch("/api/auth/sync-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, uid: user.uid }),
    });

    const userData = await response.json();
    if (userData.role) {
      Cookies.set("userRole", userData.role, { expires: 7 });
    }
  } catch (error) {
    console.error("Database sync failed:", error);
  }
};

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    await syncUserToDb(result.user);
    return result.user;
  } catch (error) {
    console.error("Google Login Error:", error.message);
    throw error;
  }
};

export const registerWithEmail = async (fullName, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: fullName,
    });

    await syncUserToDb(user);

    return user;
  } catch (error) {
    console.error("Registration Error:", error.message);
    throw error;
  }
};

export const loginWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    await syncUserToDb(result.user);
    return result.user;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
};

export const logout = () => {
  Cookies.remove("userRole");
  return signOut(auth);
};
