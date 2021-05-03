import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import HomeBody from '../HomeBody/HomeBody';
import Particle from '../Particle';

const Home = () => {
    return (
        <section>
        <Container fluid className="home-section" id="home">
          <Particle />
            <Header/>
            <HomeBody/>
           </Container>
        </section>
    );
};

export default Home;