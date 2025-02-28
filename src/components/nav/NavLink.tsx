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

    <Link
      href={href()}
      className={`${activePathStyle} py-4 px-6 relative hover:bg-[#1e2d3d74] hover:text-secondary-white transition-colors duration-200`}
    >
      <span>
        {name}
      </span>
      <div className='absolute left-0 bottom-0 top-0 w-0.5 bg-line' />
      {lastLink && <div className='absolute right-0 bottom-0 top-0 w-0.5 bg-line' />}
      {isActivePath() && <div className="absolute bottom-0 left-0.5 right-0 bg-accent-orange h-0.5 " />}
    </Link>
  )
}


export const NavLinkFooter = ({
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

  return (

    <Link
      href={href()}

      className={`px-6 py-4 border-b border-line w-full ${activePathStyle} hover:bg-[#1e2d3d74] hover:text-secondary-white transition-colors duration-200`}
    >
      {name}
    </Link>
  )
}


export default NavLink