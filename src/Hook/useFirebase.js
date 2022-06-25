import React, { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import firebaseAuthentication from '../Firebase/firebase.init';

firebaseAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        logout

    }
};

export default useFirebase;