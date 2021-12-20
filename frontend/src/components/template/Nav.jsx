import './Nav.css'
import React from 'react'
import Item from './Item'
import UserCrud from '../user/UserCrud'

const Nav = function (props) {
    return (
        <React.Fragment>
            <aside className="menu-area">
                <nav className="menu">
                    <Item {...props} />
                </nav>
            </aside>
        </React.Fragment>
    )
}

export default Nav