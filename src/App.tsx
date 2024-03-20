import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import SignUpForm from "./Pages/SignUp/SignUpForm";
import HospitalLandingPage from "./Pages/HospitalLandPage/HospitalLandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HospitalList from "./Pages/HospitalList/HospitalList";
import AddHospitals from "./Pages/AddHospitals/AddHospitals";
import Profile from "./Pages/Profile";
import PrivateRoute from "./Pages/SignUp/PrivateRouting";
import Navigation from "./components/Navigation/Navigation";


function App() {
  return (
    <BrowserRouter>
    <Navigation/>
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile/>}/>
        </Route>
        <Route path="sign-up" element={<SignUpForm />} />
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

