import React from 'react'
import { Link } from 'react-router-dom';
import { AuthStore } from '../../store/authStore';


export const Private1 = () => {
    const { changeAuth } = AuthStore( state => state )

    const onClick = () => {
        changeAuth(false);
        localStorage.removeItem("authLocal");
    }
    

    return (
        <div className="private1">
            <div>
                Pagina privada 1
            </div>

            <div className="logout-button" onClick={onClick} >
                Logout
            </div>            
            <div>
                <Link to="subPriv" className="link-class nextPage-button">A sub pagina privada 2</Link>
            </div>
        </div>
    )
}
