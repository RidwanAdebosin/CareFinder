import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../../FirebaseConfig";

export function useAuthStatus(){
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);

    //verifying if user is authenticated
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setLoggedIn(true);
            }
            setCheckingStatus(false);
        })

    }, [])
    return{
        loggedIn, checkingStatus
    }
}

