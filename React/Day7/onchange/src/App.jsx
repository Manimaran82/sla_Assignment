import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Input from './pages.jsx/Input'
import Email from './pages.jsx/Email'
import Password from './pages.jsx/Password'
import Uppercase from './pages.jsx/Uppercase'
import Count from './pages.jsx/Count'
import Number from './pages.jsx/Number'
import Reverse from './pages.jsx/Reverse'
import Button from './pages.jsx/Button'
import Field from './pages.jsx/Field'
import Live from './pages.jsx/Live'

const App = () => {
  return (
    <>
    <NavBar/>

   <Routes>
    <Route path='/' element={<Input/>}/>
    <Route path='/email' element={<Email/>}/>
    <Route path='/password' element={<Password/>}/>
    <Route path='/uppercase' element={<Uppercase/>}/>
    <Route path='/count' element={<Count/>}/>
    <Route path='/num' element={<Number/>}/>
    <Route path='/reverse' element={<Reverse/>}/>
    <Route path='/button' element={<Button/>}/>
    <Route path='/field' element={<Field/>}/>
    <Route path='/live' element={<Live/>}/>

   </Routes>
    </>
  )
}

export default App
