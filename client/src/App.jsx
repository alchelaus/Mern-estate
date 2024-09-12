import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Signin from './page/Signin'
import SignOut from './page/SignOut'
import About from './page/About'
import Profile from './page/Profile'
import Headers from './componets/Header'

export default function App() {
  return(
    <BrowserRouter>
    <Headers/>
       <Routes>
           <Route path="/home" element={<Home/>}></Route>
           <Route path="/sign-in" element={<Signin/>}></Route>
           <Route path="/sign-up" element={<SignOut/>}></Route>
           <Route path="/about" element={<About/>}></Route>
           <Route path="/Profile" element={<Profile/>}></Route>
       </Routes>
    </BrowserRouter>
    )
}
