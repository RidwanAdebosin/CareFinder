import { Navigate, Outlet } from
"react-router-dom"; 
import {useAuthStatus} from "./useAuthStatus";


function PrivateRoute() {
 const {loggedIn, checkingStatus} = useAuthStatus();
 if(checkingStatus){
  return <h3>Loading...</h3>
 }
 return loggedIn ? <Outlet/> : <Navigate to="/sign-up"/>;
}



export default PrivateRoute;
