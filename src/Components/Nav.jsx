import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinksdata } from '../Constants';
import { logo } from '../assets/index';
import { Link } from 'react-scroll';

const Nav = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center w-full px-4 text-gray-400 '>
      {/* Navbar */}
      <div className='flex justify-between items-center pt-2'>
        <img src={logo} alt='my profile' className='w-[70px] rounded-full' />
        <h1 className='text-xl font-titleFont ml-3 static'>My Portfolio</h1>
      </div>
      <ul className='hidden md:flex '>
        {navLinksdata.map(({ id, title, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-orange-500 duration-200"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={25} style={{ color: '#fff' }} /> : <FaBars size={25} />}

        {/* Mobile Menu */}
        {nav && (
          <div className='fixed top-0 left-0 w-full h-screen bg-neutral-800'>
            <ul className='flex flex-col justify-center items-center h-full'>
              {navLinksdata.map(({ id, title, link }) => (
                <li key={id}
                  className='px-4 cursor-pointer capitalize py-3 text-2xl'>
                  <Link onClick={() => setNav(!nav)}
                    to={link}
                    smooth duration={500}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
