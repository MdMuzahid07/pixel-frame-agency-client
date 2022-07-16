import React from 'react';
import DiscoverOurAward from './DiscoverOurAward';
import Fun_facts from './Fun_facts';
import Header from './Header';
import LatestProjects from './LatestProjects';
import OurProfessionals from './OurProfessionals';
import RunningText from './RunningText';
import Testimonial from './Testimonial';
import WhatWeOffer from './WhatWeOffer';

const Home = () => {
    return (
        <div>
            <Header />
            <hr />
            <WhatWeOffer />
            <RunningText />
            <DiscoverOurAward />
            <LatestProjects />
            <hr />
            <OurProfessionals />
            <Fun_facts />
            <Testimonial />
        </div>
    );
};

export default Home;