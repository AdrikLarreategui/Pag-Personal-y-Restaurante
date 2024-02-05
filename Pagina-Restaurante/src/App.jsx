import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Reserve from './components/Reserve/Reserve'


function App () {
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element= {<Home />}></Route>
      <Route path='/reserve' element= {<Reserve />}></Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App
