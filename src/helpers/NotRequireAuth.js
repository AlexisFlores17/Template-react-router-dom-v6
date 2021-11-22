import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthStore } from '../store/authStore'


export const NotRequireAuth = ({children}) => {

    const { auth } = AuthStore( state => state );
    const lastPath = localStorage.getItem('lastPath') || '/home';



    if (auth) {

        return <Navigate to={lastPath}/>;
    
    }
    
    return children;
  }