 
import { Navigate } from "react-router-dom";



const PrivateRoute = ({ userAuth,children }) => { 
    if (!userAuth) {
        return <Navigate to="/landing" replace />;
    }

    return children
}

export default PrivateRoute;
