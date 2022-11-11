import React from 'react'
import "./navbar.css"
import {BrowserRouter as Router, Link, Route, Routes
  
} from "react-router-dom"
import Login from "../signin/Login"

const Nabvar = () => {
  return (
    <Router className="container_page">
      <div className='container'>
     
            <Link to="/login" className='links'>
              Login
            </Link>

       
            <Link to="/" className='links'>
              Home
            </Link>
              <Link to="/contact" className='links'>
              Contact us
            </Link>
   
      </div>
      
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' />
        </Routes>

    </Router>
  )
}

export default Nabvar