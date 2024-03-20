import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

export function useAuthStatus(){
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);

    //verifying if user is authenticated
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user){
                setLoggedIn(true);
            }
            setCheckingStatus(false);
        })

    }, [])
    return{
        loggedIn, checkingStatus
    };
}

