import React from 'react'
import NavLink from './NavLink'
import HeaderMobile from './HeaderMobile'
import { navLinks } from '@/constants/headerFooter'
const Header = () => {
  return (
    <>
      <header className="border-b border-line pl-6 relative">
        <nav className="hidden md:flex justify-between items-center ">
          <span className="text-secondary">
            Edawg
          </span>
          <div className="flex items-center ">
            {navLinks.map((link) => link !== "_contact-me" && (
              <NavLink key={link} name={link} />
            ))}
          </div>
          <NavLink
            name="_contact-me"
          />

        </nav>
      </header>
      <HeaderMobile />
    </>
  )
}

export default Header
