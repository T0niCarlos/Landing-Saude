import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundImage from '../assets/img/medico.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
`;

const HeroSection = styled.section`
  background: url(${backgroundImage}) no-repeat center center/cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  animation: ${zoomIn} 2s ease-in-out, ${fadeIn} 1.5s ease-in;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 1.5s ease-in;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 2s ease-in;
`;

const HeroTitle = styled.h1`
  font-size: 3em;
  margin: 0;
  animation: ${fadeIn} 2.5s ease-in;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2em;
  margin: 10px 0;
  animation: ${fadeIn} 3s ease-in;
`;

const Hero = () => (
  <HeroSection id="home">
    <HeroOverlay />
    <HeroContent>
      <HeroTitle>Dr. João Silva</HeroTitle>
      <HeroSubtitle>Cuidando da sua saúde com carinho e dedicação.</HeroSubtitle>
    </HeroContent>
  </HeroSection>
);

export default Hero;
