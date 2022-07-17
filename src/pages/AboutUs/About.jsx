import React from 'react';
import Fun_facts from '../Home/Fun_facts';
import OurProfessionals from '../Home/OurProfessionals';
import RunningText from '../Home/RunningText';
import Hero_Section from './Hero_Section';
import Our_Skills from './Our_Skills';

const About = () => {
    return (
        <div className='md:px-2 text-slate-400'>
            <section className='bg-slate-900 my-7 h-44 flex justify-center items-center'>
                <h2 className='md:text-5xl font-bold text-white text-center'>About Us</h2>
            </section>

            <Hero_Section />
            <Fun_facts />
            <Our_Skills />
            <RunningText />
            <OurProfessionals />
        </div>
    );
};

export default About;