import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DiscoverOurAward = () => {
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
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
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
        <div className='my-20'>
            <p className='font-bold text-slate-500 mb-5'>WE PROUD THAT__</p>
            <h1 className='text-4xl text-white font-bold'>Discover Our Awards</h1>
            <div className="lg:max-w-screen-lg mx-auto mt-10">
                <Slider {...settings}>
                    {/* {
                    reviews?.map((review) => */}

                    <div>
                        <h2 className="text-3xl font-bold text-white mb-10">2015</h2>
                        <hr />

                        <div>
                            <h2 className="text-2xl font-bold text-white my-4">Awwwards</h2>
                            <h3 className="text-slate-300">
                                Website of the day <br />
                                Mobile excellence
                            </h3>
                            <h2 className="text-xl font-bold text-white my-3">CSS3 Design Awards</h2>
                            <h3 className="text-slate-300">
                                Honorable mention
                            </h3>
                        </div>
                    </div>


                    <div>
                        <h2 className="text-3xl font-bold text-white mb-10">2015</h2>
                        <hr />

                        <div>
                            <h2 className="text-2xl font-bold text-white my-4">Awwwards</h2>
                            <h3 className="text-slate-300">
                                Website of the day <br />
                                Mobile excellence
                            </h3>
                            <h2 className="text-xl font-bold text-white my-3">CSS3 Design Awards</h2>
                            <h3 className="text-slate-300">
                                Honorable mention
                            </h3>
                        </div>
                    </div>


                    <div>
                        <h2 className="text-3xl font-bold text-white mb-10">2015</h2>
                        <hr />

                        <div>
                            <h2 className="text-2xl font-bold text-white my-4">Awwwards</h2>
                            <h3 className="text-slate-300">
                                Website of the day <br />
                                Mobile excellence
                            </h3>
                            <h2 className="text-xl font-bold text-white my-3">CSS3 Design Awards</h2>
                            <h3 className="text-slate-300">
                                Honorable mention
                            </h3>
                        </div>
                    </div>


                    <div>
                        <h2 className="text-3xl font-bold text-white mb-10">2015</h2>
                        <hr />

                        <div>
                            <h2 className="text-2xl font-bold text-white my-4">Awwwards</h2>
                            <h3 className="text-slate-300">
                                Website of the day <br />
                                Mobile excellence
                            </h3>
                            <h2 className="text-xl font-bold text-white my-3">CSS3 Design Awards</h2>
                            <h3 className="text-slate-300">
                                Honorable mention
                            </h3>
                        </div>
                    </div>


                    <div>
                        <h2 className="text-3xl font-bold text-white mb-10">2015</h2>
                        <hr />

                        <div>
                            <h2 className="text-2xl font-bold text-white my-4">Awwwards</h2>
                            <h3 className="text-slate-300">
                                Website of the day <br />
                                Mobile excellence
                            </h3>
                            <h2 className="text-xl font-bold text-white my-3">CSS3 Design Awards</h2>
                            <h3 className="text-slate-300">
                                Honorable mention
                            </h3>
                        </div>
                    </div>


                    {/* ) */}
                    {/* // } */}

                </Slider>
            </div>
        </div>
    );
};

export default DiscoverOurAward;
