import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import SignUpForm from "./Pages/SignUp/SignUpForm";
import HospitalLandingPage from "./Pages/HospitalLandPage/HospitalLandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HospitalList from "./Pages/HospitalList/HospitalList";
import AddHospitals from "./Pages/AddHospitals/AddHospitals";


function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="signupform" element={<SignUpForm />} />
        <Route
          path="hospital-list"
          element={<HospitalList/>}
        />
        <Route
          path="hospital-list/:hospitalId"
          element={<HospitalLandingPage />}
        />
        <Route
        path="add-hospitals" element={<AddHospitals/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

