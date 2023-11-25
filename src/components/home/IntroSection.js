import React from 'react';
import { useSpring, animated } from 'react-spring';
import './IntroSection.css'; // Ensure to import your CSS file
import MeetOurDoctors from './MeetOurDoctors';
import OurServices from './OurServices';

const IntroSection = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 800 },
  });

  return (
    <>
    <div>
      <div className="intro-section">
        {/* Animated Polygons */}
        <div className="polygons-container">
          <div className="polygon"></div>
          <div className="polygon"></div>
          <div className="polygon"></div>
        </div>

        {/* SVG Wave */}
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="waves">
          <defs>
            <style type="text/css">
              {`
                .wave {
                  animation: wave 8s linear infinite;
                }

                .wave1 {
                  animation: wave1 10s linear infinite;
                }

                .wave2 {
                  animation: wave2 12s linear infinite;
                }

                @keyframes wave {
                  0% {
                    transform: translateX(0%);
                  }
                  100% {
                    transform: translateX(100%);
                  }
                }

                @keyframes wave1 {
                  0% {
                    transform: scaleY(1.2) translateX(0%);
                  }
                  100% {
                    transform: scaleY(1.2) translateX(100%);
                  }
                }

                @keyframes wave2 {
                  0% {
                    transform: scaleY(.8) translateX(0%);
                  }
                  100% {
                    transform: scaleY(.8) translateX(100%);
                  }
                }
              `}
            </style>
            <path id='sineWave' fill="#0099ff" fillOpacity="0.2" d="M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160 V0 H0" />
          </defs>
          <use className="wave" href="#sineWave" />
          <use className="wave" x="-100%" href="#sineWave" />
          <use className="wave1" href="#sineWave" />
          <use className="wave1" x="-100%" href="#sineWave" />
          <use className="wave2" href="#sineWave" />
          <use className="wave2" x="-100%" href="#sineWave" />
        </svg>

        {/* Content */}
        <animated.div style={animationProps} className="intro-content">
          {/* Your content here */}
          <h1>Welcome to Our Hospital</h1>
          <p>Providing compassionate care...</p>
        </animated.div>
      </div>

      {/* Register Section */}
      <div className="register-section">
        <h2>Register as a Patient</h2>
        <p>Experience personalized healthcare. Register now!</p>
      </div>
    </div>
    <MeetOurDoctors />
    <OurServices />
    </>
  );
};

export default IntroSection;
