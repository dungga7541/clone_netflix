// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage, ref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbSr5t8vE-FNIXBunWu7zNW_0RWzJCM_A",
  authDomain: "netflix-clone-1fb46.firebaseapp.com",
  projectId: "netflix-clone-1fb46",
  storageBucket: "netflix-clone-1fb46.appspot.com",
  messagingSenderId: "683731141655",
  appId: "1:683731141655:web:2c3fa594d841049cb88852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
