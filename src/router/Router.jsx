import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Error from '../pages/Error'
import Profile from '../pages/Profile'

const PrivateRoute = ({ path, element }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: path }} />
  )
}

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile"
        element={<PrivateRoute path="/profile" element={<Profile />} />}
      />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Router
