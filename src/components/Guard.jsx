import React from 'react'
import { Navigate } from 'react-router-dom';

const Guard = ({children}) => {
    const userData=JSON.parse(localStorage.getItem("userData"));
    if(userData?.token)
    return children
    else return <Navigate to="/login"/>
  return (
    <div>
      
    </div>
  )
}

export default Guard
