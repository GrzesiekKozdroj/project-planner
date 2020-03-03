import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className='right'>
            <li>
                <NavLink to='/'>
                    New Project     
                </NavLink>
            </li>
            <li>
                <NavLink to='/'>
                    log out
                </NavLink>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating green lighten-1'>
                    GK
                </NavLink>
            </li>
        </ul>
    )
}
export default SignedInLinks