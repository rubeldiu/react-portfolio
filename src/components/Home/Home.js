import React from 'react';
import Navigation from '../common/Navigation/Navigation';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeBody from '../HomeBody/HomeBody';


const Home = () => {
    return (
        <div>
            <Navigation/>
            <Header/>
            <HomeBody/>
            <Footer/>
        </div>
    );
};

export default Home;