import React from 'react'
import { Link } from 'react-scroll'
import { MdExpandMore } from 'react-icons/md'

const About = () => {
    return (
        <div id='about' className='w-full'>
            <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
                <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-orange-500 font-bold inline border-b-4 border-gray-400">
                    me
                </h2>
                <div className="shadow-xl shadow-orange-300 my-8 px-8">
                    <p className="py-4 max-w-2xl mx-auto">
                        As a front-end developer, I specialize in using modern technologies
                        to build robust and scalable applications. React is my go-to framework
                        for building interactive and dynamic user interfaces, while Tailwind CSS
                        enables me to create beautiful and responsive designs efficiently. I also
                        love working with Next.js, which allows me to build performant and
                        SEO-friendly web applications with ease
                    </p>
                    <p className="py-4 max-w-2xl mx-auto">
                        One of the aspects of front-end development that I find fascinating is the
                        ability to continuously learn and stay up-to-date with the rapidly evolving
                        technology landscape. I am always on the lookout for new trends and best practices
                        to enhance my skills and deliver the best possible solutions for my projects.
                        Apart from my technical skills, I also value collaboration and communication.
                        Working in a team allows me to combine my creativity with others' expertise,
                        resulting in well-rounded and successful projects


                    </p>
                    <p className="py-4 max-w-2xl mx-auto">
                        As I continue my journey as a front-end developer, I look forward to taking on
                        new challenges and expanding my knowledge in this ever-evolving field. I am
                        excited about the endless possibilities that lie ahead, and I am eager to
                        create innovative and impactful web applications that make a difference in people's
                    </p>
                </div>

                <div className="flex items-center justify-center gap-10">
                    <Link href="/public/resume.pdf" download={true}>
                        <div className="group flex items-center justify-center my-8 bg-orange-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                            resume
                            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                                <MdExpandMore size={25} />
                            </span>
                        </div>
                    </Link>

                    <Link href="/#experience">
                        <div className="group flex items-center justify-center my-8 bg-orange-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                            my portfolio
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