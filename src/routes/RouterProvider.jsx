import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Layout from '../components/layout/Layout'
import Search from '../components/search/Search'

const RouterProvider = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout><Outlet/></Layout>} >
                <Route index element={<Home></Home>}></Route>
                <Route path='search' element={<Search></Search>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterProvider