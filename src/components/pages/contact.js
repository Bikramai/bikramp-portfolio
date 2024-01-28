/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from 'react';
import telephone from '../assets/png/telephone.png';
import email from '../assets/png/email.png';
import { Col, Form, Input, Row, message } from 'antd'
import location from '../assets/png/location.png';
import logo from '../assets/png/bikramp.png'
import { useThemeContext } from '../Context/ThemeContext';


export default function Contact() {
    const { isDarkMode } = useThemeContext();
    const [phone, setPhone] = useState('');
    const [imageFile, setImageFile] = useState(null);



    const handleSubmit = (e) => {

    };


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    return (
        <div className="container pt-[3rem] pb-5" id='contact'>
            <h2 className='font-bold mt-10 text-[36px] text-center text_primary'>Contact me</h2>
            <p className='text-center'>Feels free to contact me for more details</p>
            <div className='flex flex-col-reverse lg:flex-row justify-around mt-16'>
                <Form layout='vertical' className={`max-w-[28rem] ${isDarkMode ? 'bg-slate-800' : "bg-slate-200"} rounded-md flex justify-center flex-col p-[1rem] md:p-[2.5rem]`} onSubmit={handleSubmit}>
                    <Row gutter={16} >
                        <Col span={24}>
                            <Form.Item>
                                <span style={{ fontWeight: '500', opacity: '.8', color: isDarkMode ? '#f4f9e9' : "black" }}>Full Name </span>
                                <Input className='p-2' name='from_name' type='name' required />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item>
                                <span style={{ fontWeight: '500', opacity: '.8', color: isDarkMode ? '#f4f9e9' : "black" }}>Email </span>
                                <Input name='from_email' type='email' className='p-2' required />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item>
                                <span style={{ fontWeight: '500', opacity: '.8', color: isDarkMode ? '#f4f9e9' : "black" }}>Phone Number </span>
                                <Input type='number' className='p-2' onChange={(e) => setPhone(e.target.value)} required />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item>
                                <span style={{ fontWeight: '500', opacity: '.8', color: isDarkMode ? '#f4f9e9' : "black" }}>Project Design File <span style={{ fontSize: '14px' }}> (PSD or Figma)</span></span>
                                <Input type='file' className='p-2' onChange={handleImageUpload} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item>
                                <span style={{ fontWeight: '500', opacity: '.8', color: isDarkMode ? '#f4f9e9' : "black" }}>Project Details :</span>
                                <Input.TextArea name='message' required />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <button className={`bg_primary popins_medium py-2 px-4 rounded-md text_white`} type='submit'>Submit</button>
                        </Col>
                        <Col span={24} style={{ marginTop: '10px' }}>
                            <span style={{ fontSize: '14px', fontWeight: '500', opacity: '.8', color: isDarkMode ? '#f4f9e9' : "black" }}>We will be in Touch soon!</span>
                        </Col>
                    </Row>
                </Form>
                <div className='w-full lg:w-4/12 mb-8 lg:mb-0 lg:ms-0'>
                    <div className="flex justify-center mb-10">
                        <img src={logo} className='rounded-full bg-[#d3d3d3]' alt="" />
                    </div>
                    <div className='flex gap-3 mb-3'>
                        <div className='bg-[#7E74F1] flex justify-center items-center rounded-2xl w-11 h-11 '>
                            <img src={telephone} alt="image not found" />
                        </div>
                        <div className=' flex flex-col'>
                            <span className={`flex justify-start ${isDarkMode ? 'text-[#858484]' : 'text_secondary'}`}>Call me</span>
                            <a href='tel:+3308108782' className={` ${isDarkMode ? 'text-[#d3d3d3]' : 'text_secondary'} no-underline font-medium hover:text-blue-500`}>3308108782</a>     {/*your phone number here  */}
                        </div>
                    </div>
                    <div className='flex gap-3 mb-3'>
                        <div className='bg-[#7E74F1] flex justify-center items-center rounded-2xl w-11 h-11'>
                            <img src={email} alt="image not found" />
                        </div>
                        <div className='flex flex-col'>
                            <span className={`${isDarkMode ? 'text-[#858484]' : 'text_secondary'} flex justify-start`}>Email</span>
                            <a className={` ${isDarkMode ? 'text-[#d3d3d3]' : 'text_secondary'} no-underline font-medium hover:text-blue-500`} href="mailto:example@gmail.com">bikramphurumbo@gmail.com</a>       {/*your email here  */}
                        </div>
                    </div>
                    <div className='flex gap-3 mb-3'>
                        <div className='bg-[#7E74F1] flex justify-center items-center rounded-2xl w-11 h-11 '>
                            <img src={location} alt="image not found" />
                        </div>
                        <div className='flex flex-col'>
                            <span className={`${isDarkMode ? 'text-[#858484]' : 'text_secondary'} flex justify-start`}>Address</span>
                            <a href='https://www.google.com/maps/@31.4114048,73.0988544,12z?entry=ttu' target='__blank' className={` ${isDarkMode ? 'text-[#d3d3d3]' : 'text_secondary'} no-underline font-medium hover:text-blue-500`}>2188 Duxbury, Stow, OH, United States, 44224</a>   {/*your location here  */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
