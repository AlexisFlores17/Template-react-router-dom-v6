import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthStore } from '../store/authStore'

export const RequireAuth = ({ children }) => {

  const { auth } = AuthStore( state => state );
  const { pathname, search } = useLocation();

  localStorage.setItem('lastPath', pathname + search );

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return children;
}
