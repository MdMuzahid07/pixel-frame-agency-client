import React from 'react';
import Services_card from './Services_card';

const Services = () => {
    return (
        <div>
            <section className='bg-slate-700 rounded-t-lg my-7 h-44 flex justify-center items-center'>
                <h2 className='md:text-5xl font-bold text-white text-center'>Our Services</h2>
            </section>
            <Services_card />
        </div>
    );
};

export default Services;