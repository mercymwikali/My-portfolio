import React from "react";
import { hospital, hydra } from '../assets/index'
import { insurance } from '../assets/index'
import { Grocery } from '../assets/index'
import { movies } from '../assets/index'
import { judiciary } from "../assets/index";
import { MdExpandMore } from "react-icons/md";
// import { Link } from "react-scroll";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Grocery-website",
      src: Grocery,
      url: "https://havilapro.com/",
    },
    {
      id: 2,
      title: "Movie-App",
      src: movies,
      url: "https://movie-app-tan-iota.vercel.app/-node",
    },
    {
      id: 3,
      title: "Hydra-landing-Page",
      src: hydra,
      url: "https://hydra-landing-iota.vercel.app/",
    },
    {
      id: 4,
      title: "insurance-landing",
      src: insurance,
      url: "https://insurance-landing.vercel.app/",
    },
    {
      id: 5,
      title: "Judiciary prototype Staff Portal",
      src: judiciary,
      url: "https://judiciary-iota.vercel.app/",
    },
    {
      id: 6,
      title: "Hospital System",
      src: hospital,
      url: "https://hospital-mgt.vercel.app/addPatient",
    },
  ];

  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl tracking-wider uppercase text-orange-500 font-bold inline border-b-4 border-gray-400">
          portfolio
        </h2>
        <p className="py-6 max-w-lg font-medium">
          Check out my portfolio for interactive interfaces. </p>.

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, src, url }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <img
                  src={src}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://github.com/mercymwikali?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group flex items-center justify-center my-8 bg-orange-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
