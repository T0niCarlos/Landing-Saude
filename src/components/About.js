import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn, slideInUp } from 'react-animations';

// Animações personalizadas
const fadeInAnimation = keyframes`${fadeIn}`;
const slideInUpAnimation = keyframes`${slideInUp}`;

const AboutSection = styled.section`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(135deg, #e0f7fa, #ffffff);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: 1s ${fadeInAnimation};
`;

const AboutTitle = styled.h2`
  margin-bottom: 30px;
  color: #009688;
  font-size: 2.5em;
  animation: 1s ${slideInUpAnimation};
`;

const AboutText = styled.p`
  font-size: 1.2em;
  color: #333;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  animation: 1s ${slideInUpAnimation} 0.5s;
  animation-fill-mode: both;
`;

const About = () => (
  <AboutSection id="about">
    <AboutTitle>Sobre Mim</AboutTitle>
    <AboutText>
      Sou o Dr. João Silva, um profissional dedicado à medicina há mais de 20 anos. Minha missão é proporcionar saúde e bem-estar aos meus pacientes, oferecendo um atendimento humanizado e de qualidade.
    </AboutText>
  </AboutSection>
);

export default About;
