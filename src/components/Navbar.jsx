import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true)

  const navBarIcon = !loggedIn ? (
    <Link className="main-nav-item" to="/login">
      <i className="fa fa-user-circle"></i> Sign In{' '}
    </Link>
  ) : (
    <React.Fragment>
      <Link className="main-nav-item" to="/dashboard">
        <i className="fa fa-user-circle"></i>
        Tony
      </Link>
      <Link className="main-nav-item" to="/login">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </React.Fragment>
  )

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>{navBarIcon}</div>
    </nav>
  )
}

export default Navbar
