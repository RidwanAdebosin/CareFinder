import Navigation from "../components/Navigation/Navigation"
import "./Profile.css"
import { getAuth } from "firebase/auth"
import { useState } from "react"
// import { auth } from "../FirebaseConfig"
import Footer from "../components/Footer/Footer"
import { useNavigate } from "react-router-dom"


function Profile(){
    const auth = getAuth()
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    })

    const {name, email} = formData
    function onLogOut(){
        auth.signOut()
        navigate("/")
    }
    return(
<>
<Navigation/>
<section className="profile-container">
    <div className="form-wrapper">
    <h1 className="profile-h1">My Profile</h1>
        <form>
        <input type="text" id="name" value={name} disabled className="profile-input"/>
        <input type="email" id="email" value={email} disabled className="profile-input"/>
        <div className="form-extras">
            <p className="form-extras-p">Do you want to change your name? <span>Edit</span></p>
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