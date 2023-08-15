import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Home } from './pages/Home'
import { Word } from './pages/Word'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:searchedWord' element={<Word/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
