/* eslint-disable no-unused-vars */
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper';
import { comments } from '../../utils/data';
import { Divider } from 'antd';
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren } from '../../utils/motion';
import { useThemeContext } from '../Context/ThemeContext';

const Testimonials = () => {
    const { isDarkMode } = useThemeContext();

    return (
        <div className="container overflow-hidden pt-[5rem]" id="testimonials">
            <motion.div className="testimonials my-5" variants={staggerChildren} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}>
                <motion.div className="container" variants={fadeIn("down", "tween", 0.5, 1)} >
                    <div className="row">
                        <div className="col-lg-6 about-section text-center m-auto">
                            <div className="flex flex-col items-center gap-2">
                                <span className='popins_semibold text-3xl'>People talk about us</span>
                                <p className='px-2 mb-5 col-md-9 text_secondarylight m-auto'>
                                    Clients rave about Bikramp's exceptional skills and unwavering dedication
                                </p>
                            </div>
                        </div>
                        <div className="col px-3 px-sm-1">
                            <Swiper
                                slidesPerView={'auto'}
                                spaceBetween={20}
                                freeMode={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {comments.map((comment, i) => {
                                    return (
                                        <SwiperSlide key={i}
                                            style={{
                                                boxShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                                            }}
                                            className={`person-section max-w-[25rem] ${isDarkMode ? 'bg_lightSecondary' : ''}`}>
                                            {comment?.img && <img src={comment?.img} className={`${isDarkMode ? 'bg_secondary' : 'bg_lightSecondary'}`} alt="" />}
                                            <p className='mb-0 comment'>{comment?.comment}</p>
                                            <Divider />
                                            <h2 className='name'>{comment?.name}</h2>
                                            <p className='post'>{comment?.post}</p>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
export default Testimonials

