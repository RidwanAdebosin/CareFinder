import { toast } from "react-toastify";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {FcGoogle} from "react-icons/fc";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import {db} from "../../Data/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import "./UserAuth.css"


function OAuth(){
    const navigate = useNavigate();
    async function onGoogleClick(){
    try{
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const user = result.user;
    
    //check for user
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()){
        await setDoc(docRef, {
            name: user.displayName,
            email: user.email,
            timestamp: serverTimestamp(),
        });
    }
//navigate to homepage after user succesfully signed in
        navigate("/");
        }catch(error){
        toast.error("Could not authorize with Google");
    }
}
    return(
        <a className="alternative-signIn-option"
        type="button"
            onClick={onGoogleClick} style={{color: 'grey'}}>
                <span style={{marginInlineEnd: '4px'}}>
                <FcGoogle/>
                </span>
                <p>
                Continue with Google
                </p>
        </a>
    );
}

export default OAuth;