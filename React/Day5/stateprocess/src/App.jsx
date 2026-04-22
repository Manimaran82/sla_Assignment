import React from 'react'
import Count from './pages/Count'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Color from './pages/Color'

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Count />} />
        <Route path='/color' element={<Color />} />
      </Routes>
    </>
  )
}

export default App