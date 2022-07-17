import React from 'react';
import Projects from './Projects';

const Portfolio = () => {
    return (
        <section>
            <div className='bg-slate-900 my-7 h-44 flex justify-center items-center'>
                <h2 className='md:text-5xl font-bold text-white text-center'>Portfolio</h2>
            </div>

            <Projects />
        </section>
    );
};

export default Portfolio;