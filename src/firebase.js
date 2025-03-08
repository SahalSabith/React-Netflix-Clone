import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCunO7mgcMDY_JYnztB9Qh-Hf4yoItjpwg",
  authDomain: "netflix-clone-5e385.firebaseapp.com",
  projectId: "netflix-clone-5e385",
  storageBucket: "netflix-clone-5e385.firebasestorage.app",
  messagingSenderId: "797253080776",
  appId: "1:797253080776:web:31b8985606d31ae603b7fd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid : user.uid,
            name,
            authProvider : "local",
            email
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const login = async (email,password) => {
    try{
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const logout = () => {
    signOut(auth)
}

export { auth,db,login,logout,signup }