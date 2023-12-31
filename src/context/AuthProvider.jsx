import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";





const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    

    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider)

    }



    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, correntUser => {
            setUser(correntUser)
            if(correntUser) {
                fetch(`https://yoga-and-meditation.vercel.app/jwt?email=${correntUser.email}`,
                {
                    method: "POST"
                })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("access-token", data.token)
                })
            }
            else {
                localStorage.removeItem("access-token")
            }
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext)
}


export {AuthProvider, useAuth}