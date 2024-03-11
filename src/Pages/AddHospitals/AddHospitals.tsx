import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

function AddHospitals(){
return(
    <>
    <Navigation/>
    <main>
        <p>Edit text</p>
        <span>
            <button className="btn">Save as draft</button>
            <button className="btn">Post to public</button>
        </span>
    </main>
    <div className="add-hospital-container">
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
    <Footer/>
    </>
)
}

export default AddHospitals;