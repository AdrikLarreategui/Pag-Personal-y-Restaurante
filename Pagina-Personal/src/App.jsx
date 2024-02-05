import React from 'react'
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element = { <Home />} />
      <Route path='/user' element = {<Contact />} />
      {/* <Route path='/about-us' element = {<Project data= {data}/>} /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
