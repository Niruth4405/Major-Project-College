import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default App;

