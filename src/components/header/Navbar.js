/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Col, Container, Nav, Navbar, } from "react-bootstrap";
import './navbar.css'
import CV from '../assets/CV/Bikram Phurumbo Resume -2024.pdf'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { FaDownload, FaMoon, FaSun } from 'react-icons/fa'
import { useThemeContext } from "../Context/ThemeContext";

const NavHeader = () => {
    const [show, setShow] = useState(false);
    const { toggleButton, isDarkMode } = useThemeContext();
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleResume = () => {
        try {
            fetch(CV)
                .then(response => {
                    if (response.ok) {
                        response.blob().then(blob => {
                            const fileURL = window.URL.createObjectURL(blob);
                            let a = document.createElement('a');
                            a.href = fileURL;
                            a.download = 'Bikram.pdf';
                            a.click();
                            window.URL.revokeObjectURL(fileURL);
                        });
                    } else {
                        throw Error('Fetch request failed');
                    }
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                });
        } catch (error) {
            console.error('Other error:', error);
        }
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const handleLinkClick = (path) => {
        navigate(path);
        handleClose();
    };

    return (
        <Navbar expand="lg" className={`main_nav px-1 px-md-3 shadow-sm ${isDarkMode ? 'dark-mode' : ''} py-[10px] `} id="navbar">
            <Container fluid="md" className='main_nav2' >
                <Navbar.Brand className='min-[992px]:w-[10rem]'>
                    <button onClick={scrollToTop} className={`text-2xl popins_semibold drop-shadow-md ${isDarkMode ? 'text_dark' : 'text_primary'} header-logo`}>Bikram</button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setShow(!show)} className='lg:ms-2 ms-auto border-0 u-hamburger d-lg-none' style={{
                    fontSize: "13px",
                    paddingInline: "6px"
                }} >
                    <span id="hamburgerTrigger" className="u-hamburger__box">
                        <span className="u-hamburger__inner"></span>
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-navm" className={`  ${show ? "notShow_" : "show_"}`}>
                    <Nav className='nav_link gap-4 align-items-lg-center mx-lg-auto ' >
                        <ScrollLink onClick={handleClose} className={`${isDarkMode ? "text_dark" : 'text_primary'} popins_medium no-underline cursor-pointer`} to="services" smooth={true} duration={500}>Services</ScrollLink>
                        <ScrollLink onClick={handleClose} className={`${isDarkMode ? "text_dark" : 'text_primary'} popins_medium no-underline cursor-pointer`} to="experience" smooth={true} duration={500}>Experenice</ScrollLink>  {/* Use ScrollLink onClick={handleClose} for smooth scrolling */}
                        <ScrollLink onClick={handleClose} className={`${isDarkMode ? "text_dark" : 'text_primary'} popins_medium no-underline cursor-pointer`} to="portfolio" smooth={true} duration={500}>Portfolio</ScrollLink>
                        <ScrollLink onClick={handleClose} className={`${isDarkMode ? "text_dark" : 'text_primary'} popins_medium no-underline cursor-pointer`} to="testimonials" smooth={true} duration={500}>Testimonials</ScrollLink>
                        <ScrollLink onClick={handleClose} className={`${isDarkMode ? "text_dark" : 'text_primary'} popins_medium no-underline cursor-pointer`} to="contact" smooth={true} duration={500}>Contact</ScrollLink>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="min-[992px]:w-[10rem] flex gap-3 ms-2" >
                    <button className={`text-2xl cursor-pointer w-fit ${isDarkMode ? 'text_dark' : 'text_primary'}`} onClick={toggleButton}>{isDarkMode ? <FaMoon /> : <FaSun />}</button>
                    <button className='d-none d-lg-flex w-fit justify-center items-center bg-transparent border gap-2 px-3 py-2 rounded-lg' onClick={handleResume}><span className={`popins_medium text-sm ${isDarkMode ? 'text_dark' : 'text_primary'}`}>Resume</span> <FaDownload className={`text-sm ${isDarkMode ? 'text_dark' : 'text_primary'}`} /></button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavHeader;