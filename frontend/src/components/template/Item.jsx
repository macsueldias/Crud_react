import React from 'react'
import { Link } from 'react-router-dom'

const Item = function(props) {
    return(
        <nav className="menu">
            <Link to="/" className="">
                <i className={`fa fa-${props.icon}`}></i> {props.title}
            </ Link>
            <Link to="/users">
                <i className={`fa fa-users`}></i>Usuários
            </ Link>
        </nav>
    )
}

export default Item