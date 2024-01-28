/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import globe from '../assets/png/globe.png'
import 'aos/dist/aos.css';
import { useThemeContext } from '../Context/ThemeContext';

export default function About() {
    const { isDarkMode } = useThemeContext();


    return (
        <div className='container pt-[5rem] pb-[5rem]' id='about'>
            <div className="flex mb-5 justify-center">
                <span className='popins_semibold text-3xl'> Specialized In</span>
            </div>
            <div className='flex flex-wrap justify-center w-full gap-3'>
                <div className={`hover:bg-purple-600 w-full sm:w-[48%] min-h-[17rem] lg:w-[40%] xl:w-[24%] h-full hover:text-white cursor-pointer rounded-lg p-2 flex flex-col justify-center gap-3 items-center`} style={{
                    boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                }}>
                    <div className='bg-[#F5F3FE] rounded-xl h-12 w-12 flex justify-center items-center'>
                        <img src={globe} alt="image not found" />
                    </div>
                    <span className='popins_semibold text-lg md:text-xl text-center'>Full Stack Engineer</span>
                    <p className='text-center popins_regular line-clamp-5'>
                        I am a Full stack developer, crafting dynamic and user-friendly web interfaces with expertise in React, JavaScript, Python and other technologies.
                    </p>
                </div>
                <div className={`hover:bg-purple-600 w-full sm:w-[48%] min-h-[17rem] lg:w-[40%] xl:w-[24%] h-full hover:text-white cursor-pointer rounded-lg p-2 flex flex-col justify-center gap-3 items-center`} style={{
                    boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                }}>
                    <div className='bg-[#F5F3FE] rounded-xl h-12 w-12 flex justify-center items-center'>
                        <img src={globe} alt="image not found" />
                    </div>
                    <span className='popins_semibold text-lg md:text-xl text-center'>Entrepreneurship</span>
                    <p className='text-center popins_regular line-clamp-5'>
                        I am an entrepreneur, creating innovative and user-friendly web interfaces. I navigate the dynamic digital landscape to craft cutting-edge solutions.
                    </p>
                </div>
                <div className={`hover:bg-purple-600 w-full sm:w-[48%] min-h-[17rem] lg:w-[40%] xl:w-[24%] h-full hover:text-white cursor-pointer rounded-lg p-2 flex flex-col justify-center gap-3 items-center`} style={{
                    boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                }}>
                    <div className='bg-[#F5F3FE] rounded-xl h-12 w-12 flex justify-center items-center'>
                        <img src={globe} alt="image not found" />
                    </div>
                    <span className='popins_semibold text-lg md:text-xl text-center'>Database Management</span>
                    <p className='text-center popins_regular line-clamp-5'>
                        Proficient in NoSQL and PostgreSQL, specializing in effective database management for robust applications.
                    </p>
                </div>
                <div className={`hover:bg-purple-600 w-full sm:w-[48%] min-h-[17rem] lg:w-[40%] xl:w-[24%] h-full hover:text-white cursor-pointer rounded-lg p-2 flex flex-col justify-center gap-3 items-center`} style={{
                    boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                }}>
                    <span className='popins_semibold text-lg md:text-xl text-center'>Creative Frameworks</span>
                    <p className='text-center popins_regular line-clamp-5'>
                        Proficient in Bootstrap, Django, Flask, API and Flask-RESTful, utilizing creative frameworks for dynamic and responsive web development.
                    <div className='bg-[#F5F3FE] rounded-xl h-12 w-12 flex justify-center items-center'>
                        <img src={globe} alt="image not found" />
                    </div>
                    </p>
                </div>
            </div>
        </div>
    )
}
