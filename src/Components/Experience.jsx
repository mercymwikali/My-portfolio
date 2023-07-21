import React from "react";

import { css } from "../assets/index";
import { tailwind } from "../assets/index";
import { html } from "../assets/index";
import { javascript } from "../assets/index";
import { react } from "../assets/index";
import { node } from "../assets/index";
import { nextjs } from "../assets/index";
import { github } from "../assets/index";


const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "HTML",
            src: html,
        },
        {
            id: 2,
            title: "CSS",
            src: css,
        },
        {
            id: 3,
            title: "JavaScript",
            src: javascript,
        },
        {
            id: 4,
            title: "React",
            src: react,
        },
        {
            id: 5,
            title: "Next JS",
            src: nextjs,
        },
        {
            id: 6,
            title: "Tailwind",
            src: tailwind,
        },
        {
            id: 8,
            title: "Node JS",
            src: node,
        },
        {
            id: 9,
            title: "Github",
            src: github,
        },
    ];

    return (
        <div id="experience" className="w-full">
            <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl  tracking-wider uppercase text-orange-500 font-bold inline border-b-4 border-gray-400">
                    experience
                </h2>
                <p className="py-8 max-w-lg">
                    These are the web technologies I have worked with;
                </p>

                <div className="grid lg:grid-cols-4 gap-8">
                    {experiences.map(({ id, title, src }) => (
                        <div
                            key={id}
                            className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-green-400 even:shadow-yellow-400"
                        >
                            <img src={src} width="64px" height="64px" alt={title} />
                            <h3 className="font-light">{title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;