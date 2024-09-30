import { firebase, initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { ReactNativeAsyncStorage } from "@react-native-async-storage/async-storage"

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "zottermeals.firebaseapp.com",
  projectId: "zottermeals",
  storageBucket: "zottermeals.appspot.com",
  messagingSenderId: "612649121880",
  appId: "1:612649121880:web:9ea0224f7fd2b133d1322d",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)


