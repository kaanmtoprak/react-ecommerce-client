
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

const ProtectedRoute = ({element,admin}) => {
  const { loggedIn,user } = useAuth();

return loggedIn ? <Outlet /> : <Navigate to="/signin" />

// if(loggedIn && user.role ==="admin" && admin){
//   return <Outlet/>
// }else if( loggedIn ){
//   return <Outlet/>
// }else{
//   return <Navigate to="/signin" />
// }


 
}

export default ProtectedRoute

// loggedIn ? <Outlet /> : <Navigate to="/signin" />