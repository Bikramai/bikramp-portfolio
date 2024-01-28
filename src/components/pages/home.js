/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CV from '../assets/CV/Bikram Phurumbo Resume -2024.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion'
import Type from './Type';
import { useThemeContext } from '../Context/ThemeContext';
import { Link as ScrollLink } from 'react-scroll';
import html from '../assets/png/html.png'
import css from '../assets/png/css.png'
import js from '../assets/png/javascript.png'
import sql from '../assets/png/sql.png'
import react from '../assets/png/react.png'
import python from '../assets/png/python.png'
import django from '../assets/png/django.png'
import java from '../assets/png/java.png'
import tailwindcss from '../assets/png/tailwindcss1.png'
import flask from '../assets/png/flask.png'
import nodejs from '../assets/png/nodejs.png'
import typescript from '../assets/png/typescript.png'
import sqlalchemy from '../assets/png/sqla.png'
import firebase from '../assets/png/firebase.png'
import bootstrap from '../assets/png/bootstrap.jpg'
import post from '../assets/png/post.jpg'
import nosql from '../assets/png/nosql.png'
import json from '../assets/png/json.png'
import git from '../assets/png/git.png'
import github from '../assets/png/github.png'
import vscode from '../assets/png/vscode.png'




export default function Home() {
    const { isDarkMode } = useThemeContext();
    const [activeButton, setActiveButton] = useState('');

    const handleActive = (event) => {
        if (activeButton === event) {
            setActiveButton('');
            fetch(CV)
                .then((response) => {
                    if (response.ok) {
                        return response.blob().then((blob) => {
                            const url = window.URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = 'Bikram.pdf';
                            a.click();
                            window.URL.revokeObjectURL(url);
                        });
                    }
                })
                .catch((error) => {
                    console.error('Error fetching the PDF:', error);
                });
        } else {
            setActiveButton(event);
        }
    }

    const isActive = (elementId) => {
        return activeButton === elementId ? 'active' : '';
    }

    useEffect(() => {
        setActiveButton('download')
    }, []);
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
        })
    }, [])

    return (
        <div className={`container pt-[4rem] pb-[4rem] h-full`}>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show">
                <div className="flex items-center justify-center gap-5 max-md:flex-col-reverse md:justify-between w-full">
                    <div className='flex flex-col w-full md:w-[60%] lg:w-[50%]'>
                        <motion.div
                            variants={fadeIn("left", "tween", 1, 1,)}
                            viewport={{ once: false, amount: 0.25 }}
                        >
                            <h1 className='text-2xl md:text-3xl mb-3'>Hi, There! <span className="wave"> 👋</span></h1>
                            <h1 aria-label="Hi! I'm a developer" className={`${isDarkMode ? 'text_dark' : 'text_primary'} popins_semibold text-3xl`}>I'm Bikram Phurumbo</h1>
                            <span className={`typewriter popins_bold text-lg md:text-xl ${isDarkMode ? 'text_dark' : 'text_primary'}`}><Type /></span>
                            <p className='mt-3 max-lg:text-sm text-start'>
                                I am a passionate enthusiast Full Stack Developer.
                                I am passionate about bringing digital visions to life. 
                                With expertise in both front-end and back-end technologies, 
                                I thrive on the end-to-end process of crafting innovative web solutions. 
                                My commitment to staying abreast of industry trends ensures that 
                                my work is not only technically proficient but also aligned with the latest advancements. 
                                Whether designing intuitive user interfaces or optimizing server performance, 
                                I approach each project with a blend of creativity and technical precision.</p>
                            <div className='flex mt-[1rem] gap-[1rem] md:gap-[2rem] justify-center md:justify-start'>
                                <button className={`text_white rounded-md ${isDarkMode ? "bg-[#919090]" : 'bg_primary'} px-[1rem] py-[.75rem] md:px-[1.5rem] max-md:text-sm ${isActive('download')}`} id='download' onClick={() => handleActive('download')}>Download CV</button>
                                <ScrollLink to='contact' duration={500} smooth={true}>
                                    <button className={`text_black bg-gray-300 rounded-md px-[1rem] py-[.75rem] md:px-[1.5rem] max-md:text-sm`}>Have a Project </button>
                                </ScrollLink>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full flex justify-center md:w-[40%] lg:w-[50%]">
                        <motion.div variants={fadeIn("down", "tween", 0.3, 1)}>
                            <div className="bikramp_img"></div>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    variants={fadeIn("left", "tween", 1, 1, 1,)}
                    viewport={{ once: false, amount: .25 }}
                >
                    <div className="flex items-center max-lg:flex-col home_icons gap-4 mt-[5rem]">
                        <span className="popins_semibold text-2xl">Tech Stacks</span>
                        <span className="hidden lg:block h-[3rem] rounded-lg w-[4px] bg-[#a7aab3]"></span>
                        <div className='flex lg:justify-start gap-x-[2rem] gap-y-[2rem] md:gap-x-[4rem] md:gap-y-[1.5rem] lg:gap-[1.5rem] items-center w-[90%] md:w-[70%] lg:w-[50%] justify-center flex-wrap'>
                            <img className='h-[3rem] w-auto object-cover' src={html} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={css} alt="x" />
                            <img className='h-[3rem] w-auto object-cover' src={js} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={typescript} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={java} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={tailwindcss} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={bootstrap} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={nodejs} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={react} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={python} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={django} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={flask} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={sql} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={sqlalchemy} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={firebase} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={nosql} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={post} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={json} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={git} alt="" />
                            <img className='h-[3rem] w-auto object-cover' src={github} alt="" />
                            
                            <img className='h-[3rem] w-auto object-cover' src={vscode} alt="" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
