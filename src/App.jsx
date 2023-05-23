import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import UserAdd from './pages/UserAdd'
import UserList from './pages/UserList'
import Appbar from './components/Navbar'

const App = () => {
  return (
    <div>
    <Appbar/>
    <Toaster/>
      <Routes>
        <Route path='/' element={<UserAdd/>}/>
        <Route path='/users' element={<UserList/>}/>
      </Routes>
    </div>
  )
}

export default App