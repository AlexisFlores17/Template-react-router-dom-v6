import React from 'react'
import { Link } from 'react-router-dom'

export const Public1 = () => {

    const onClick = () => {

    }
    
    return (
        <div className="public-page">
            <div className="placeholder-div">
                <h1 className="public-title1">Placeholder1</h1>
                <h1 className="public-title2">Placeholder2</h1>
            </div>
            <div className="public-button" onClick={onClick} >
                <Link to="/login" className="link-class" >Avanzar a login</Link>
            </div>
        </div>
    )
}
