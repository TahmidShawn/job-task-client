/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoutes = ({ children }) => {

    const { user } = useContext(AuthContext)
    const location = useLocation()


    if (user) {
        return children;
    }

    return <Navigate state={location} to='/login'></Navigate>
};

export default PrivateRoutes;