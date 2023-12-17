import React from 'react'
import NavLogo from '../assets/Logo.png'
import { navLinks } from '../constants/constants'
import hamburger from '../assets/hamburger.svg'

const Nav = () => {
  return (
    <header className='bg-primary'>
      <nav className='max-container padding-n flex justify-between items-center'>
        <a href='/'>
          <img
            src={NavLogo}
            alt='logo'
            height={25}
            className='shrink-0'
          />
        </a>
        <ul className='flex items-start gap-7 mobile:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-inter text-sm leading-normal text-white font-medium'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden mobile:block'>
          <img
            src={hamburger}
            alt="Menu"
            width={31}
            height={24}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav