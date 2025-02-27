"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const ContactMeLink = () => {
  const pathname = usePathname();
  const isContactActive = pathname === '/contact-me';

  const activePathStyle = isContactActive ? 'text-secondary-white' : 'text-[#607b96]';

  return (
    <div className="text-[#607b96] py-4 px-6 relative group">
      <Link className={activePathStyle} href="/contact-me">
        _contact-me
      </Link>
      <div className='absolute left-0 bottom-0 top-0 w-0.5 bg-line' />
      {isContactActive && <div className="absolute bottom-0 left-0.5 right-0 bg-accent-orange h-1 " />}

    </div>

  )
}

export default ContactMeLink