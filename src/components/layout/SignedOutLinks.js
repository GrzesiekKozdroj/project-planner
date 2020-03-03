import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className='right'>
            <li>
                <NavLink to='/'>
                    sign up     
                </NavLink>
            </li>
            <li>
                <NavLink to='/'>
                    log in
                </NavLink>
            </li>
        </ul>
    )
}
export default SignedOutLinks