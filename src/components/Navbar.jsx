import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/user/userSlice'
import logo from '../assets/argentBankLogo.png'
import Loader from './Loader'

/**
 * Component for rendering the navigation bar.
 * @returns {JSX.Element} The rendered navigation bar component.
 */
const Navbar = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, isLoading, userFirstName } = useSelector(
    (state) => state.user
  )

  const handleLogout = () => {
    dispatch(logout())
  }

  /**
   * Renders the appropriate navigation bar icons based on the user's authentication status.
   * @returns {JSX.Element} The rendered navigation bar icons.
   */
  const navBarIcon = !isAuthenticated ? (
    <Link className="main-nav-item" to="/login">
      <i className="fa fa-user-circle"></i> Sign In
    </Link>
  ) : (
    <React.Fragment>
      <Link className="main-nav-item" to="/profile">
        <i className="fa fa-user-circle"></i>
        {isLoading ? <Loader type="bounce" /> : userFirstName}
      </Link>
      <Link className="main-nav-item" to="/" onClick={handleLogout}>
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
