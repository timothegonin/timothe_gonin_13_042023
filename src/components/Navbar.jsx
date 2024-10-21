import React from 'react'
import { NavLink, Link } from 'react-router-dom'
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
  const linkStyle = 'font-bold text-[#2c3e50] no-underline mr-4 hover:underline'
  const linkStyleActive = 'text-[#42b983]'

  const navBarIcon = !isAuthenticated ? (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${linkStyle} ${linkStyleActive}` : linkStyle
      }
      to="/login"
    >
      <i className="fa fa-user-circle ml-3 mr-1.5"></i> Sign In
    </NavLink>
  ) : (
    <React.Fragment>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${linkStyle} ${linkStyleActive}` : linkStyle
        }
        to="/profile"
      >
        <i className="fa fa-user-circle  ml-3 mr-1.5"></i>
        {isLoading ? <Loader type="bounce" /> : userFirstName}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${linkStyle} ${linkStyleActive}` : linkStyle
        }
        to="/"
        onClick={handleLogout}
      >
        <i className="fa fa-sign-out  ml-3 mr-1.5"></i>
        Sign Out
      </NavLink>
    </React.Fragment>
  )

  return (
    <nav className="flex justify-between items-center px-5 py-1.5">
      <Link className="flex items-center" to="/">
        <img className="max-w-full w-52" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>{navBarIcon}</div>
    </nav>
  )
}

export default Navbar
