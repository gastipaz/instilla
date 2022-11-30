import React from 'react'
import { Nav, NavLink } from './styled-elements/NavElements'
import Logo from './../images/Instilla-logo.png'

const Navbar = () => {
  return (
    <Nav>
        <NavLink href='https://www.instilla.it/' target='_blank' rel='noopener noreferrer'>
            <img className='logo' src={Logo} alt='instilla-logo'/>
        </NavLink>
        <div className='project-title'>
          <h2>SALES TAXES PROBLEM</h2>
        </div>
    </Nav>
  )
}

export default Navbar