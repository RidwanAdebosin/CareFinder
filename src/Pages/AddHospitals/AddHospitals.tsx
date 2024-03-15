import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import "./AddHospitals.css"
import { FaPen } from "react-icons/fa";


function AddHospitals() {
    return (
        <>
            <Navigation />
            <div className="add-hospital-container">
                <header>

                    <h2>List Hospital</h2>
                    <p>Use the markdown to fill required sections before submitting. As soon as we approve your hospital would appear in serach result</p>
                </header>
                <div className="add-hospital-wrapper">
                    <main>
                        <p className="edit-text">Edit text <span><FaPen /></span></p>
                        <span className="add-hospital-btn">
                            <button className="add-btn">Save as draft</button>
                            <button className="add-btn">Post to public</button>
                        </span>
                    </main>
                    <div className="add-hospital-details">
                        <form className="add-hospital-form" action="">
                            <p className="full-width">
                                <label>Name of hospital</label>
                                <input type="text" placeholder="Type here" className="add-hospital-input" />
                            </p>

                            <p>
                                <label className="number-label">Phone Number</label>
                                <input type="number" placeholder="Type here" className="add-hospital-input" />
                            </p>

                            <p>
                                <label className="email-label">Company email</label>
                                <input type="email" placeholder="Type here" className="add-hospital-input" />
                            </p>


                            <p className="full-width">
                                <label>Write a short bio</label>
                                <textarea name="" id="" placeholder="write a short bio about your facility here" className="add-hospital-textarea"></textarea>

                            </p>
                        </form>
                        <div className="add-hospital-drop-zone">

                            <input type="file" placeholder="Drag and drop file here or" />


                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddHospitals;