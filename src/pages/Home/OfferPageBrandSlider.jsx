import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const OfferPageBrandSlider = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="lg:max-w-screen-lg	 mx-auto">
            <h1 className="text-xl text-center font-bold text-slate-700">OVER 1K+ SOFTWARE BUSINESSES GROWING WITH PIXEL FRAME</h1>
            <Slider {...settings}>

                {/* {
                    reviews?.map((review) => */}
                <div class="max-w-48 h-24 bg-black mt-10">
                    <img src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_1_1.png" alt="" />
                </div>
                
                <div class="w-48 h-24 bg-black mt-10">
                    <img src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_1_1.png" alt="" />
                </div>
                <div class="w-48 h-24 bg-black mt-10">
                    <img src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_1_1.png" alt="" />
                </div>
                <div class="w-48 h-24 bg-black mt-10">
                    <img src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_1_1.png" alt="" />
                </div>
                <div class="w-48 h-24 bg-black mt-10">
                    <img src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_1_1.png" alt="" />
                </div>
                <div class="w-48 h-24 bg-black mt-10">
                    <img src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_1_1.png" alt="" />
                </div>
                <div class="w-48 h-24 bg-black mt-10">
                    <img src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_1_1.png" alt="" />
                </div>
                <div class="w-48 h-24 bg-black mt-10">
                    <img src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_1_1.png" alt="" />
                </div>
                <div class="w-48 h-24 bg-black mt-10">
                    <img src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_1_1.png" alt="" />
                </div>
                <div class="w-48 h-24 bg-black mt-10">
                    <img src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_1_1.png" alt="" />
                </div>
                <div class="w-48 h-24 bg-black mt-10">
                    <img src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_1_1.png" alt="" />
                </div>
                <div class="w-48 h-24 bg-black mt-10">
                    <img src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_1_1.png" alt="" />
                </div>


              
                {/* ) */}
                {/* // } */}

            </Slider>
        </div>
    );
};

export default OfferPageBrandSlider;

