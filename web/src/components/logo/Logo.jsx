import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './Logo.css'
export default () => (
    <Link to='/'>
        <img className="logo" src={logo} alt="Tindev" />
    </Link>
)