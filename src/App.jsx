import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateItem from './components/CreateItem'
import LoginForm from './components/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-item' element={<CreateItem />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
