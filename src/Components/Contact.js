import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { contact } from "../assets";

const Contact = () => {
    return (
        <div id="contact" className="w-full ">
            <div className="max-w-screen-xl mx-auto px-8 py-20 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-orange-500 font-bold inline border-b-4 border-gray-400">
                    contact
                </h2>

                <div className="flex flex-col md:flex-row gap-3 md:gap-16 shadow-xl shadow-brown-300 bg-transparent mt-4">
                    <div className="w-full md:w-1/2 h-full rounded-xl p-4">
                        <img
                            src={contact}
                            alt="lady with laptop"
                            className="rounded-xl"
                        />
                        <p className="pt-2 pb-8">
                            I am open to talk regarding freelancing or full-time
                            opportunities. Feel free to contact me using your preferred
                            medium.
                        </p>

                        <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                            <div className="flex items-center justify-center rounded-full shadow-md shadow-orange-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                                <FaLinkedin size={25} />
                            </div>
                            <div className="flex items-center justify-center rounded-full shadow-md shadow-orange-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                                <FaTwitter size={25} />
                            </div>
                            <div className="flex items-center justify-center rounded-full shadow-md shadow-orange-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                                <FaGithub size={25} />
                            </div>
                        </div>
                    </div>

                    {/* form stuff  */}
                    <div className="w-full md:w-1/2 h-full rounded-xl p-4">
                        <div className="p-4 text-left">
                            <form
                                action="https://getform.io/f/5f30f3eb-c203-44da-a3bb-6e8d8d5e90b7"
                                method="POST"
                                className=" flex flex-col  w-full md:w-1/2">

                                <label className="capitalize text-sm py-2 text-blue-600 font-medium">
                                    name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    
                                    className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                                />
                                <label className="capitalize text-sm py-2 text-blue-600 font-medium">
                                    phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 "
                                />

                                <label className="capitalize text-sm py-2 text-blue-600 font-medium">
                                    email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                                />
                                <label className="capitalize text-sm py-2 text-blue-600 font-medium">
                                    message
                                </label>
                                <textarea
                                    name="message"
                                    rows="10"
                                    className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                                ></textarea>

                    <div className="flex items-center justify-center">
                        <button className="my-6 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                            send message
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div >
      </div >
    </div >
  );
};

export default Contact;
