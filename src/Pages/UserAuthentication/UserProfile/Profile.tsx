import "./Profile.css"
import { useState } from "react"
import Footer from "../../../components/Footer/Footer"
import { getAuth, updateProfile,  } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"
import {toast} from "react-toastify";
import { db } from "../../../Data/FirebaseConfig"



function Profile(){
    const auth = getAuth()
    const [changeDetail, setChangeDetail]= useState(false);
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    })

    const {name, email} = formData
    // function onLogOut(){
    //     auth.signOut()
    //     navigate("/")
    // }

    function onChange(e){
    setFormData((prevState) => ({
    ...prevState, [e.target.id]: e.target.value,
    }))
    }

    async function onSubmit(){
        try{
    if(auth.currentUser.displayName !== name){
    //update the display name in Firebase authentication
    await updateProfile(auth.currentUser, {
        displayName: name,
    })

    //update the name in the firestore
    const docRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(docRef, {
        name,
    });
    toast.success("Profile details updated")
}
        }catch(error){
    toast.error("Could not update profile details");
        }
    }
    return(
<>
<section className="profile-container">

    <div className="profile-form-wrapper">
    <h1 className="profile-h1"> User Profile</h1>
        <form>
        <input type="text" id="name" value={name} disabled={!changeDetail} 
        onChange={onChange} className="profile-input"/>
        <input type="email" id="email" value={email} disabled className="profile-input"/>
        <div className="form-extras">
            <p className="form-extras-p">Do you want to change your name? 
            <span className="edit-action"
            
            onClick={() => {
                changeDetail && onSubmit();
                setChangeDetail((prevState) => !prevState);
            }}>
                {changeDetail ? "Apply change" : "Edit"}</span></p>
            {/* <p onClick={onLogOut}>Sign Out</p> */}
        </div>

        </form>
    </div>


</section>
<Footer/>
</>
    )
  }

  export default Profile;