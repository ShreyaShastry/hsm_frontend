import React from 'react';
import ParallaxIntro from './intro';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <ParallaxIntro />
      {/* Other content */}
      {/*  main content goes here */}
      {/* For example: */}
      <div>
        <h1>Welcome to Our Hospital</h1>
        {/* content here */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
