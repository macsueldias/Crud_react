import './Header.css'
import React from 'react'

const Header = function (props) {
    return(
        <header className="header">
            <h1 className="mt-3">
                <i className={`fa fa-${props.icon}`}></i> {props.title}
                <p>{props.icon}</p>
            </h1>
            <p className="lead text-muted">{props.subtitle}</p>
        </header>
    )
}


export default Header