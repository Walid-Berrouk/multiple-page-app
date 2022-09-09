import React from 'react'
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";

// Pages
import About from '../pages/About'
import Contact from '../pages/Contact';
import Home from '../pages/Home'
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Footer from './Footer';
import Navbar from './Navbar';

// Components



function Main() {
  return (
    <>
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
    </>
  )
}



export default function Layout() {
  return (
    <Routes>
        <Route path="main" element={<Main />} >
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
        </Route>
        <Route
            path="*"
            element={<Navigate to="/main/home" />}
        />
    </Routes>
  )
}
