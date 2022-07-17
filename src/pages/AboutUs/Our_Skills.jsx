import React from 'react';

const Our_Skills = () => {
    return (
        <div className='grid lg:grid-cols-2 my-20'>
            <div>

            </div>
            <div>
                <div>
                    <h2>{`<> UI/UX </>`}</h2>
                    <progress class="progress progress-success bg-slate-900" value="50" max="100"></progress>
                </div>
                <div className='my-4'>
                    <h2>{`<> Android Development </>`}</h2>
                    <progress class="progress progress-success bg-slate-900" value="50" max="100"></progress>
                </div>
                <div>
                    <h2>{`<> IOS Development </>`}</h2>
                    <progress class="progress progress-success bg-slate-900" value="50" max="100"></progress>
                </div>
                <div className='my-4'>
                    <h2>{`<> Web Development </>`}</h2>
                    <progress class="progress progress-success bg-slate-900" value="50" max="100"></progress>
                </div>
                <div>
                    <h2>{`<> Digital Marketing </>`}</h2>
                    <progress class="progress progress-success bg-slate-900" value="50" max="100"></progress>
                </div>
                <div className='mt-4'>
                    <h2>{`<> Product Design </>`}</h2>
                    <progress class="progress progress-success bg-slate-900" value="50" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Our_Skills;