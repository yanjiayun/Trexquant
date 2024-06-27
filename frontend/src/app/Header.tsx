import React from 'react';
import Image from 'next/image';
import { NameAndLogo } from './icons/NameAndLogo';
import { LargeLogo } from './icons/LargeLogo';


const Header = () => {
  return (
    <nav className="bg-black text-white px-12 h-[120px] lg:h-[98px] grid">
      <div className='max-w-screen-2xl my-auto'>

        <section className="hidden lg:block">
          <div className='flex'>
            <NameAndLogo />
            <h1 className='text-4xl font-bold mt-1 ms-auto text-white'>Jiayun&apos;s To-dos</h1>
          </div>
        </section>

        <section className="block lg:hidden">
          <LargeLogo />
        </section>
        
      </div>
    </nav>
  );
};

export default Header;