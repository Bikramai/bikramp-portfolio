/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

const SocialMediaLinks = () => {
    return (
        <>
            <div className="main-links-hero">
                <div className="icons" style={{
                    left: '50px',
                    position: 'fixed',
                    bottom: '0',
                    transition: 'all ease .5s',
                }}>
                    <span className='icons-span mt-0'>
                        <a href="https://www.linkedin.com/in/bikramp/" target='__blank'>
                            <FaLinkedinIn size={22} />          {/*  give the urls of your social media links */}
                        </a>
                    </span>
                    <span className='icons-span mt-0'>
                        <a href="https://github.com/Bikramai" target='__blank'>
                            <FaGithub size={22} />             {/*  give the urls of your social media links */}
                        </a>
                    </span>
                    <span className='icons-span mt-0'>
                        <a href="" target='__blank'>         {/*  give the urls of your social media links */}
                            <FaFacebookF size={22} />
                        </a>
                    </span>
                    <span className='icons-span mt-0'>
                        <a href="https://www.instagram.com/abodezen0/" target='__blank'>
                            <FaInstagram size={22} />           {/*  give the urls of your social media links */}
                        </a>
                    </span>
                    <span className='icons-span mt-0'>
                        <a href="tel:+3308108782">
                            <FaWhatsapp size={22} />          {/*  give your phone number next to plus  */}
                        </a>
                    </span>
                    <div className='vertical-line ms-3'></div>
                </div>
            </div>
            <div className={`contentContainer show logoScreen1:block fixed bottom-0 right-[25px]`}>
                <div className="w-[2.5rem] flex flex-col justify-between items-center">
                    <a className="email-link no-underline" href="mailto:bikramphurumbo@gmail.com">   {/*  give the mail link */}
                        bikramphurumbo@gmail.com
                    </a>
                    <div className="vertical-line"></div>
                </div>
            </div>
        </>
    )
}

export default SocialMediaLinks