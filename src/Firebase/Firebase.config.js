
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDmlwUamLPBGlmj4pAV8g0mc3xVOiEEYI",
  authDomain: "homelyhub-d246a.firebaseapp.com",
  projectId: "homelyhub-d246a",
  storageBucket: "homelyhub-d246a.appspot.com",
  messagingSenderId: "21230817371",
  appId: "1:21230817371:web:99b131ec64dd4d11cdef7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);