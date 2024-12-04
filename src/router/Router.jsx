import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import ProtectedRoutes from '../utils/ProtectedRoutes'

/**
 * Router component responsible for handling the application's routing.
 * @component
 * @returns {JSX.Element} The rendered Router component.
 */
const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Router
