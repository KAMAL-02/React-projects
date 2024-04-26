import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link><br />
      <Link to="/login">Login</Link><br />
      <Link to="/about">About</Link><br />
    </div>
  )
}

export default Navbar
