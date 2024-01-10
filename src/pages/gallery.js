import React, { useEffect, useState, useref } from 'react';
import Navbar from './navbar';
import { FaHome } from 'react-icons/fa';
import Anim from "../assets/gallery21.jpg";
import Slide2 from "../assets/gallery21.jpg"
import Gimg from "../assets/gallery10.jpg"
import "./gallery.css"
const Gallery = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [slidePosition, setSlidePosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setSlidePosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calculate the size of the image based on the scroll position
    const imageSize = 100 + scrollPosition * 0.4; // Adjust the multiplier as needed

    const cardData = [
        { id: 1, title: 'Card 1', content: 'Content for Card 1' },
        { id: 2, title: 'Card 2', content: 'Content for Card 2' },
        { id: 3, title: 'Card 3', content: 'Content for Card 3' },
        // Add more card data as needed
    ];

    // Calculate the position of the card based on the scroll position
    const cardPosition = slidePosition * 0.5;

















    // Adjust the multiplier as needed

    return (
        <div className='relative'>
            <Navbar />
            <div className='flex '>

                <div className=' flex flex-col h-auto'>
                    <div className='text-2xl flex ml-20 top-96 md:top-60 text-green-600 mt-96 fixed  -rotate-90 '>
                        scroll up
                    </div>
                    <h1 className='text-4xl ml-8 md:text-8xl fixed mt-10 md:mt-28 md:ml-32'>
                        CHS Education Center
                    </h1>
                    <div className='text-2xl  right-1 hidden md:flex  text-green-600 mt-24 fixed  rotate-90 '>
                        scroll up
                    </div>
                    <div className=' mt-10 top-80 fixed text-9xl w-screen border-b-4 border-green-600'>

                    </div>
                    <h1 className='text-8xl mt-28 ml-32'>

                    </h1>
                    <h1 className='text-8xl mt-28 ml-32'>

                    </h1>

                    <div className=' absolute text-8xl mt-32 ml-96 left-60 top-96'>
                        <h1 className='text-8xl fixed'>
                            Image Gallery
                        </h1>

                    </div>


                    <div className='flex flex-col relative'>
                        <div style={{ height: '400vh' }} className='flex'>
                            {/* Spacer div to create enough scrollable content */}
                            <div style={{ paddingTop: '200vh' }}>
                                <div
                                    style={{
                                        width: `${imageSize}px`,
                                        height: `${imageSize}px`,
                                        position: 'fixed',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        transition: 'all 0.3s ease', // Add a smooth transition
                                    }}
                                    className='flex'
                                >
                                    {/* Your image goes here */}
                                    <img
                                        src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-1.jpg"
                                        alt="Scrolling Image"
                                        style={{ width: '100vw', height: '100%', objectFit: 'cover' }}
                                    />


                                    <div style={{ height: '200vh' }}>
                                        {/* Spacer div to create enough scrollable content */}
                                        <div style={{ paddingTop: '100vh' }}>
                                            <div
                                                style={{
                                                    width: `${imageSize}px`,
                                                    height: `${imageSize}px`,
                                                    position: 'fixed',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    transition: 'all 0.3s ease', // Add a smooth transition
                                                }}
                                            >
                                                {/* Your image goes here */}
                                                <img
                                                    src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-1.jpg"
                                                    alt="Scrolling Image"
                                                    style={{ width: '100vw', height: '100%', objectFit: 'cover' }}
                                                />
                                            </div>

                                        </div>
                                        <div style={{ height: '200vh', paddingTop: '100vh' }}>
                                            <div
                                                style={{
                                                    position: 'fixed',
                                                    overflow: "hidden",
                                                    top: '50%',
                                                    left: `${50 + cardPosition}%`, // Adjust starting position
                                                    transform: 'translate(-50%, -50%)',
                                                    transition: 'left 0.3s ease', // Add a smooth transition
                                                    width: '380px', // Adjust card width
                                                    height: '200px', // Adjust card height
                                                    // Adjust card background color
                                                    borderRadius: '10px', // Adjust card border radius
                                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow for depth
                                                    zIndex: '1000', // Ensure the card appears above other elements
                                                }}
                                            >
                                                {/* Card Content */}
                                                <h2 style={{ textAlign: 'center', padding: '20px' }}>
                                                    <img src={Gimg} className='  mix-blend-darken -mt-6 w-full'></img>

                                                </h2>
                                            </div>

                                            {/* Spacer div to create enough scrollable content */}
                                            <div style={{ paddingTop: '50vh' }}>
                                                <div>
                                                    <p className='text-8xl'>Scrollable Content Goes Here</p>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>
                        <div className='relative bg-white pl-32 pt-20 w-screen h-auto'>
                            <section class="ag-photo-gallery-block">
                                <div class="ag-format-container">
                                    <div class="ag-photo-gallery_list">
                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__wide">
                                            <figure class="ag-photo-gallery_figure">
                                                <a data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-1.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-2.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-2.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-3.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-3.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__middle">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-4.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-4.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-5.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-5.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__wide">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-6.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-6.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-7.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-7.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-30.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-30.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__middle">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-9.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-9.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-10.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-10.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__wide">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-11.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-11.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-12.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-12.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-13.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-13.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__middle">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-14.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-14.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-15.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-15.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__wide">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-16.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-16.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-17.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-17.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-18.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-18.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__middle">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-19.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-19.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-20.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-20.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__wide">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-21.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-21.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-22.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-22.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-23.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-23.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__middle">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-24.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-24.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-25.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-25.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__wide">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-26.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-26.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-27.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-27.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-28.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-28.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>

                                        <div class="ag-photo-gallery_item ag-photo-gallery_item__middle">
                                            <figure class="ag-photo-gallery_figure">
                                                <a href="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-29.jpg" data-fancybox="gallery">
                                                    <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/img-1098x549-29.jpg" class="ag-photo-gallery_img" alt="" />
                                                </a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>




                            </section>






                            {/* ========================================================================= */}




                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Gallery