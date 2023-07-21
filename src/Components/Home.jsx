import React from 'react'
import { HeroImage } from '../assets/index'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className=' h-screen w-full flex  '>
      <div className=' max-w-screen-xl mx-auto w-full h-full  p-4 flex flex-col md:flex-row justify-around items-center'>
        <div className=' md:w-3/4'>
          <h2 className=' uppercase font-bold text-white text-5xl leading-snug'>I am Full Stack Developer</h2>
          <p className='text-white-600 text-base py-4  mx-auto'> Hi...<br /> My name is Mercy and I am self-taught software developer with two years of experience. My passion lies in web development, where I bring designs to life by building intuitive user interfaces using web technologies such as React, Tailwind and Next.js.</p>
          <Link to="portfolio" smooth duration={500}>
            <div className="group flex items-center justify-center mt-8 bg-gradient-to-r from bg-orange-700 to-orange-600 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              Portfolio
              <span className='-rotate-90 duration-100 ease-in group-hover:rotate-0'><MdKeyboardDoubleArrowRight size={25} /></span></div>
          </Link>
        </div>
        <div className=' w-full  mx-auto overflow-hidden '>
          <img src={HeroImage} alt='myprofile' className=' hidden md:flex md:pt-20 rounded-2xl mx-auto  md:w-[300px]' />
        </div>
      </div>
    </div>
  )
}
export default Home