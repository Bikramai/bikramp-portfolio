/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'
import { FaCalendar, FaCheck, FaUser, FaUsers } from 'react-icons/fa'

const AboutCounter = () => {


    const counterRefs = {
        projectsCompleted: useRef(null),
        yearOfExperience: useRef(null),
        happyClients: useRef(null),
        projectsCompleted2: useRef(null),
    };

    useEffect(() => {
        const options = { root: null, rootMargin: '0px', threshold: 0.2 };

        const handleCounterAnimation = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const targetNumber = parseInt(entry.target.getAttribute('data-target'));
                    const counterElement = entry.target;
                    let counter = 0;
                    const increment = targetNumber / 100;

                    const updateCounter = () => {
                        if (counter < targetNumber) {
                            counterElement.textContent = Math.floor(counter);
                            counter += increment;
                            requestAnimationFrame(updateCounter);
                        } else {
                            counterElement.textContent = targetNumber;
                        }
                    };

                    updateCounter();
                    observer.unobserve(entry.target);
                } else {

                    entry.target.textContent = '0';
                }
            });
        };

        const observer = new IntersectionObserver(handleCounterAnimation, options);

        Object.values(counterRefs).forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            Object.values(counterRefs).forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);

    return (
        <div className="bg_choose_img relative">
            <div className="bg-overlay"></div>
            <div className="container z-50 position-relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 counter__wrapper">
                <div className="counter section">
                    <div className="counter__item">
                        <span className="counter__icon">
                            <FaCheck />
                        </span>
                        <p><span className="counter__number" data-target="20" ref={counterRefs.projectsCompleted}>0</span>+</p>
                        <h2 className="counter__title">Projects Completed</h2>
                    </div>
                </div>

                <div className="counter section">
                    <div className="counter__item">
                        <span className="counter__icon">
                            <FaCalendar />
                        </span>
                        <p><span className="counter__number" data-target="1" ref={counterRefs.yearOfExperience}>0</span>+</p>
                        <h2 className="counter__title">Year of Experience</h2>
                    </div>
                </div>

                <div className="counter section">
                    <div className="counter__item">
                        <span className="counter__icon">
                            <FaUsers />
                        </span>
                        <p><span className="counter__number" data-target="5" ref={counterRefs.happyClients}>0</span>+</p>
                        <h2 className="counter__title">Happy Clients</h2>
                    </div>
                </div>

                <div className="counter section">
                    <div className="counter__item">
                        <span className="counter__icon">
                            <FaUser />
                        </span>
                        <p><span className="counter__number" data-target="10" ref={counterRefs.projectsCompleted2}>0</span>+</p>
                        <h2 className="counter__title">Cup of Coffee</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCounter