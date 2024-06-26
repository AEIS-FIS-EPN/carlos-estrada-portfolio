import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/" className="w-60 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className='blue-gradient_text'>Linkcar13</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to="/about" className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
            About me
        </NavLink>
        <NavLink to="/projects" className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
            My Projects
        </NavLink>
        <NavLink to="/blog" className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
            Blog
        </NavLink>
        <NavLink to="/contact" className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
            Contact me
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
