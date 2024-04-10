import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from 'prop-types'
import { Navigate,useLocation } from "react-router-dom";


const PrivetRoutes = ({ children }) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
      return  <div className=" text-center mt-10 "><span className="loading loading-spinner loading-lg "></span> </div>
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>


};

PrivetRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivetRoutes;