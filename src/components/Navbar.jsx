import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'
import logo from '../assets/argentBankLogo.png'
import Loader from './Loader'

const Navbar = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, isLoading, userFirstName } = useSelector(
    (state) => state.auth
  )
  const { newUserFirstName } = useSelector((state) => state.userInfos)

  const handleLogout = () => {
    dispatch(logout())
  }

  const navBarIcon = !isAuthenticated ? (
    <Link className="main-nav-item" to="/login">
      <i className="fa fa-user-circle"></i> Sign In{' '}
    </Link>
  ) : (
    <React.Fragment>
      <Link className="main-nav-item" to="/profile">
        <i className="fa fa-user-circle"></i>
        {isLoading ? (
          <Loader type="bounce" />
        ) : newUserFirstName === '' ? (
          userFirstName
        ) : (
          newUserFirstName
        )}
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
