import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;