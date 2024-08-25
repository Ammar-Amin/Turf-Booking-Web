import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, SignUp } from './pages'
import { Footer, Header } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
