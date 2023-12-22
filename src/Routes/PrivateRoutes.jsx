/* eslint-disable react/prop-types */

import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoutes = ({ children }) => {

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const location = useLocation()


    if (user) {
        return children;
    }

    return navigate(location?.state ? location.state : '/login')
};

export default PrivateRoutes;