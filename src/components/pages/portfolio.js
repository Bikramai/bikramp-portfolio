/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerChildren } from '../../utils/motion'
import { useThemeContext } from '../Context/ThemeContext';
import { Modal } from 'antd';

const projectsData = [
    {
        cover: require('../assets/about/fashionstore.png'),
        title: "Fashion Clothing Store",
        description: "Experience the efficiency of Python paired with React and Google Firebase in this interactive todo application. Seamlessly manage tasks and explore the synergy of frontend and backend technologies.",
        url: "https://shopping-cart-3450f.web.app",
        category: "react"
    },
    {
        cover: require('../assets/about/gamehub.png'),
        title: "Game Hub App",
        description: "Delve into the world of books with this React-based Ecommerce Website, powered by Python and Google Firebase. Explore a seamless online shopping experience with dynamic features and secure transactions.",
        url: "https://game-app-orcin.vercel.app/",
        category: "react"
    },
    {
        cover: require('../assets/about/abodezen.png'),
        title: "Abode zen website",
        description: "Using the CRUD operations and Orders utilzing the API routes to Flask backend. Discover a harmonious blend of frontend and backend technologies, creating a captivating Ecommerce platform for music enthusiasts.",
        url: "https://abodezen-shop.web.app",
        category: "fullStack"
    },
    {
        cover: require('../assets/about/abodezen1.png'),
        title: "Abode Zen Store",
        description: "Enhance your language skills with this Python-based Word Counter built on React and Google Firebase. Explore the intricacies of text analysis and witness the power of Python in creating useful and engaging applications.",
        url: "https://www.abodezen.com",
        category: "react"
    },
    {
        cover: require('../assets/about/myshopbp.png'),
        title: "CRUD Operation",
        description: "Unlock the potential of Flask with this CRUD Operation project. Full CRUD operations to our Flask backend along with hosting our app, Setup Order Component to Display Orders, Add Update Quantity Functionality, Add Delete Functionality, Deploy App. This application showcases the versatility of Flask in creating dynamic and interactive user interfaces.",
        url: "https://myshop-shopbp.onrender.com",
        category: "python"
    },
    {
        cover: require('../assets/about/bshopify.png'),
        title: "Cloud Hosting Website",
        description: "Crafted with HTML, CSS, and JavaScript, this application showcases it's ability to create responsive and user-friendly features.",
        category: "react"
    },
    {
        cover: require('../assets/about/shop.png'),
        title: "Shop Store Website",
        description: "Stay informed with the News-Api Website built on React and Google Firebase. Explore the seamless integration of frontend technologies, providing a user-friendly interface to access the latest news.",
        url: "https://ranger134-shopbp.web.app/shop",
        category: "fullStack"
    },
    {
        cover: require('../assets/about/portfolio.png'),
        title: "Portfolio Website",
        description: "Portfolio Personal Website crafted with HTML, TailwindCSS, JavaScript. This Full Stack project offers a visually appealing and interactive platform to explore and discover new portfilio.",
        category: "react"
    },
    {
        cover: require('../assets/about/storefront.png'),
        title: "StoreFront App",
        description: "Experience the simplicity and efficiency of a Calculator built with HTML, CSS, and JavaScript. This Full Stack project showcases the versatility of web development in creating practical and useful applications.",
        category: "python"
    },
];
export default function portfolio() {
    const { isDarkMode } = useThemeContext();
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showImagePreview, setShowImagePreview] = useState(false);
    const [showAll, setShowAll] = useState(false);


    const filteredProjects = selectedCategory === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory
        );


    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setShowImagePreview(true);
    }

    return (
        <div className='container pt-[5rem] pb-[5rem]' id='portfolio'>
            <div className="flex flex-col items-center justify-center">
                <motion.h1 className='popins_semibold text-3xl' variants={fadeIn("up", "tween", 0.5, 1.3)}>
                    Featured Portfolios
                </motion.h1>
                <motion.p variants={fadeIn("down", "tween", 0.4, 1)} className='text-center popins_regular text-sm'>Due to the client's policy. I can't show all of the projects that I've done.</motion.p>
            </div>
            <div className='px-3'>
                <motion.div variants={fadeIn("down", "tween", 0.8, 1)} >
                    <div className="flex md:justify-center flex-wrap max-md:text-sm gap-[12px] md:gap-[1.5rem]">
                        <button onClick={() => setSelectedCategory('all')} className={`${isDarkMode ? 'bg_dark' : 'bg_primary'} text_white rounded-full px-3 py-2`}>All Projects</button>
                        <button onClick={() => setSelectedCategory('python')} className={`${isDarkMode ? 'bg_dark' : 'bg_primary'} text_white rounded-full px-3 py-2`}>Python</button>
                        <button onClick={() => setSelectedCategory('fullStack')} className={`${isDarkMode ? 'bg_dark' : 'bg_primary'} text_white rounded-full px-3 py-2`}>Full Stack</button>
                        <button onClick={() => setSelectedCategory('react')} className={`${isDarkMode ? 'bg_dark' : 'bg_primary'} text_white rounded-full px-3 py-2`}>React</button>
                    </div>
                </motion.div>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-3 justify-around'>
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="p-3 rounded-2xl overflow-hidden" style={{
                            boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                        }}>
                            <img
                                src={project.cover}
                                alt={project.title}
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleImageClick(project.cover)}
                                className='w-100 h-52 object-cover rounded-lg'
                            />
                            <h2 className='popins_semibold text-xl mt-4 mb-2'>{project.title}</h2>
                            <p className='text-start line-clamp-4'>{project.description}</p>
                            <div className="flex justify-end m-4">
                                {project.url && (
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className={`bg_lightSecondary text_white no-underline rounded-xl px-4 py-2`}>Explore</a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                open={showImagePreview}
                onCancel={() => setShowImagePreview(false)}
                footer={null}
                width="80%"
                centered
            >
                <img src={selectedImage} alt={selectedImage} style={{ width: '100%' }} />
            </Modal>
        </div>
    )
}
