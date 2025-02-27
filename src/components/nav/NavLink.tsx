'use client'
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';
interface NavLinkProps {
  name: string;
}
const NavLink = ({
  name,
}: NavLinkProps) => {
  const nameWithoutPrefix = name.replace('_', '');
  const pathname = usePathname();
  const href = (
  ) => {
    if (nameWithoutPrefix === 'home') {
      return '/';
    }
    return `/${nameWithoutPrefix}`;
  }
  const isActivePath = () => {
    if (pathname === '/') {
      return nameWithoutPrefix === 'home';
    }
    return pathname.includes(nameWithoutPrefix);
  }
  const activePathStyle = isActivePath() ? 'text-secondary-white' : 'text-secondary';
  const lastLink = nameWithoutPrefix === 'projects'

  return (
    <li className="text-secondary py-4 px-6 relative group">
      <Link className={`${activePathStyle}`} href={href()}>
        {name}
      </Link>
      <div className='absolute left-0 bottom-0 top-0 w-0.5 bg-line' />
      {lastLink && <div className='absolute right-0 bottom-0 top-0 w-0.5 bg-line' />}
      {isActivePath() && <div className="absolute bottom-0 left-0.5 right-0 bg-accent-orange h-1 " />}
    </li>
  )
}

export default NavLink