import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { contact } from "../assets";

const SocialLink = ({ child, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full shadow-md shadow-orange-500 hover:scale-105 duration-200 p-3 cursor-pointer ou"
        >
            {child}
        </a>
    );
};

const Contact = () => {
    const socialinks = [
        {
            id: 1,
            child: <FaLinkedin size={25} />,
            href: "https://www.linkedin.com/in/mercy-mwikali-9b380a14b/",
        },
        {
            id: 2,
            child: <FaTwitter size={25} />,
            href: "https://twitter.com/mercymwikali",
        },
        {
            id: 3,
            child: <FaGithub size={25} />,
            href: "https://github.com/mercymwikali",
        },
    ];

    return (
        <div id="contact" className="w-full">
            <div className="max-w-screen-xl mx-auto md:px-8 py-20 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl tracking-wider uppercase text-orange-500 font-bold inline border-b-4 border-gray-400">
                    contact
                </h2>

                <div className="flex flex-col md:flex-row gap-3 md:gap-16 shadow-xl shadow-brown-300 bg-transparent mt-4">
                    <div className="w-full md:w-1/2 h-full rounded-xl md:p-4">
                        <img src={contact} alt="lady with laptop" className="rounded-xl" />
                        <p className="pt-2 pb-8">
                            I am open to talk regarding freelancing or full-time
                            opportunities. Feel free to contact me using your preferred
                            medium.
                        </p>

                        <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                            {socialinks.map((socialink) => (
                                <li key={socialink.id}>
                                    <SocialLink {...socialink} className="no-underline" />
                                </li>
                            ))}
                        </div>
                    </div>

                    {/* form stuff */}
                    <div className="w-full md:w-1/2 h-full rounded-xl md:p-4">
                        <div className="pt-4 md:p-4 text-left">
                            <form
                                action="https://getform.io/f/5f30f3eb-c203-44da-a3bb-6e8d8d5e90b7"
                                method="POST"
                                className="form-container flex flex-col md:flex-row md:flex-wrap w-full"
                            >
                                <div className="flex flex-col md:w-1/2 px-2">
                                    <label className="capitalize text-sm py-2 text-blue-600 font-medium">
                                        name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                                    />
                                </div>
                                <div className="flex flex-col md:w-1/2 px-2">
                                    <label className="capitalize text-sm py-2 text-blue-600 font-medium">
                                        phone
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                                    />
                                </div>
                                <div className="flex flex-col md:w-full px-2">
                                    <label className="capitalize text-sm py-2 text-blue-600 font-medium">
                                        email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                                    />
                                </div>
                                <div className="flex flex-col md:w-full px-2">
                                    <label className="capitalize text-sm py-2 text-blue-600 font-medium">
                                        message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="10"
                                        className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                                    ></textarea>
                                </div>
                                <div className="flex items-center justify-center md:w-full px-2">
                                    <button className="my-6 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                                        send message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;
