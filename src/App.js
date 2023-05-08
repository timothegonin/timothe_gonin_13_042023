import React from 'react'
import './App.css'
import Router from './router/Router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router />
      <Footer />
    </React.Fragment>
  )
}

export default App
