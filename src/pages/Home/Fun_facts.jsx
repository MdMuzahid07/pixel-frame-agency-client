import React from 'react';

const Fun_facts = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2'>
                <div className='flex justify-center items-center'>
                    <h2 className='latest-project-font font bold font-slate-700 transition-text hover:mr-7'>10</h2>
                    <p className='text-2xl -ml-5 text-white'>Years of <br /> Experience</p>
                </div>

                <div className='flex justify-center items-center'>
                    <h2 className='latest-project-font font bold font-slate-700 transition-text hover:mr-7'>18</h2>
                    <p className='text-2xl -ml-5 text-white'>Skilled <br /> Professinals</p>
                </div>

                <div className='flex justify-center items-center'>
                    <h2 className='latest-project-font font bold font-slate-700 transition-text hover:mr-7'>32</h2>
                    <p className='text-2xl -ml-5 text-white'>Visited <br /> Countries</p>
                </div>

                <div className='flex justify-center items-center'>
                    <h2 className='latest-project-font font bold font-slate-700 transition-text hover:mr-7'>1K</h2>
                    <p className='text-2xl -ml-5 text-white'>Project <br /> Worldwide</p>
                </div>
            </div>
        </div>
    );
};

export default Fun_facts