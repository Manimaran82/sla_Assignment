import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Toggle from './pages/Toggle'
import Button from './pages/Button'
import Theme from './pages/Theme'
import Input from './pages/Input'
import Number from './pages/Number'
import Show from './pages/Show'
import Password from './pages/Password'
import Dropdown from './pages/Drop'

const App = () => {
  return (
    <>
    <NavBar/>
    <div>
        <Routes>
            <Route path='/' element={<Toggle/>}/>
            <Route path='/button' element={<Button/>}/>
            <Route path='/theme' element={<Theme/>}/>
            <Route path='/input' element={<Input/>}/>
            <Route path='/number' element={<Number/>}/>
            <Route path='/show' element={<Show/>}/>
             <Route path='/password' element={<Password/>}/>
             <Route path='/drop' element={<Dropdown/>}/>
        </Routes>
    </div>
    </>
  )
}

export default App
