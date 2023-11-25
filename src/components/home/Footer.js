import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaHospital, FaPhone, FaAmbulance, FaEnvelope, FaMapMarker, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bubbleAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const FooterContainer = styled.div`
  background: linear-gradient(to right, #3498db, #2c3e50);
  color: #333;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1s ease;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  font-family: 'Open Sans', sans-serif;
`;

const Heading = styled.h2`
  font-size: 2.5em;
  color: #fff;
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  color: #69f5b4;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0;
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
  animation: ${fadeIn} 1s ease;
  transform-origin: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  max-width: 300px;
`;

const Icon = styled.span`
  margin-bottom: 10px;
  font-size: 3em;
  color: #3498db;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  display: block;
  margin: 0 auto;
  animation: ${bubbleAnimation} 2s infinite;
`;

const SocialIcon = styled.a`
  color: #3498db;
  font-size: 2.5em;
  margin-right: 15px;
  transition: color 0.3s;

  &:hover {
    color: #2980b9;
  }
`;

const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled.li`
  font-size: 1.2em;
  margin-bottom: 5px;
`;

const Copyright = styled.p`
  font-size: 1em;
  margin-top: 20px;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Heading>Contact Us</Heading>
      <Row>
        <Column>
          <Icon>
            <FaHospital />
          </Icon>
          <h3>Hospital Information</h3>
          <p>Hospital Name</p>
          <p>
            <Icon>
              <FaMapMarker />
            </Icon>
            Address
          </p>
          <p>
            <Icon>
              <FaPhone />
            </Icon>
            Phone: xxx-xxx-xxxx
          </p>
        </Column>
        <Column>
          <Icon>
            <FaAmbulance />
          </Icon>
          <h3>Services</h3>
          <ServicesList>
            <ServiceItem>Emergency Care</ServiceItem>
            <ServiceItem>General Medicine</ServiceItem>
            <ServiceItem>Surgery</ServiceItem>
          </ServicesList>
        </Column>
        <Column>
          <Icon>
            <FaEnvelope />
          </Icon>
          <h3>Connect With Us</h3>
          <p>Email: info@example.com</p>
          <p>
            Follow us on:
            <SocialIcon href="#" target="_blank">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
              <FaInstagram />
            </SocialIcon>
          </p>
        </Column>
      </Row>
      <Copyright>&copy; 2023 Your Hospital. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
