import React, {useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom'
function AuthLayout(props) {
  const flag = false
  return (
    <div>
      {flag ? props.children: <Navigate to="/login"/>}
    </div>
  )
}
export default AuthLayout;