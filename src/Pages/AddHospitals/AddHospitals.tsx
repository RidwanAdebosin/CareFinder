import Footer from "../../components/Footer/Footer";
import "./AddHospitals.css";
import { FaPen } from "react-icons/fa";
// import { Remarkable } from "remarkable";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

// const md = new Remarkable();
function AddHospitals() {
  const [markdowntext, setMarkdowntext] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalAddress, setHospitalAddress] = useState("");
  const [hospitalCountry, setHospitalCountry] = useState("");
  const [hospitalImage, setHospitalImage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!hospitalName || !markdowntext) return;

    const id = crypto.randomUUID();

    // const newHospital = {
    //   id,
    //   hospitalName,
    //   markdowntext,
    //   hospitalImage: `${hospitalImage}?=${id}`,
    // };

    // Creating a FormData object for the new hospital
    const formData = new FormData();
    formData.append("id", id);
    formData.append("hospitalName", hospitalName);
    formData.append("hospitalAddress", hospitalAddress);
    formData.append("hospitalCountry", hospitalCountry);
    formData.append("markdowntext", markdowntext);
    formData.append("hospitalImage", hospitalImage);

    try {
      // Send the formData response to server using axios
      const response = await axios.post(
        "fsq32+urLJrVe9vIXAJyiXgkhxhmdEf8TsdndodPTEH8A90=",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("New Hospital submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting hospital:", error);
      toast.error("Failed to submit hospital");
    }
    // Clear field after submission
    setHospitalName("");
    setHospitalAddress("");
    setHospitalCountry("");
    setMarkdowntext("");
    setHospitalImage("");
  }
  return (
    <>
      <div className="add-hospital-container">
        <header>
          <h2>List Hospital</h2>
          <p>
            Use the markdown to fill required sections before submitting. As
            soon as we approve your hospital would appear in search result
          </p>
        </header>
        <div className="add-hospital-wrapper">
          <main>
            <p className="edit-text">
              Edit text{" "}
              <span>
                <FaPen />
              </span>
            </p>
            <span className="add-hospital-btn">
              <button className="add-btn">Save as draft</button>
              <button className="add-btn" onClick={handleSubmit}>
                Post to public
              </button>
            </span>
          </main>
          <div className="add-hospital-details">
            <form
              className="add-hospital-form"
              action="submit"
              onSubmit={handleSubmit}
            >
              <p className="full-width">
                <label>Name of hospital</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="add-hospital-input"
                  value={hospitalName}
                  onChange={(e) => setHospitalName(e.target.value)}
                />
              </p>

              <p>
                <label className="address-label">Hospital Address</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="add-hospital-input"
                  value={hospitalAddress}
                  onChange={(e) => setHospitalAddress(e.target.value)}
                />
              </p>

              <p>
                <label className="email-label">Country</label>
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="add-hospital-input"
                  value={hospitalCountry}
                  onChange={(e) => setHospitalCountry(e.target.value)}
                />
              </p>

              <p className="full-width">
                <label>Write a short bio</label>
                <textarea
                  name="markdown"
                  id="markdown"
                  placeholder="write a short bio about your facility here"
                  className="add-hospital-textarea"
                  value={markdowntext}
                  onChange={(e) => setMarkdowntext(e.target.value)}
                ></textarea>
              </p>
            </form>

            <div className="add-hospital-drop-zone">
              <input
                type="file"
                placeholder="Drag and drop file here or"
                className="dropzone-input"
                // value={hospitalImage}
                onChange={(e) => {
                  const file = e.target.files[0];
                  //   Check if a file has been selected
                  if (file) {
                    // Ensuring that just a file is selected
                    if (e.target.files.length > 1) {
                      toast("Please select only one image");
                      return;
                    }
                    // Set the selected file to the hospitaleImage state
                    setHospitalImage(hospitalImage);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddHospitals;
