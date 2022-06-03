import React from 'react';
import TechnologysLetestProjectSection from './TechnologysLetestProjectSection';

const LatestProjects = () => {
    return (
        <div className='my-20'>
            <p className='font-bold text-slate-500'>OUR LATEST PROJECTS__</p>
            <div className='lg:flex justify-between items-center'>
                <h1 className='text-4xl text-white font-bold'>We Work to Craft Solid Products <br /> and Services For You</h1>
                <button className='btn btn-outline text-white m-5'>All Projects</button>
            </div>

            {/* technology cards */}
            <TechnologysLetestProjectSection />
        </div>
    );
};

export default LatestProjects;