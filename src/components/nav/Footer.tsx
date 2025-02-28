import React from 'react'
import NavLink from './NavLink'
import ContactMeLink from './ContactMeLink'
export const navLinks = ["_home", "_about-me", "_projects"]
const Footer = () => {
  return (
    <footer className="border-b border-line pl-6 ">
      <nav className=" flex justify-between items-center">
        <p className="text-secondary">
          Edawg
        </p>
        <ul className="flex items-center ">
          {navLinks.map((link) => {
            return <NavLink key={link} name={link} />
          })}
        </ul>
        <ContactMeLink />


      </nav>
    </footer>)
}

export default Footer