import React from 'react'
import { Person } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header className="header--container">
            <Link to="/"><img src={require("../assets/RevUp.png")} alt='logo'/></Link>
            <div className="header--user">
                <Link to="/bookings">My Bookings</Link>
                <Person />
            </div>
        </header> 
    )
}
