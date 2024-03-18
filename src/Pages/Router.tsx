import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./SignUp/Login";
import SignUpForm from "./SignUp/SignUpForm";
import Profile from "./SignUp/UserProfile";
import PrivateRoute from "./SignUp/PrivateRouting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUpForm />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
