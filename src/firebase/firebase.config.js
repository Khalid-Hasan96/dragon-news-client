// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCJz3OnyUTqym1RDESzkgdjq1pBgr7VbBk",
      authDomain: "dragon-news-f2aa8.firebaseapp.com",
      projectId: "dragon-news-f2aa8",
      storageBucket: "dragon-news-f2aa8.appspot.com",
      messagingSenderId: "633067502837",
      appId: "1:633067502837:web:87ad7e70c14973255159bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;