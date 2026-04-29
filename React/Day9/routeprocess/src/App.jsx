import React from 'react'
import NavBar from './components/NavBar'
import {  Route, Routes } from 'react-router-dom'
import Fetch from './pages/Fetch'
import Form from './pages/Form'
import Array from './pages/Array'

const App = () => {
  return (
   <>
   <NavBar/>
   <Routes>
    <Route path='/' element={<Fetch/>}/>
    <Route path='/form' element={<Form/>}/>
    <Route path='/array' element={<Array/>}/>
   </Routes>
   </>
  )
}

export default App
