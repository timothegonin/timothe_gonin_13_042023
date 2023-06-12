import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Profile from '../pages/Profile'
import Login from '../pages/Login'

const Router = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/profile" replace /> : <Login />
        }
      />
      <Route
        path="/profile"
        element={
          isAuthenticated ? <Profile /> : <Navigate to="/login" replace />
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Router
