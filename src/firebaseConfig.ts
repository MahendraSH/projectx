import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {
  GoogleAuthProvider,
  UserCredential,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const isMock = import.meta.env.VITE_APP_USE_MOCK_API === "true" || !import.meta.env.VITE_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: (import.meta.env.VITE_APP_FIREBASE_API_KEY || "mock-api-key") as string,
  authDomain: (import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN || "mock-auth-domain") as string,
  databaseURL: (import.meta.env.VITE_APP_FIREBASE_DATABASE_URL || "mock-db-url") as string,
  projectId: (import.meta.env.VITE_APP_FIREBASE_PROJECT_ID || "mock-project-id") as string,
  storageBucket: (import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET || "mock-bucket") as string,
  messagingSenderId: (import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID || "mock-sender-id") as string,
  appId: (import.meta.env.VITE_APP_FIREBASE_APP_ID || "mock-app-id") as string,
  measurementId: (import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID || "mock-measurement-id") as string,
};

// Initialize Firebase app - only if keys exist to avoid SDK crashes, otherwise mock
export const app = isMock ? null : initializeApp(firebaseConfig);

export const signInWithGoogle = async (): Promise<UserCredential | null> => {
  if (isMock) {
    console.log("Using Mock Google Sign-In");
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      user: {
        displayName: "John Doe",
        email: "john.doe@example.com",
        getIdToken: async () => "mock-google-token-123",
        refreshToken: "mock-google-refresh-token",
        emailVerified: true,
        isAnonymous: false,
        metadata: {},
        providerData: [],
        tenantId: null,
        delete: async () => {},
        getIdTokenResult: async () => ({ token: "mock-google-token-123", expirationTime: "", authTime: "", issuedAtTime: "", signInProvider: "google.com", claims: {} }),
        reload: async () => {},
        toJSON: () => ({}),
        phoneNumber: null,
        photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150",
        providerId: "google.com",
        uid: "user-jane-doe", // Match with default test user in mockData.ts
      },
      providerId: "google.com",
      operationType: "signIn",
    } as unknown as UserCredential;
  }

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
  if (isMock) {
    console.log("Mock User signed out successfully");
    return;
  }
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
  if (isMock) {
    return imagePath;
  }
  if (!app) return null;
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
