"use client"
import { navLinks } from '@/constants/headerFooter'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { NavLinkFooter } from './NavLink'
import { usePathname } from 'next/navigation'

const HeaderMobile = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <div className='flex items-center justify-between md:hidden text-secondary py-4 z-50 relative border-b border-line px-6'>
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
          <motion.div className='md:hidden bg-primary-dark text-secondary border-t border-line 
            absolute inset-0 z-50 border-b
          '
            style={{
              top: "56px",
              bottom: "56px"
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