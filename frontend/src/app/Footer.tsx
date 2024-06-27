import React from 'react';
import { EmailIcon } from './icons/EmailIcon';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';

const Footer: React.FC = () => {
  return (
    <footer className="px-12 fixed bottom-0 left-0 w-full h-48 lg:h-16 bg-black text-white justify-between">
      <section className='max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 relative px-10 lg:px-0 my-0 lg:my-4 h-8'>
        
        <div className='text-center my-4 lg:text-start lg:mx-0 lg:my-0 col-span-1 mx-auto lg:m-16 order-3 lg:order-1 w-full'>©2024 All Rights Reserved</div>
        
        <div className='mx-auto mt-4 lg:mt-0 col-span-1 grid grid-cols-3 gap-4 ms-auto order-1 lg:order-2'>
          <a href="https://github.com/yanjiayun"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/jiayun-yan-269044176/"><LinkedinIcon /></a>
          <EmailIcon />
        </div>

        <div className='mt-4 lg:mt-0 col-span-1 mx-auto lg:mr-16 order-2 lg:order-3 w-full'>
          <div className='grid grid-cols-3 gap-2'>
            <p className='mx-auto'>
              Contact Us
            </p>
            <p className='mx-auto'>
              Privacy Policies
            </p>
            <p className='mx-auto'>
              Help
            </p>
          </div>
        </div>

      </section>
    </footer>
  );
};

export default Footer;