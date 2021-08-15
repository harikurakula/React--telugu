import React from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <ul>
        {/* <li>Home</li>

        <li>Dashboard</li>

        <li>About</li> */}
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
