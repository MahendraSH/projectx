import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {
  GoogleAuthProvider,
  UserCredential,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY as string,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN as string,
  databaseURL: import.meta.env.VITE_APP_FIREBASE_DATABASE_URL as string,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env
    .VITE_APP_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID as string,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID as string,
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

export const signInWithGoogle = async (): Promise<UserCredential | null> => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    // Open a pop-up window to initiate Google sign-in
    const result = await signInWithPopup(auth, provider);

    // Return the user credential if sign-in is successful
    return result;
  } catch (error) {
    // Handle sign-in errors
    console.error("Error signing in with Google:", error);
    return null; // or throw an error
  }
};

export const signOutUser = async (): Promise<void> => {
  const auth = getAuth();
  try {
    await signOut(auth);
    console.log("User signed out successfully");
    // You can perform any additional actions after signing out, such as redirecting the user or updating the UI.
  } catch (error) {
    // Handle sign-out errors
    console.error("Error signing out:", error);
    // You can throw an error or handle it in any way appropriate for your application
  }
};
export const getImageURL = async (imagePath: string | null) => {
  const storage = getStorage(app);
  const imageRef = ref(storage, imagePath || "");

  try {
    // Get the download URL of the image
    const downloadURL = await getDownloadURL(imageRef);

    // Return the download URL
    return downloadURL;
  } catch (error) {
    // Handle errors
    console.error("Error getting image URL:", error);
    return null; // or throw an error
  }
};
