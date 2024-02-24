import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../pages/Login/Provider';
// import { AuthContext } from '../pages/Authentication/Provider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    console.log(location)
   
    if(loading){
        return(
            <div className="flex items-center justify-center h-screen">
<span className="loading loading-infinity loading-xs"></span>
<span className="loading loading-infinity loading-sm"></span>
<span className="loading loading-infinity loading-md"></span>
<span className="loading loading-infinity loading-lg"></span>
      </div>
        )
    }
    if(user){
  return children
  
    }
  
       return <Navigate to='/' state={{from: location}} replace/>

};

export default PrivateRoute;