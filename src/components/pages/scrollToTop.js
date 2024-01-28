import React, { useEffect, useState } from 'react'
import { FaLevelUpAlt } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {showScrollToTop && (
                <div
                    className="scroll-to-top"
                    style={{
                        position: 'fixed',
                        right: '30px',
                        bottom: '20px',
                        transition: 'all ease .5s',
                    }}
                    onClick={scrollToTop}
                >
                    <div
                        style={{
                            display: 'flex',
                            transition: 'all ease .5s',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#7E22CE ',
                            width: '50px',
                            height: '50px',
                            color: 'white',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px',
                        }}
                    >
                        <FaLevelUpAlt size={24} style={{ display: 'block' }} />
                    </div>
                </div>
            )
            }
        </>
    )
}

export default ScrollToTopButton