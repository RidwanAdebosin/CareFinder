import { useContext, FormEvent } from "react";
import { AuthContext } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { loginUser, loading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  // If authentication is still loading, display a loading indicator
  if (loading) {
    return (
      <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
    );
  }

  // If the user is already authenticated, redirect to the home page
  if (user) {
    navigate("/");
    return null; // Ensure no content is rendered before redirection
  }

  // Handle form submission for user login
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem(
      "email"
    ) as HTMLInputElement).value;
    const password = (e.currentTarget.elements.namedItem(
      "password"
    ) as HTMLInputElement).value;
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => console.log(error.message));

    e.currentTarget.reset();
  };

  // Render the login form
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div>
          <button type="submit" className="btn">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
