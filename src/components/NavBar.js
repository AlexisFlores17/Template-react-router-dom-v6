import React from 'react';
import { Link } from 'react-router-dom';
import { AuthStore } from './../store/authStore';


export const NavBar = () => {

    const { changeAuth } = AuthStore( state => state );

    const onClick = () => {
        changeAuth(false);
        localStorage.removeItem("authLocal");
    }

    return (
        <nav className="navbar">
            <div>
                <Link to="/home" className="navbar-element link-class"> Pagina privada 1</Link>
                <Link to="/home/subPriv" className="navbar-element link-class"> Pagina subprivada index</Link>
                <Link to="subPriv1" className="navbar-element link-class"> Pagina 2</Link>
                <Link to="subPriv2" className="navbar-element link-class"> Pagina 3</Link>
            </div>
            <div>
                <div className="logout-button" onClick={onClick} >
                    Logout
                </div>
            </div>
        </nav>
    )
}
