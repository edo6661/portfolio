import React from 'react'
import NavLink from './NavLink'
export const navLinks = ["_home", "_about-me", "_projects"]
const Header = () => {
  return (
    <header className="border-b border-line px-6 ">
      <nav className=" flex justify-between items-center">
        <p className="text-[#607b96]">
          Edawg
        </p>
        <ul className="flex items-center ">
          {navLinks.map((link) => {
            return <NavLink key={link} name={link} />
          })}
        </ul>
        <p className="text-[#607b96]">
          _contact-me
        </p>

      </nav>
    </header>)
}

export default Header