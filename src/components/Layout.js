import React, { useState } from 'react'
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";

// Pages
import About from '../pages/About'
import Contact from '../pages/Contact';
import Home from '../pages/Home'
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// Components
import Footer from './Footer';
import Navbar from './Navbar';

// Data
import { HIGHLIGHTS } from '../shared/highlights';
import { FAQ } from '../shared/faq'
import { ABOUTCONTENT } from '../shared/aboutContent'



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

  const [highLights, setHighLights] = useState(HIGHLIGHTS)
  const [faq, setFaq] = useState(FAQ)
  const [aboutContent, setAboutContent] = useState(ABOUTCONTENT)

  return (
    <Routes>
        <Route path="main" element={<Main />} >
            <Route path="home" element={<Home highLights={highLights} faq={faq}/>} />
            <Route path="about" element={<About aboutContent={aboutContent}/>} />
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
