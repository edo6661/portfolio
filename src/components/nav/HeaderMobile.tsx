"use client"
import { navLinks } from '@/constants/headerFooter'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import { NavLinkFooter } from './NavLink'

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='flex items-center justify-between md:hidden text-secondary py-4 pr-6 z-50 relative'>
        <span>
          Edawg
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='hover:text-secondary-white transition-colors duration-200'
        >
          <Menu

          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div className='md:hidden z-50 absolute text-secondary bg-primary-dark w-full -ml-6 h-[620px] border-t border-line'
            style={{
              bottom: -620,
            }}
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className='flex flex-col items-center'>
              {navLinks.map((navLink) => (
                <NavLinkFooter
                  key={navLink}
                  name={navLink}
                />
              ))}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}



export default HeaderMobile