import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';
import valueimg from "../../assets/26212813_efhk_d386_220311.jpg"

const Values = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);

    const [gravity1, setGravity1] = useState(0);
    const [gravity2, setGravity2] = useState(0);
    const [gravity3, setGravity3] = useState(0);
    const [gravity4, setGravity4] = useState(0);
    const [gravity5, setGravity5] = useState(0);
    const [gravity6, setGravity6] = useState(0);

    const handleHover1 = () => {
        setIsHovered1(true);
    };

    const handleLeave1 = () => {
        setIsHovered1(false);
    };

    const handleHover2 = () => {
        setIsHovered2(true);
    };

    const handleLeave2 = () => {
        setIsHovered2(false);
    };

    const handleHover3 = () => {
        setIsHovered3(true);
    };

    const handleLeave3 = () => {
        setIsHovered3(false);
    };

    const handleHover4 = () => {
        setIsHovered4(true);
    };

    const handleLeave4 = () => {
        setIsHovered4(false);
    };

    const handleHover5 = () => {
        setIsHovered5(true);
    };

    const handleLeave5 = () => {
        setIsHovered5(false);
    };

    const handleHover6 = () => {
        setIsHovered6(true);
    };

    const handleLeave6 = () => {
        setIsHovered6(false);
    };

    const underlineStyle1 = isHovered1 ? { width: '100%' } : {};
    const underlineStyle2 = isHovered2 ? { width: '100%' } : {};
    const underlineStyle3 = isHovered3 ? { width: '100%' } : {};
    const underlineStyle4 = isHovered4 ? { width: '100%' } : {};
    const underlineStyle5 = isHovered5 ? { width: '100%' } : {};
    const underlineStyle6 = isHovered6 ? { width: '100%' } : {};

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setGravity1(scrollY * 0.1);
            setGravity2(scrollY * 0.1);
            setGravity3(scrollY * 0.1);
            setGravity4(scrollY * 0.1);
            setGravity5(scrollY * 0.1);
            setGravity6(scrollY * 0.1);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='flex md:flex-row flex-col h-auto mb-5 relative justify-between bg-stone-100 '>
                <div className='flex flex-col  mb-10 md:ml-32'>
                    <h1 className='md:text-5xl text-3xl   ml-10 md:ml-0  '>
                        <span className='border-b-2 border-red-600'>K</span>ey Highlights:
                    </h1>
                    <div className='ml-20 relative h-auto w-80 md:w-96'>
                        <div className='md:-mt-60 -mt-52 absolute '>
                            <h1
                                className='md:text-9xl text-7xl text-white opacity-100'
                                style={{ transform: `translateY(${gravity1}px)` }}
                            >
                                01.
                            </h1>
                            <button
                                className={`relative md:-mt-20 mt-10 ml-14  md:text-5xl text-3xl md:ml-24 cursor-pointer ${isHovered1 ? 'hovered' : ''}`}
                                onMouseEnter={handleHover1}
                                onMouseLeave={handleLeave1}
                                style={{ transform: `translateY(${gravity1}px)` }}
                            >
                                <h1 className='absolute -mt-20'>Music</h1>
                                <div className='underline-slider' style={underlineStyle1}></div>
                            </button>
                        </div>
                        <p className='md:text-lg  md:mt-44 mt-32'>
                            In addition to daily music in the classrooms and outdoors, we gather weekly
                            in the music room with the teacher.
                        </p>
                    </div>
                    <div className='md:ml-20 ml-16  relative h-auto w-80 md:w-96'>
                        <div className='md:-mt-64 -mt-60  sm:-mt-52 absolute '>
                            <h1
                                className='md:text-9xl text-7xl text-white opacity-100'
                                style={{ transform: `translateY(${gravity2}px)` }}
                            >
                                02.
                            </h1>
                            <button
                                className={`relative md:-mt-20 mt-10 ml-14  md:text-5xl text-3xl md:ml-24 cursor-pointer ${isHovered2 ? 'hovered' : ''}`}
                                onMouseEnter={handleHover2}
                               
                                onMouseLeave={handleLeave2}
                                style={{ transform: `translateY(${gravity2}px)` }}
                            >
                                <h1 className='absolute -mt-20'>Extra activities</h1>
                                <div className='underline-slider' style={underlineStyle2}></div>
                            </button>
                        </div>
                        <p className='md:text-lg  md:mt-52 mt-36'>
                            Even if you're ill, physical activity at a lower level will help you beat it.
                        </p>
                    </div>
                    <div className='md:ml-20 ml-16  relative h-auto -mt-10   w-80 md:w-96'>
                        <div className=' md:-mt-60 -mt-44 absolute '>
                            <h1
                                className='md:text-9xl text-7xl text-white opacity-100'
                                style={{ transform: `translateY(${gravity3}px)` }}
                            >
                                03.
                            </h1>
                            <button
                                className={`relative md:-mt-20 mt-10 ml-14  md:text-5xl text-3xl md:ml-24 cursor-pointer ${isHovered3 ? 'hovered' : ''}`}
                                onMouseEnter={handleHover3}
                                onMouseLeave={handleLeave3}
                                style={{ transform: `translateY(${gravity3}px)` }}
                            >
                               <h1 className='absolute -mt-20 -ml-10'> Parent conferences</h1>
                                <div className='underline-slider' style={underlineStyle3}></div>
                            </button>
                        </div>
                        <p className='text-lg md:mt-60 mt-52'>
                            We will schedule “Getting to Know You” conferences so that you can tell us
                            about your child and your family. In the Spring, we will provide you an
                            opportunity to discuss the development of your child with his/her teacher.
                        </p>
                    </div>
                </div>
                <img
                    src={valueimg}
                    alt=""
                    className={`h-96 w-96 mix-blend-darken md:mt-60 md:ml-0 ml-5 ${isHovered1 || isHovered2 || isHovered3 || isHovered4 || isHovered5 || isHovered6 ? 'hovered' : ''}`}
                />
                <div className=' flex flex-col md:p-10 md:-ml-32'>
                    <div className='md:ml-20 ml-16  relative h-auto -mt-10   w-80 md:w-96'>
                    <div className='md:-mt-60 -mt-72 absolute '>
                            <h1
                                className='md:text-9xl text-7xl text-white opacity-100'
                                style={{ transform: `translateY(${gravity1}px)` }}
                            >
                                04.
                            </h1>
                            <button
                                className={`relative md:-mt-20 mt-10 ml-14  md:text-5xl text-3xl md:ml-24 cursor-pointer ${isHovered2 ? 'hovered' : ''}`}
                                onMouseEnter={handleHover2}
                                onMouseLeave={handleLeave2}
                                style={{ transform: `translateY(${gravity2}px)` }}
                            >
                                <h1 className='absolute -mt-20'>Mind Game</h1>
                                <div className='underline-slider' style={underlineStyle2}></div>
                            </button>
                        </div>
                        <p className='text-lg  mt-52'>
                            A game is a structured form of play, usually undertaken for enjoyment and sometimes used as an educational tool.
                        </p>
                    </div>
                    <div className='md:ml-20 ml-16  relative h-auto    w-80 md:w-96'>
                        <div className='md:-mt-72 -mt-80 absolute '>
                            <h1
                                className='md:text-9xl text-7xl text-white opacity-100'
                                style={{ transform: `translateY(${gravity5}px)` }}
                            >
                                05.
                            </h1>
                            <button
                                className={`relative md:-mt-20 mt-10 ml-14  md:text-5xl text-3xl md:ml-24 cursor-pointer ${isHovered5 ? 'hovered' : ''}`}
                                onMouseEnter={handleHover5}
                                onMouseLeave={handleLeave5}
                                style={{ transform: `translateY(${gravity5}px)` }}
                            >
                                <h1 className='absolute -mt-20'>

                                Digital Education
                                </h1>
                                <div className='underline-slider' style={underlineStyle5}></div>
                            </button>
                        </div>
                        <p className='text-lg mt-44'>
                            We organize various competitions for our children.
                        </p>
                    </div>
                    <div className='md:ml-20 ml-16  relative h-auto    w-80 md:w-96'>
                        <div className='md:-mt-72 -mt-80  absolute '>
                            <h1
                                className='md:text-9xl text-7xl text-white opacity-100'
                                style={{ transform: `translateY(${gravity6}px)` }}
                            >
                                06.
                            </h1>
                            <button
                                className={`relative md:-mt-20 mt-10 ml-14  md:text-5xl text-3xl md:ml-24 cursor-pointer ${isHovered6 ? 'hovered' : ''}`}
                                onMouseEnter={handleHover6}
                                onMouseLeave={handleLeave6}
                                style={{ transform: `translateY(${gravity6}px)` }}
                            >
                                <h1 className='absolute -mt-20'>

                                Qualified Teachers
                                </h1>
                                <div className='underline-slider' style={underlineStyle6}></div>
                            </button>
                        </div>
                        <p className='text-lg md:mt-52 mt-48'>
                            We are blessed with outstanding and experienced staff. They are the most important part of a positive school experience for your child. We value their knowledge and positive attitude.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Values;
