import Navigation from "../components/Navigation/Navigation"
import "./Profile.css"
import { useState } from "react"
import  auth  from "../FirebaseConfig"
import Footer from "../components/Footer/Footer"
import { useNavigate } from "react-router-dom"
import { updateProfile,  } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"



function Profile(){
    const navigate = useNavigate();
    const [changeDetail, setChangeDetail]= useState(false);
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    })

    const {name, email} = formData
    function onLogOut(){
        auth.signOut()
        navigate("/")
    }

    function onChange(e){
    setFormData((prevState) => ({
    ...prevState, [e.target.id]: e.target.value,
    }))
    }

    async function onSubmit(){
        try{
if(auth.currentUser.displayName !== name){
    //update the display name in Firebase autthentication
    await updateProfile(auth.currentUser, {
        displayName: name,
    })

    //update the name in the firestore

    const docRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(docRef, {
        name,
    });
    toast.succes("Profile details updated")
}
        }catch(error){
    toast.error("Could not update profile details");
        }
    }
    return(
<>
<Navigation/>
<section className="profile-container">
    <div className="profile-form-wrapper">
    <h1 className="profile-h1">My Profile</h1>
        <form>
        <input type="text" id="name" value={name} disabled={!changeDetail} 
        onChange={onChange} className="profile-input"/>
        <input type="email" id="email" value={email} disabled className="profile-input"/>
        <div className="form-extras">
            <p className="form-extras-p">Do you want to change your name? 
            <span 
            
            onClick={() => {
                changeDetail && onSubmit();
                setChangeDetail((prevState) => !prevState);
            }}>
                {changeDetail ? "Apply change" : "Edit"}</span></p>
            <p onClick={onLogOut}>Sign Out</p>
        </div>

        </form>
    </div>


</section>
<Footer/>
</>
    )
  }

  export default Profile;