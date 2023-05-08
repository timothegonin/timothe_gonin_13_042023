import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Router
