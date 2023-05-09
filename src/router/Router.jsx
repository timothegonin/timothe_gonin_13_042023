import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import Error from '../pages/Error'

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signIn" element={<SignIn />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Router
