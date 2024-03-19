import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import HospitalLandingPage from "./Pages/HospitalLandPage/HospitalLandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HospitalList from "./Pages/HospitalList/HospitalList";
import AddHospitals from "./Pages/AddHospitals/AddHospitals";
import Login from "./Pages/SignUp/Login";
import SignUpForm from "./Pages/SignUp/SignUpForm";
import Profile from "./Pages/SignUp/UserProfile";
import PrivateRoute from "./Pages/SignUp/PrivateRouting";




function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<PrivateRoute>
          <Profile />
          <Route index path="/" element={<LandingPage />} />
          <Route path="hospital-list" element={<HospitalList />} />
          <Route path="hospital-list/:hospitalId" element={<HospitalLandingPage />} />
          <Route path="add-hospitals" element={<AddHospitals />} />
          </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


