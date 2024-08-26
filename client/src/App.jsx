import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AllTurfs, CreateTurf, Home, Login, SignUp, SingleTurf, UpdateTurf } from './pages'
import { AdminProtected, Footer, Header, UserProtected } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />

        <Route path='/booking' element={<AllTurfs />} />

        <Route element={<UserProtected />} >
          <Route path='/booking/:id' element={<SingleTurf />} />
        </Route>

        <Route element={<AdminProtected />}>
          <Route path='/create-turf' element={<CreateTurf />} />
          <Route path='/update-turf/:id' element={<UpdateTurf />} />
        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
