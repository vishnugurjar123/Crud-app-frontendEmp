import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
    let token=sessionStorage.getItem("accessToken");

  return token? props.children:<Navigate to='/'/>
  
}

export default PrivateRoute
