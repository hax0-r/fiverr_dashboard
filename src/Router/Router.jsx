import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
    </Routes>
    </>
  )
}

export default Router