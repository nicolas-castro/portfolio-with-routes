import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><NavLink
           exact
           activeStyle={{ fontWeight: 'bold', color: 'blue' }}
           to='/'>
          Home
          </NavLink>
        </li>
        <li><NavLink 
          exact
          activeStyle={{ fontWeight: 'bold', color: 'blue' }}
          to='/about'>
          About
          </NavLink>
        </li>
        <li><NavLink 
          exact
          activeStyle={{ fontWeight: 'bold', color: 'blue' }}
          to='/education'>
          Education
          </NavLink>
        </li>
        <li><NavLink 
          exact
          activeStyle={{ fontWeight: 'bold', color: 'blue' }}
          to='/experience'>
          Experience
          </NavLink>
        </li>
        <li><NavLink 
          exact
          activeStyle={{ fontWeight: 'bold', color: 'blue' }}
          to='/projects' >
          Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;