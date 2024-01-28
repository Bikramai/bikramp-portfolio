import React from 'react'
import purpleDot from '../assets/png/purple-circle.png';
import { useThemeContext } from '../Context/ThemeContext';
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren } from '../../utils/motion'

const Experience = () => {
    const { isDarkMode } = useThemeContext();

    return (
        <div className='container overflow-hidden pt-[5rem] pb-[5rem]' id='experience'>
            <motion.div variants={staggerChildren} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}>
                <div className="flex justify-center w-full">
                    <span className="text-2xl md:text-3xl text-center popins_semibold">Experience and Education</span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <motion.Card variants={fadeIn("left", "tween", 1 * .5, 1)}>
                        <div className='mt-10 lg:mt-48'>
                            <h5 className='popins_medium max-lg:text-[16px]'>January-2022 - Present(Self-Paced)</h5>
                            <h2 className={`text-xl lg:text-2xl popins_medium mb-3 ${isDarkMode ? 'text_dark' : 'text_primary'}`}>Small Business Owner</h2>
                            <h3 className={`text-xl lg:text-2xl popins_medium mb-3 ${isDarkMode ? 'text_dark' : 'text_primary'}`}>Abode Zen</h3>
                            <p className='max-md:text-sm text-start'>Started on Amazon.com selling my Home and office decoration products. I believe that your home should be a place of peace, comfort, and relaxation that bring a touch of zen to your interiors, helping to create the perfect atmosphere for both relaxation and productivity.</p>
                        </div>
                        <div className='mt-10 lg:mt-48'>
                            <h5 className='popins_medium max-lg:text-[16px]'>Octomber-2023 - Present. Coding Temple.</h5>
                            <h2 className={`text-xl lg:text-2xl popins_medium mb-3 ${isDarkMode ? 'text_dark' : 'text_primary'}`}>Software Engineer Trainee</h2>
                            <p className='max-md:text-sm text-start '>I am a Junior Software Engineer with a strong foundation acquired from a 10-week Software Engineering class. I have practical experience in a variety of programming languages and frameworks, including Python, JavaScript, TypeScript, Flask, Django and React.</p>
                        </div>
                    </motion.Card>
                    <div className='hidden md:flex justify-center mt-16 relative'>
                        <div className="h-100 bg-[#d3d3d3]" style={{ width: '2px' }}>
                        </div>
                        <img src={purpleDot} className='h-5 w-5 absolute  ' alt="" />
                        <img src={purpleDot} className='h-5 w-5 absolute top-[33%] ' alt="" />
                        <img src={purpleDot} className='h-5 w-5 absolute top-[66%]' alt="" />
                        <img src={purpleDot} className='h-5 w-5 absolute top-[99%]' alt="" />
                    </div>
                    <motion.Card variants={fadeIn("right", "tween", 1, 1.5)}>
                        <div className='mt-10 lg:mt-16'>
                            <h5 className='popins_medium max-lg:text-[16px]'>February-2023 - Continue(Self-Paced)</h5>
                            <h2 className={`text-xl lg:text-2xl popins_medium mb-3 ${isDarkMode ? 'text_dark' : 'text_primary'}`}>I contribute to open source projects</h2>
                            <p className='max-md:text-sm text-start'>As an avid GitHub open source contributor, I'm passionate about collaborative development and community-driven initiatives. Committed to fostering innovation and accessibility, my diverse contributions span various projects, reflecting my dedication to sharing knowledge and advancing technology collectively. Actively engaged in the open source community, I strive to provide meaningful solutions, address issues, and collaborate with like-minded developers to create impactful software for a broader audience.</p>
                        </div>
                        <div className='mt-10 lg:mt-44'>
                            <h5 className='popins_medium max-lg:text-[16px]'>February-2023 - Continue</h5>
                            <h2 className={`text-xl lg:text-2xl popins_medium mb-3 ${isDarkMode ? 'text_dark' : 'text_primary'}`}>BootStrap/Tailwind Css Developer</h2>
                            <p className='max-md:text-sm text-start'>
                                I'm a developer experienced in creating visually appealing and responsive web designs by utilizing Bootstrap and Tailwind CSS to enhance user interface aesthetics and usability.</p>
                        </div>

                        <div className='mt-10 lg:mt-44'>
                            <h5 className='popins_medium max-lg:text-[16px]'>Education</h5>
                            <h2 className={`text-xl lg:text-2xl popins_medium mb-3 ${isDarkMode ? 'text_dark' : 'text_primary'}`}>Full-Stack Developer</h2>
                            
                            <p className='max-md:text-sm text-start'>Coding Temple, Certificate-Full Stack Engineer</p>
                            <p className='max-md:text-sm text-start'>Google, Certificate-Data Analytics</p>
                            <p className='max-md:text-sm text-start'>Fortis College (National Institute of Technology), Degree Associate - Informational Technology
</p>
                        </div>
                    </motion.Card>
                </div>
            </motion.div>
        </div>
    )
}

export default Experience;