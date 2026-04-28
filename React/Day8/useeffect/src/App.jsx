import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Todo from './pages/Todo'
import Pizza from './pages/Pizza'
import Cards from './pages/Cards'

const App = () => {
  return (
   <>
   <NavBar/>

   <Routes>

    <Route path='/' element={<Todo/>}/>
    <Route path='/pizza' element={<Pizza/>}/>
     <Route path='/cards' element={<Cards/>}/>
   </Routes>
   </>
  )
}

export default App
