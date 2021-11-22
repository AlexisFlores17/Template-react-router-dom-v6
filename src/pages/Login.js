import React from 'react';
import { Link } from 'react-router-dom';
import { AuthStore } from '../store/authStore';

export const Login = () => {
    const { auth, changeAuth } = AuthStore( state => state );

    const onClick = () => {
        
        changeAuth(true);
        localStorage.setItem("authLocal", auth);
    }

    return (
        <div className="login-page">
            <h1 className="login-title">Login</h1>
            <div className="login-button" onClick={onClick} >
                Click para ruta privada
            </div>
            <div className="back-button" >
                <Link to="/" className="link-class">Click para ruta publica</Link>
            </div> 
        </div>
    )
}
