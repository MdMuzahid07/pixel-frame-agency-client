import React from 'react';

const Services_card = () => {
    return (
        <div className='mt-10 px-2'>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 gap-4 text-slate-400'>
                <div className='sitcky'>
                    <h2 className='text-3xl font-bold text-slate-700'>Our Services</h2>
                    <h2 className='text-5xl font-bold text-white my-4'>
                        Giving Your
                        Business Some
                        Great Ideas
                    </h2>
                </div>

                <div>
                    <div class="card bg-slate-900 h-64 rounded-none mb-4">
                        <div class="card-body">
                            <h2 class="card-title">{`<> 01 </>`}</h2>
                            <hr />
                            <p className="text-2xl">UI/UX Experience</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-slate-900 rounded-none">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-slate-900 h-64 rounded-none mb-4">
                        <div class="card-body">
                            <h2 class="card-title">{`<> 02 </>`}</h2>
                            <hr />
                            <p className="text-2xl">If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-slate-900 rounded-none">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-slate-900 h-64 rounded-none mb-4">
                        <div class="card-body">
                            <h2 class="card-title">{`<> 03 </>`}</h2>
                            <hr />
                            <p className="text-2xl">If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-slate-900 rounded-none">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="card bg-slate-900 h-64 rounded-none mb-4">
                        <div class="card-body">
                            <h2 class="card-title">{`<> 04 </>`}</h2>
                            <hr />
                            <p className="text-2xl">If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-slate-900 rounded-none">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-slate-900 h-64 rounded-none mb-4">
                        <div class="card-body">
                            <h2 class="card-title">{`<> 05 </>`}</h2>
                            <hr />
                            <p className="text-2xl">If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-slate-900 rounded-none">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-slate-900 h-64 rounded-none mb-4">
                        <div class="card-body">
                            <h2 class="card-title">{`<> 06 </>`}</h2>
                            <hr />
                            <p className="text-2xl">If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-slate-900 rounded-none">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services_card;