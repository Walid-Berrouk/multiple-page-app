import React from 'react'

import { Link } from 'react-router-dom'

// Assets
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <>
        {/* <!-- Fixed navbar --> */}
        <div className="navbar navbar-inverse navbar-fixed-top headroom" >
            <div className="container">
                <div className="navbar-header">
                    {/* <!-- Button for smallest screens --> */}
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                    <Link className="navbar-brand" to="/main/home">
                        <img src={logo} alt="Progressus HTML5 template" />
                    </Link>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav pull-right">
                        <li ><Link to="/main/home">Home</Link></li>
                        <li><Link to="/main/about">About</Link></li>
                        <li><Link to="/main/contact">Contact</Link></li>
                        <li><Link className="btn" to="/main/signin">Sign In / Sign up</Link></li>
                    </ul>
                </div>
                {/* <!--/.nav-collapse --> */}
            </div>
        </div> 
        {/* <!-- /.navbar --> */}
    </>
  )
}
