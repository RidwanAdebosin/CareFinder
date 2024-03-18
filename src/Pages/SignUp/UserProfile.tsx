import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

function Profile(){
  const { user } = useContext(AuthContext);

  // Render user's profile information
  return (
    <div>
        <div>
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1>{user?.displayName}</h1>
            <p>{user?.email}</p>
            <button className="btn">Get Started</button>
          </div>
        </div>
    </div>
  );
}

export default Profile;
