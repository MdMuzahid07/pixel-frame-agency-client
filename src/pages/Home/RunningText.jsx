import React from 'react';

const RunningText = () => {
    return (
        <div>
            <marquee behavior="scroll" direction="left" scrollamount="7">
                <h2 className='running-font text-slate-100'>Web Development _ UI/UX _ Branding Strategy _ Android/IOS Development _ Digital _ Marketing _ Web Development _ UI/UX _ Branding Strategy _ Android/IOS Development _ Digital _ Marketing _ Web Development _ UI/UX _ Branding Strategy _ Android/IOS Development _ Digital _ Marketing</h2>
            </marquee>

            <marquee behavior="scroll" direction="left" scrollamount="5">
                <h2 className='running-font borderd-text text-black'>Marketing _ SEO _ eCommerce _ Marketing _ SEO _ eCommerce _ Marketing _ SEO _ eCommerce _ Marketing _ SEO _ eCommerce _ Marketing _ SEO _ eCommerce _ Marketing _ SEO _ eCommerce _Marketing _ SEO _ eCommerce</h2>
            </marquee>
        </div>
    );
};

export default RunningText;