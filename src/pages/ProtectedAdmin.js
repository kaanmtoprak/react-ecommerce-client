
import { Navigate, Outlet,Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import { Box } from "@chakra-ui/react";

const ProtectedAdmin = ({element}) => {
  const { loggedIn,user } = useAuth();



if(loggedIn && user.role ==="admin"){
    return (
        <>
        <nav>
				<ul className="admin-menu">
					<li>
						<Link to={"/admin"}>Home</Link>
					</li>
					<li>
						<Link to={"/admin/orders"}>Orders</Link>
					</li>
					<li>
						<Link to={"/admin/products"}>Products</Link>
					</li>
				</ul>
			</nav>
			<Box mt={10}>
				<Outlet />
			</Box></>
    )
}else if(!loggedIn){
    return <Navigate to="/signin" />
}
else{
    return <Navigate to="/" />
  }


 
}

export default ProtectedAdmin

// loggedIn ? <Outlet /> : <Navigate to="/signin" />