import React from 'react'
import { Link } from 'react-scroll'
import { MdExpandMore } from 'react-icons/md'

const About = () => {
    return (
        <div id='about' className='w-full'>
            <div className='max-w-screen-xl mx-auto m py-0 md:py-16 text-center md:text-left'>
                <h2 className="text-4xl md:text-6xl tracking-wider uppercase text-orange-500 font-bold inline border-b-4 border-gray-400">
                    about me
                </h2>
                <div className="shadow-xl shadow-orange-300 my-8 py-4 px-2 md:px-4">
    <p className="py-4 max-w-2xl mx-auto">
        As a front-end developer, I excel in crafting responsive designs, optimizing interfaces, and enhancing organizational efficiency. Proficient in React, Vue, HTML/CSS, and JavaScript, I also have experience with databases such as MySQL, MS SQL, and MongoDB, working with MVC architecture, IIS, Apache, and tools like WebPack and Browserify. Collaboration and communication are vital in my work, enabling me to combine creativity with others' expertise for successful projects.
    </p>
    <p className="py-4 max-w-2xl mx-auto">
        Continuing my journey excites me as a front-end developer, seeking new challenges and expanding my knowledge. The endless possibilities inspire me to create innovative and impactful web applications, making a positive difference in people's lives.
    </p>
</div>

                <div className="flex items-center justify-center gap-10">
                    <a
                        href='/resume.pdf' // Replace this with the correct path to your resume PDF within the "public" folder
                        download
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='group flex items-center justify-center my-8 bg-orange-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
                            resume
                            <span className='-rotate-90 duration-100 ease-in group-hover:rotate-0'>
                                <MdExpandMore size={25} />
                            </span>
                        </div>
                    </a>
                    <Link to="portfolio" smooth duration={500}>
                        <div className="group flex items-center justify-center my-8 bg-orange-500 text-white px-8 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                            projects
                            <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                                <MdExpandMore size={25} />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About