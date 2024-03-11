import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import SignUpForm from "./Pages/SignUp/SignUpForm";
import HospitalLandingPage from "./Pages/HospitalLandPage/HospitalLandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HospitalList from "./Pages/HospitalList/HospitalList";
// import { hospitalsInfo } from "./Data/hospitals";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
