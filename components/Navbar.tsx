import { NAV_LINKS } from '@/constants';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Buttons from './Buttons';

const Navbar = () => {
  return (
    <nav
      className="border-2 border-black flexBetween
     max-container padding-container py-5 relative z-30"
    >
      <Link href={"/"}>
        <Image
          src="/hilink-logo.svg"
          alt="logo"
          height={30}
          width={70}
        />
      </Link>
      
      <ul className='hidden lg:flex gap-10 h-full'>
        {
            NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key}
                className='regular-16 text-gray-50 flexCenter 
                hover:font-bold cursor-pointer transition-all'>
                {link.label}
                </Link>
            ))
        }
      </ul>

      <Buttons />
    </nav>
  );
}

export default Navbar