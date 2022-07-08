import React from 'react';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';
import SecondSection from '../Second-Section/SecondSection';
import ThirdSection from '../Third-Section/ThirdSection';
import Footer from '../Footer/Footer';

import './HomePage.css';


function HomePage() {
  return (
    <div className='home-page'>
        <Navbar />
        <Main />
        <SecondSection />
        <ThirdSection />
        <Footer />
    </div>
  )
}

export default HomePage;
