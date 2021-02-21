import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import axios from './axios';


firebase.initializeApp(firebaseConfig)

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(() => firebase.auth.currentUser);

    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().useDeviceLanguage();
        try {
          await firebase.auth().signInWithPopup(provider);
        } catch (error) {
          console.log(error.message);
        }
      };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
             setUser(user);
             authenticate(user.refreshToken);
            } else {
             setUser(false);
            }
            if (initializing) {
                setInitializing(false);
            }
    });

    // Cleanup subscription
    return unsubscribe;
    }, [initializing]);

    const signOut = async () => {
        try {
          await firebase.auth().signOut();
          setUser(false);
          console.log("signing out");
        } catch (error) {
          console.log(error.message);
        }
    };

    const authenticate = (token) => {

    }

module.exports = {
    signInWithGoogle,
    signOut,

}
