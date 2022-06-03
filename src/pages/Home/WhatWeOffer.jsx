import React from 'react';
import OfferPageBrandSlider from './OfferPageBrandSlider';

const WhatWeOffer = () => {
    return (
        <div className='my-20'>
            {/* <div class="divider divider-horizontal h-screen w-24 bg-slate-700"></div> */}
            <p className='font-bold text-slate-500'>WHAT WE OFFER__</p>
            <div className='lg:flex justify-between items-center'>
                <h1 className='text-4xl text-white font-bold'>Unlock Revenue Growth <br /> for Your Business</h1>
                <button className='btn btn-outline text-white m-5'>OUR SERVICES</button>
            </div>

            {/* service cards */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2 mx-auto my-20'>
                <div class="card w-lg h-96 bg-base-100 image-full">
                    <figure><img src="https://api.lorem.space/image/face?hash=3174" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Android/IOS Solution</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-outline text-white">Get Service</button>
                        </div>
                    </div>
                </div>
                <div class="card w-lg h-96 bg-base-100 image-full">
                    <figure><img src="https://api.lorem.space/image/face?hash=3174" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Web Solution</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-outline text-white">Get Service</button>
                        </div>
                    </div>
                </div>
                <div class="card w-lg h-96 bg-base-100 image-full">
                    <figure><img src="https://api.lorem.space/image/face?hash=3174" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Custom Solution</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-outline text-white">Get Service</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* brand name slider */}
            <div>
                <OfferPageBrandSlider />
            </div>
        </div>
    );
};

export default WhatWeOffer;