import { Navigate, Outlet } from
"react-router-dom"; 
import {useAuthStatus} from "./useAuthStatus";
import Spinner from "../Spinner";


function PrivateRoute() {
 const {loggedIn, checkingStatus} = useAuthStatus();
 if(checkingStatus){
  return <Spinner/>
 }
 return loggedIn ? <Outlet/> : <Navigate to="/sign-up"/>;
}



export default PrivateRoute;
