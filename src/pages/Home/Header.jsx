import React from 'react';

const Header = () => {
    return (
        <div className='bg-image py-20'>
            <div className='flex justify-center'>
                <div className='lg:flex justify-center bg-svg items-center'>
                    <div>
                        <h1 className='header-font lg:ml-44 text-white font-bold '>Develop</h1>
                        <h3 className='header-font text-white font-bold '>the Digital</h3>
                        <h3 className='header-font lg:ml-44 text-white font-bold '>Universe</h3>
                    </div>
                    <div>
                        <h2 className='md:text-xl text-white font-bold'>
                            With every single one of our clients, we bring forth a deep passion for creative problem solving — which is what we deliver.
                        </h2>
                    </div>
                </div>

                <div className='font-bold text-white'>
                    <p className='rotate -mx-10 md:my-48'>PixelFrame2gmail.com</p>
                    <p className='rotate -mx-10 my-48'>+000 7777 777</p>
                </div>
            </div>
        </div>
    );
};

export default Header;