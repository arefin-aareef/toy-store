import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <div className="flex justify-center mt-12">
            <progress className="progress w-56 text-center"></progress>
        </div>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>

};

export default PrivateRoutes;