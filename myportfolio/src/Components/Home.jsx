import React from 'react';
import image from '../Image/image.png';
import {MdOutlineKeyboardDoubleArrowRight}  from 'react-icons/md';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name='home'  className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            I'm a Front-end Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
           I have strong skills in HTML, CSS, JavaScript, and React. I have hands-on experience in creating responsive and user-friendly websites using these technologies. I have a good understanding of web development principles and best practices. I am a quick learner and enjoy staying up-to-date with the latest trends and technologies in the industry. I am a strong team player and can communicate effectively with other developers and stakeholders to ensure successful project outcomes .
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                 <MdOutlineKeyboardDoubleArrowRight size={25} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>

        <div>
        <img src={image} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
