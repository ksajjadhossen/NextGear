import { auth } from "./firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const googleProvider = new GoogleAuthProvider();

const syncUserToDb = async (user) => {
  try {
    const response = await fetch("/api/auth/sync-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, uid: user.uid }),
    });

    if (!response.ok || response.status === 204) {
      console.warn("No content returned from sync-user API");
      return;
    }

    const userData = await response.json();
    if (userData && userData.role) {
      Cookies.set("userRole", userData.role, { expires: 7 });
    }
  } catch (error) {
    console.error("Database sync failed:", error);
    // Use toast.error if using react-toastify or toast() for react-hot-toast
    toast.error("Database sync failed.");
  }
};

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    await syncUserToDb(result.user);
    toast.success("Logged in successfully with Google!");
    return result.user;
  } catch (error) {
    console.error("Google Login Error:", error.message);
    toast.error("Google login failed. Please try again.");
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
    toast.success(`Welcome, ${fullName}! Account created successfully.`);
    return user;
  } catch (error) {
    console.error("Registration Error:", error.message);
    if (error.code === "auth/email-already-in-use") {
      toast.error("This email is already in use.");
    } else {
      toast.error("Registration failed. Please check your details.");
    }
    throw error;
  }
};

export const loginWithEmail = async (email, password) => {
  try {
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    const result = await signInWithEmailAndPassword(
      auth,
      cleanEmail,
      cleanPassword,
    );
    toast.success("Logged in successfully!");
    return result.user;
  } catch (error) {
    console.error("Firebase Auth Error Code:", error.code);
    if (error.code === "auth/invalid-credential") {
      toast.error("Invalid email or password.");
    } else {
      toast.error("Login failed. Please try again.");
    }
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    Cookies.remove("userRole");

    toast.success("You have been logged out.");
  } catch (error) {
    console.error("Logout Error:", error);
    toast.error("Error during logout.");
  }
};
