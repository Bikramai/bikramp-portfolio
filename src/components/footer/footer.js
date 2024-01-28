/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { useThemeContext } from '../Context/ThemeContext';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    const { isDarkMode } = useThemeContext();
    const date = new Date().getFullYear()

    return (
        <footer className={`${isDarkMode ? 'bg-[#1F293F]' : 'bg-[#eff1f3]'} py-3`}>
            <div className='container flex justify-between max-md:justify-center flex-wrap items-center gap-3'>
                <span className={`${isDarkMode ? 'text_lightSecondary' : 'text_black'} popins_regular text-center`}>CopyRight &copy;{ date } | Developed By <a href="" target='__blank' className={`${isDarkMode ? 'text_dark' : 'text_primary'} no-underline hover:underline text-lg popins_medium`}>Bikram Phurumbo</a></span>
                <div className='flex gap-3 items-center'>
                    <a className={`${isDarkMode ? 'text_lightSecondary' : 'text_secondary'} text-lg`} href="https://www.instagram.com/abodezen0/" target='__blank'>
                        <FaInstagram />
                    </a>
                    <a className={`${isDarkMode ? 'text_lightSecondary' : 'text_secondary'} text-lg`} href="https://github.com/Bikramai" target='__blank'>
                        <FaGithub />
                    </a>
                    <a className={`${isDarkMode ? 'text_lightSecondary' : 'text_secondary'} text-lg`} href="">
                        <FaTwitter />
                    </a>
                    <a className={`${isDarkMode ? 'text_lightSecondary' : 'text_secondary'} text-lg`} href="https://www.linkedin.com/in/bikramp/" target='__blank'>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    )
}
