import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import "./AddHospitals.css"

function AddHospitals(){
return(
    <>
    <Navigation/>
    <div className="add-hospital-container">
    <main>
        <p>Edit text</p>
        <span>
            <button className="btn">Save as draft</button>
            <button className="btn">Post to public</button>
        </span>
    </main>
    <div className="add-hospital-wrapper">
        <div className="add-hospital-details">
            <form>
                <label>Name of hospital</label>
                <input type="text" placeholder="..your hospital name here"/>
                <label>Phone Number</label>
                <input type="text" placeholder="..your hospital name here"/>
                <label>Company email</label>
                <input type="text" placeholder="..your hospital name here"/>
                <textarea></textarea>
            </form>
        </div>
        <div className="add-hospital-image">

        </div>
    </div>
    </div>
    <Footer/>
    </>
)
}

export default AddHospitals;