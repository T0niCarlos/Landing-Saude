import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';



const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;
