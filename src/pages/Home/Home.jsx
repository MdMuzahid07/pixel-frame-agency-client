import React from 'react';
import DiscoverOurAward from './DiscoverOurAward';
import Header from './Header';
import LatestProjects from './LatestProjects';
import OurProfessionals from './OurProfessionals';
import RunningText from './RunningText';
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
        </div>
    );
};

export default Home;