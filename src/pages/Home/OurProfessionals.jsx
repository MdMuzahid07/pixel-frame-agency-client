import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurProfessionals = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='lg:max-w-5xl mx-auto my-20'>
            <div className="mb-7">
                <h2 className='text-xl font-bold text-slate-500'>MEET OUR PROFESSIONALS</h2>
                <h2 className='text-3xl font-bold text-white'>Team that Builds Ideas Driven by the Future</h2>
            </div>
            <Slider {...settings}>

                <div className="p-2">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                    <div className="text-white">
                        <h2 class="card-title">Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim!</p>
                    </div>
                </div>


                <div className="p-2">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                    <div className="text-white">
                        <h2 class="card-title">Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim!</p>
                    </div>
                </div>


                <div className="p-2">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                    <div className="text-white">
                        <h2 class="card-title">Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim!</p>
                    </div>
                </div>


                <div className="p-2">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                    <div className="text-white">
                        <h2 class="card-title">Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim!</p>
                    </div>
                </div>


                <div className="p-2">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                    <div className="text-white">
                        <h2 class="card-title">Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim!</p>
                    </div>
                </div>


                <div className="p-2">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                    <div className="text-white">
                        <h2 class="card-title">Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim!</p>
                    </div>
                </div>


                <div className="p-2">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                    <div className="text-white">
                        <h2 class="card-title">Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim!</p>
                    </div>
                </div>


                <div className="p-2">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                    <div className="text-white">
                        <h2 class="card-title">Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim!</p>
                    </div>
                </div>


            </Slider>
        </div>
    );
};

export default OurProfessionals;
