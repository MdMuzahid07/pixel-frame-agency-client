import React from 'react';
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
        </div>
    );
};

export default Home;