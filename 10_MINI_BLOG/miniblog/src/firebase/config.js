import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB4sHUKvBPFR1H2CWMz8wsh8syfj7eGxOk",
  authDomain: "mini-blog-curso.firebaseapp.com",
  projectId: "mini-blog-curso",
  storageBucket: "mini-blog-curso.appspot.com",
  messagingSenderId: "806731904872",
  appId: "1:806731904872:web:840194ea649570ed0f48dd"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};