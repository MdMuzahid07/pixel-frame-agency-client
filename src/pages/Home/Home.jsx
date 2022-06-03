import React from 'react';
import DiscoverOurAward from './DiscoverOurAward';
import Header from './Header';
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
        </div>
    );
};

export default Home;