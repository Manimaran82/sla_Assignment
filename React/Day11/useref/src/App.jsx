import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Focus from './pages/Focus'
import Input from './pages/Input'
import Button from './pages/Button'
import Track from './pages/Track'
import Timer from './pages/Timer'

const App = () => {
  return (
 <>
 <Navbar/>
 <Routes>
  <Route path='/' element={<Focus/>}/>
  <Route path='/input' element={<Input/>}/>
  <Route path='/button' element={<Button/>}/>
   <Route path='/track' element={<Track/>}/>
   <Route path='/timer' element={<Timer/>}/>
 </Routes>
 </>
  )
}

export default App
