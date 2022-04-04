import React from "react";
import {FaHamburger, FaBars} from "react-icons/fa";

import './Navbar.css'

const Navbar = () => {
  return(
      <div className='navbar'>
        <div className="container">
            <FaHamburger size={40} style={{marginLeft: '4px'}}/>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>Order</li>
                <li>Menu</li>
                <li>Delivery</li>
                <li>Contact</li>
            </ul>
            <div className="hamburger">
                <FaBars />
            </div>
        </div>
      </div>
  )
}

export default Navbar