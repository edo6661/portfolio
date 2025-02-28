import { Facebook, Github, Linkedin } from 'lucide-react'
import React from 'react'
export const navLinks = ["_home", "_about-me", "_projects"]
const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="flex justify-between items-center text-secondary">
        <div className='flex items-center'>
          <span
            className='border-r border-line py-4 px-6 md:block hidden'
          >
            find me in:
          </span>
          <a href="https://www.linkedin.com/in/muhammad-ridho-81890720a/" target="_blank" rel="noreferrer"
            className='border-r border-line py-4 px-4 block hover:bg-[#1e2d3d74] hover:text-secondary-white transition-colors duration-200'

          >
            <Linkedin />
          </a>
          <a href="https://facebook.com/tembemzo" target="_blank" rel="noreferrer"
            className='border-r border-line py-4 px-4 block hover:bg-[#1e2d3d74] hover:text-secondary-white transition-colors duration-200'

          >
            <Facebook />
          </a>

        </div>
        <div>
          <a href="https://facebook.com/tembemzo" target="_blank" rel="noreferrer"
            className='border-l border-line py-4 px-4 hover:bg-[#1e2d3d74] hover:text-secondary-white transition-colors duration-200 flex items-center gap-4'
          >
            <span>
              @edo6661
            </span>
            <Github />
          </a>
        </div>
      </div>
    </footer>)
}

export default Footer