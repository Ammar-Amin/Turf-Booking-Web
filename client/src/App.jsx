import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Account, AllTurfs, CreateTurf, Home, Login, NotFound, SignUp, SingleTurf, UpdateTurf } from './pages'
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
          <Route path='/turf/:id' element={<SingleTurf />} />
          <Route path='/account' element={<Account />} />
        </Route>

        <Route element={<AdminProtected />}>
          <Route path='/create-turf' element={<CreateTurf />} />
          <Route path='/update-turf/:id' element={<UpdateTurf />} />
        </Route>

        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
